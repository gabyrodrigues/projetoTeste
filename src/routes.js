import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Main from './pages/Main';
import User from './pages/User';

const Routes = createStackNavigator({
        Main,
        User,
    },
    {
        defaultNavigationOptions: {
            headerTitleAlign: 'center',
            headerBackTitleVisible: false, //aparecer só a seta de voltar
            headerStyle: {
                backgroundColor: '#7159c1'
            },
            headerTintColor: '#fff'
        },
    }
    );


export default createAppContainer(Routes);

/* CreateAppContainer:
    BrowserRouter do reactjs,
    contém as configurações pro roteamento funcionar
    independente de qual tipo de rotas estiverem sendo utilizadas
 */

 /* CreateStackNavigator:
    Contém um tipo de configuração de rotas
    sendo possível demonstrar esses tipos de configuração de rotas
    mais fácil visualmente;
 */