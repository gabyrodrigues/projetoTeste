import React, { Component } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native'; //importa a api de teclado do react-native //activeIndicator é o sinal de loading

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, 
         SubmitButton, List, User, 
         Avatar, Name, Bio, 
         ProfileButton, ProfileButtonText 
        } from './styles';

import api from '../../services/api'; //acessando api do github

export default class Main extends Component {
    state = {
        newUser: '',
        users: [],
        loading: false
    };

    handleAddUser = async () => { //await é assincrono
        // console.tron.log(this.state.newUser);
        const { users, newUser } = this.state; //para add um novo item na lista precisa da referência dos itens anteriores

        this.setState({ loading: true })

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
            newUser: '', //pega o valor do input e reseta
            loading: false
        });

        Keyboard.dismiss();
    }

    render () {
        const { users, newUser, loading } = this.state;
        
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
                    <SubmitButton loading={loading} onPress={this.handleAddUser}>
                        { loading ? ( 
                            <ActivityIndicator color="#fff" /> 
                        ) : ( 
                            <Icon name="add" size={20} color="#fff" /> 
                        )}
                    </SubmitButton>
                </Form>

                {/*listagem dos usuários add através da api*/}
                <List 
                    data={users} 
                    keyExtractor={user => user.login}
                    renderItem={( {item} ) => (  
                        <User> 
                            <Avatar source={{ uri: item.avatar }} /> 
                            <Name>{item.name}</Name>
                            <Bio>{item.bio}</Bio>
                            <ProfileButton onPress={() => {}}>
                                <ProfileButtonText>Ver perfil</ProfileButtonText>
                            </ProfileButton>
                        </User>
                    )}
                />
            </Container>
        );
    }
}

Main.navigationOptions = {
    title: 'Usuários'
};