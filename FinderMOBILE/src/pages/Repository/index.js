import React from 'react';
import PropTypes from 'prop-types';
import { WebViewPersonalized } from './styles';

export default function Repository({ navigation }) {
    const repository = navigation.getParam('repository');
    return <WebViewPersonalized source={{ uri: repository.html_url }} />;
}

Repository.propTypes = {
    navigation: PropTypes.shape({
        getParam: PropTypes.func,
    }).isRequired,
};

Repository.navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
});
