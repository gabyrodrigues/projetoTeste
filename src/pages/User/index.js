import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import api from '../../services/api'; //acessando api do github

export default class User extends Component {
    static navigationOptions = ({ navigation }) =>  ({
        title: navigation.getParam('user').name
    });

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func
        }).isRequired
    };

    async componentDidMount() {
        const { navigation } = this.props;
        const user = navigation.getParam('user');
        
        const response = await api.get(`/users/${user.login}/starred`); //acessar repositorios favoritados pelo usuario
        
        this.setState({ stars: response.data });
    }

    render () {
        const { stars } = this.state;
        return <View />;
    }
}