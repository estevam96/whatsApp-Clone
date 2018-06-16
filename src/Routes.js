import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';
import Principal from './components/Principal';
import AdicinarContato from './components/AdicinarContato';
import Conversa from './components/Conversa';


export default props => (
    <Router navigationBarStyle={{ backgroundColor: '#115E54', }} titleStyle={{ color: '#fff' }} >
        <Stack key="root" >
            <Scene key='formLogin' component={FormLogin} title="Login" hideNavBar />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key='boasVindas' component={BoasVindas} title="Bem Vindo" hideNavBar />
            <Scene key='principal' component={Principal} title="Principal" hideNavBar />
            <Scene key='adicionaContato' component={AdicinarContato} title="Adicionar Contato" />
            <Scene key='conversa' component={Conversa} title="Conversa" />
        </Stack>
    </Router>
);

