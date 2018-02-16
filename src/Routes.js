import React from 'react';
import { Scena, Router } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
    <Router>
        <Scena key='formLogin' component={FormLogin} title='Login' />
        <Scena key='formCadastro' component={FormCadastro} title='Cadastro' />
    </Router>
);

