import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions';

const background = require('../img/bg.png');

class formLogin extends Component {

    _autenticarUsuario() {
        const { email, senha } = this.props;
        this.props.autenticarUsuario({ email, senha });
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
                        <TouchableHighlight onPress={() => Actions.formCadastro()} >
                            <Text style={{ fontSize: 20, color: '#fff' }} >
                                Ainda não tem cadastro? cadastre-se
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={{ flex: 2 }} >
                        <Button
                            title='Acessar'
                            onPress={() => this._autenticarUsuario()}
                            color='#115E54'
                        />
                    </View>
                </View>
            </Image>
        );
    }
} 

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha
    }
);

export default connect(mapStateToProps, { 
                                    modificaEmail, 
                                    modificaSenha, 
                                    autenticarUsuario 
                                })(formLogin);
