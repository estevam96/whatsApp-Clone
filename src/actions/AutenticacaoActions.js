import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const modificaEmail = texto => (
    {
        type: 'modifica_email',
        payload: texto
    }
);

export const modificaSenha = texto => (
    {
        type: 'modifica_senha',
        payload: texto
    }
);

export const modificarNome = texto => (
    {
        type: 'modificar_nome',
        payload: texto
    }
);

export const cadastraUsuario = ({ nome, email, senha }) => (
     dispatch => {
        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => cadastroUsuarioSucesso(dispatch))
            .catch(erro => cadastroUsuarioErro(erro, dispatch));
    }

);

const cadastroUsuarioSucesso = (dispatch) => {
    dispatch({ type: 'cadastra_usuario_sucesso' });

    Actions.boasVindas();
};

const cadastroUsuarioErro = (erro, dispatch) => {
    dispatch({ type: 'cadastro_usuario_erro', payload: erro.message });
};
