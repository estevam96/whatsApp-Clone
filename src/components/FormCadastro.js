import React from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, modificarNome } from '../actions/AutenticacaoActions';

const background = require('../img/bg.png');

const formCadastro = props => (
    <Image style={{ flex: 1, width: null }} source={background} >
        <View style={{ flex: 1, padding: 10 }} >
            <View style={{ flex: 4, justifyContent: 'center' }}>
                <TextInput
                    value={props.nome}
                    placeholder='Nome'
                    placeholderTextColor='#fff'
                    style={{ fontSize: 20, height: 45 }}
                    onChangeText={texto => props.modificarNome(texto)}
                />
                <TextInput
                    value={props.email}
                    placeholder='E-mail'
                    placeholderTextColor='#fff'
                    style={{ fontSize: 20, height: 45 }}
                    onChangeText={texto => props.modificaEmail(texto)}
                />
                <TextInput
                    secureTextEntry
                    value={props.senha}
                    placeholder='Senha'
                    placeholderTextColor='#fff'
                    style={{ fontSize: 20, height: 45 }}
                    onChangeText={texto => props.modificaSenha(texto)}
                />
            </View>
            <View style={{ flex: 1 }}>
                <Button
                    title='Cadastra'
                    onPress={() => false}
                    color='#115E54'
                />
            </View>
        </View>
    </Image>
);

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha,
    modificarNome
})(formCadastro);
