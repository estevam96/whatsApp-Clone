import React from 'react';
import { View, Text, TextInput, Button, TouchableHighlight } from 'react-native';
import { Actions} from 'react-native-router-flux';

export default props => (
    <View style={{ flex: 1, padding: 10 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 25 }} >WhatsApp Clone</Text>
        </View>
        <View style={{ flex: 2, padding: 10 }}>
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='E-mail' />
            <TextInput style={{ fontSize: 20, height: 45 }} placeholder='Senha' />
            <TouchableHighlight onPress={() => Actions.formCadastro()} >
            <Text style={{ fontSize: 20 }} >Ainda não tem cadastro? cadastre-se</Text>
            </TouchableHighlight>
        </View>
        <View style={{ flex: 2 }} >
            <Button
                title='Acessar'
                onPress={() => false}
                color='#115E54'
            />
        </View>
    </View>
);
