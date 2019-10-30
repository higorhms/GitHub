import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
    Container,
    Header,
    Avatar,
    Name,
    Bio,
    StarsList,
    Starred,
    OwnerAvatar,
    Info,
    Autor,
    Title,
} from './styles';

export default class User extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('user').name,
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired,
    };

    state = { stars: [], loading: false, page: 1, refreshing: false };

    async componentDidMount() {
        this.setState({ loading: true });
        this.load();
    }

    load = async (page = 1) => {
        const { stars } = this.state;
        const { navigation } = this.props;
        const user = navigation.getParam('user');
        const response = await api.get(`/users/${user.login}/starred`, {
            params: { page },
        });

        this.setState({
            stars: page >= 2 ? [...stars, ...response.data] : response.data,
            page,
            loading: false,
            refreshing: false,
        });
    };

    loadMore = async () => {
        const { page } = this.state;

        const nextPage = page + 1;

        this.load(nextPage);
    };

    refreshList = async () => {
        this.setState({ refreshing: true });
        const { navigation } = this.props;
        const user = navigation.getParam('user');
        const response = await api.get(`/users/${user.login}/starred`);

        this.setState({ stars: response.data, refreshing: false, page: 1 });
    };

    handleNavigate = repository => {
        const { navigation } = this.props;

        navigation.navigate('Repository', { repository });
    };

    render() {
        const { navigation } = this.props;
        const { stars, loading, refreshing } = this.state;
        const user = navigation.getParam('user');
        return (
            <Container>
                <Header>
                    <Avatar source={{ uri: user.avatar }} />
                    <Name>{user.name}</Name>
                    <Bio>{user.bio}</Bio>
                </Header>

                {loading ? (
                    <ActivityIndicator size={50} />
                ) : (
                    <StarsList
                        data={stars}
                        keyExtractor={star => String(star.id)}
                        renderItem={({ item }) => (
                            <Starred onPress={() => this.handleNavigate(item)}>
                                <OwnerAvatar
                                    source={{ uri: item.owner.avatar_url }}
                                />
                                <Info>
                                    <Title>{item.name}</Title>
                                    <Autor>{item.owner.login}</Autor>
                                </Info>
                            </Starred>
                        )}
                        onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
                        onEndReached={this.loadMore} // Função que carrega mais itens
                        onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
                        refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
                    />
                )}
            </Container>
        );
    }
}
