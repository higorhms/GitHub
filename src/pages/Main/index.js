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
    GroupButton,
    RemoveUserButton,
} from './styles';
import api from '../../services/api';

export default class Main extends Component {
    static propTypes = {
        navigation: PropTypes.shape({
            navigate: PropTypes.func,
        }).isRequired,
    };

    static navigationOptions = {
        title: 'All Users',
    };

    state = {
        users: [],
        newUser: '',
        loading: false,
        refreshing: false,
        wrongInput: false,
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

        await api
            .get(`/users/${newUser}`)
            .then(response => {
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
                    wrongInput: false,
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    newUser: '',
                    wrongInput: true,
                });
            });

        Keyboard.dismiss();
    };

    handleNavigate = user => {
        const { navigation } = this.props;
        navigation.navigate('User', { user });
    };

    handleDelete = user => {
        const { users } = this.state;
        const newUsers = users.filter(u => u.login !== user.login);
        this.setState({ users: newUsers });
    };

    refreshList = () => {
        this.setState({ refreshing: true });
        // HERE YOU CAN ADD SOMETHING TO DO WHEN THE PAGE ARE REFRESHING
        this.setState({ refreshing: false });
    };

    render() {
        const { newUser, users, loading, refreshing, wrongInput } = this.state;

        return (
            <Container>
                <Form>
                    <Input
                        wrongInput={wrongInput}
                        autoCorrect={false}
                        autoCapitalize="none"
                        placeholder={
                            wrongInput
                                ? 'Please check your nickname'
                                : 'Nick of user on GitHub'
                        }
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
                    keyExtractor={user => String(user.login)}
                    onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
                    refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
                    renderItem={({ item }) => (
                        <User>
                            <Avatar source={{ uri: item.avatar }} />
                            <Name onPress={() => this.handleNavigate(item)}>
                                {item.name}
                            </Name>
                            <Bio>{item.bio}</Bio>
                            <GroupButton>
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
                                <RemoveUserButton
                                    onPress={() => this.handleDelete(item)}
                                >
                                    <Icon
                                        name="delete"
                                        color="#FFF"
                                        size={20}
                                    />
                                </RemoveUserButton>
                            </GroupButton>
                        </User>
                    )}
                />
            </Container>
        );
    }
}
