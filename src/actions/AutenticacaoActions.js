import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRA_USUARIO_SUCESSO,
    CADASTRA_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRP_EM_ANDAMENTO
} from './Types';

export const modificaEmail = texto => (
    {
        type: MODIFICA_EMAIL,
        payload: texto
    }
);

export const modificaSenha = texto => (
    {
        type: MODIFICA_SENHA,
        payload: texto
    }
);

export const modificarNome = texto => (
    {
        type: MODIFICA_NOME,
        payload: texto
    }
);

export const cadastraUsuario = ({ nome, email, senha }) => {
   return dispatch => {

        dispatch({ type: CADASTRP_EM_ANDAMENTO });
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                const emailB64 = b64.encode(email);
                firebase.database().ref(`/contato/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastroUsuarioSucesso(dispatch));
            })
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }

};

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: CADASTRA_USUARIO_SUCESSO });

    Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: CADASTRA_USUARIO_ERRO, payload: erro.message });
};

export const autenticarUsuario = ({ email, senha }) => (
    dispatch => {
        dispatch({ type: LOGIN_EM_ANDAMENTO });
        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
);

const loginUsuarioSucesso = (dispatch) => {
    dispatch({ type: LOGIN_USUARIO_SUCESSO });
    Actions.principal();
};

const loginUsuarioErro = (erro, dispatch) => {
    dispatch(
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
    );
};

