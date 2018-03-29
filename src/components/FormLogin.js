import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const background = require('../img/bg.png');

class formLogin extends Component {
    constructor(props) {
        super(props);
        console.ignoredYellowBox = ['Setting a timer'];
    }

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
    }

    renderBtnAcessar() {
        if (this.props.loading_Login) {
            return (
                <ActivityIndicator size='large' />
            );
        }
        return (
            <Button
                title='Acessar'
                onPress={() => this._autenticarUsuario()}
                color='#115E54'
            />
        );
    }

    render() {
        return (
            <Image style={{ flex: 1, width: null }} source={background} >
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text
                            style={{ fontSize: 25, backgroundColor: 'transparent', color: '#fff' }}
                        >
                            WhatsApp Clone
                        </Text>
                    </View>
                    <View style={{ flex: 2, padding: 10 }}>
                        <TextInput
                            value={this.props.email}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='E-mail'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaEmail(texto)}
                        />
                        <TextInput
                            secureTextEntry
                            value={this.props.senha}
                            style={{ fontSize: 20, height: 45 }}
                            placeholder='Senha'
                            placeholderTextColor='#fff'
                            onChangeText={texto => this.props.modificaSenha(texto)}
                        />
                        <Text style={{ color: '#ff0000', fontSize: 18 }} >
                            {this.props.erroLogin}
                        </Text>
                        <TouchableHighlight onPress={() => Actions.formCadastro()} >
                            <Text style={{ fontSize: 20, color: '#fff' }} >
                                Ainda não tem cadastro? cadastre-se
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }} >
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </Image>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_Login: state.AutenticacaoReducer.loading_Login
    }
);

export default connect(mapStateToProps, {
    modificaEmail,
    modificaSenha,
    autenticarUsuario
})(formLogin);
