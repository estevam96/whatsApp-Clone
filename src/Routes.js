import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';
import BoasVindas from './components/BoasVindas';

export default props => (
    <Router>
        <Stack key="root" >
            <Scene key='formLogin' component={FormLogin} hideNavBar />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
            <Scene key='boasVindas' component={BoasVindas} hideNavBar />
        </Stack>
    </Router>
);

