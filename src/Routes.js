import React from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
    <Router>
        <Stack key="root">
            <Scene key='formLogin' component={FormLogin} />
            <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
        </Stack>
    </Router>
);

