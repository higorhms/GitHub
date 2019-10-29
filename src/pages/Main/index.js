import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ProfileIcon from 'react-native-vector-icons/AntDesign';
import { Keyboard, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import PropTypes from 'prop-types';
import {
    Container,
    Form,
    Input,
    SubmitButton,
    List,
    User,
    Avatar,
    Name,
    Bio,
    ProfileButton,
    ProfileButtonText,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    static navigationOptions = {
        title: 'Users',
    };

    state = {
        users: [],
        newUser: '',
        loading: false,
    };

    async componentDidMount() {
        const users = await AsyncStorage.getItem('users');

        if (users) {
            this.setState({ users: JSON.parse(users) });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { users } = this.state;
        if (prevState.users !== users) {
            AsyncStorage.setItem('users', JSON.stringify(users));
        }
    }

    handleAddUser = async () => {
        const { users, newUser } = this.state;

        this.setState({ loading: true });

        await api.get(`/users/${newUser}`).then(response => {
            const data = {
                login: response.data.login,
                name: response.data.name,
                bio: response.data.bio,
                avatar: response.data.avatar_url,
            };

            this.setState({
                users: [...users, data],
                newUser: '',
                loading: false,
            });
        });

        Keyboard.dismiss();
    };

    handleNavigate = user => {
        const { navigation } = this.props;
        navigation.navigate('User', { user });
    };

    render() {
        const { newUser, users, loading } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder="Add User"
                        returnKeyType="send"
                        onSubmitEditing={this.handleAddUser}
                        value={newUser}
                        onChangeText={text => this.setState({ newUser: text })}
                    />
                    <SubmitButton
                        loading={loading}
                        onPress={this.handleAddUser}
                    >
                        {loading ? (
                            <ActivityIndicator />
                        ) : (
                            <Icon name="add" color="#FFF" size={20} />
                        )}
                    </SubmitButton>
                </Form>

                <List
                    data={users}
                    keyExtractor={user => user.login}
                    renderItem={({ item }) => (
                        <User>
                            <Avatar source={{ uri: item.avatar }} />
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>
                            <ProfileButton
                                onPress={() => this.handleNavigate(item)}
                            >
                                <ProfileIcon
                                    name="profile"
                                    color="#FFF"
                                    size={20}
                                />
                                <ProfileButtonText>
                                    Full Profile
                                </ProfileButtonText>
                            </ProfileButton>
                        </User>
                    )}
                />
            </Container>
        );
    }
}
