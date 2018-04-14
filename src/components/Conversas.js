import React, { Component } from 'react';
import { View, Text, ListView, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { conversasUsuarioFerch } from '../actions/AppActions';


class Conversas extends Component {
    componentWillMount() {
        this.props.conversasUsuarioFerch();
    }
    componentWillReceiveProps(nextProps) {
        this.props.criaFonteDedados(nextProps.Conversas);
    }

    criaFonteDedados(conversas) {
        const ds = new ListView.DataSource({ rowaChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(conversas);
    }

    renderRow = (conversa) => (
        <TouchableHighlight 
            onPress={
                () => Actions.conversa({ 
                    title: conversa.nome, 
                    contatoNome: conversa.nome, 
                    contatoEmail: conversa.email 
                })
            }
        >
            <View style={{ flex: 1, padding: 20, borderBottomWidth: 1, borderColor: '#ccc' }}>
                <Text style={{ fontSize: 25 }}>{conversa.nome} </Text>
            </View>
        </TouchableHighlight>
    )


    render() {
        return (
            <ListView
                enableE0mptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const conversas = _.map(state.ListaConversaReducer, (val, uid) => {
        return { ...val, uid };
    });

    return {
        conversas
    };
};

export default connect(mapStateToProps, { conversasUsuarioFerch })(Conversas);
