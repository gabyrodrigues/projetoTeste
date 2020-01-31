import React, { Component } from 'react';
import { Keyboard } from 'react-native'; //importa a api de teclado do react-native

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';

import api from '../../services/api'; //acessando api do github

export default class Main extends Component {
    state = {
        newUser: '',
        users: []
    };

    handleAddUser = async () => { //await é assincrono
        // console.tron.log(this.state.newUser);
        const { users, newUser } = this.state; //para add um novo item na lista precisa da referência dos itens anteriores

        /* conexão com a api */
        const response = await api.get(`/users/${newUser}`); //rota

        const data = { //selecionando apenas infomações que eu quero/preciso
            name: response.data.name,
            login: response.data.login,
            bio: response.data.bio,
            avatar: response.data.avatar_url
        };

        this.setState({
            users: [ ...users, data ], //copia todos os usuários que estão dentro do estado (na array de users) e colocar os dados (data)
            newUser: '' //pega o valor do input e reseta
        });

        Keyboard.dismiss();
    }

    render () {
        const { users, newUser } = this.state;
        return (
            <Container>
                <Form>
                    <Input 
                     autoCorrect={false}
                     autoCapitalize="none"
                     placeholder="Adicionar usuário"
                     value={newUser}
                     onChangeText={text => this.setState({ newUser: text })}
                     returnKeyType="send"
                     onSubmitEditing={this.handleAddUser}
                    />
                    <SubmitButton onPress={this.handleAddUser}>
                        <Icon name="add" size={20} color="#fff" />
                    </SubmitButton>
                </Form>
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Usuários'
};