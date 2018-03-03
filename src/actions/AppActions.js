import firebase from 'firebase';
import b64 from 'base-64';
import _ from 'lodash';
import { 
    MODIFICA_ADICIONA_CONTATO_EMAIL, 
    ADICIONA_CONTATO_ERRO 
} from './Types';

export const modificaAdicionaEmail = texto => (
    {
        type: MODIFICA_ADICIONA_CONTATO_EMAIL,
        payload: texto
    }
);

export const adicionaContato = email => (
    dispatch => {
        const emailB64 = b64.encode(email);

        firebase.database().ref(`/contato/${emailB64}`)
            .once('value')
            .then(snapshot => {
                if (snapshot.val()) {
                    const dadosUsuario = _.first(_.values(snapshot.val()));
                    console.log(dadosUsuario);
                    const { currentUser } = firebase.auth();
                    const emailUsuarioB64 = b64.encode(currentUser.email);
                    firebase.database().ref(`/usuario_contatos/${emailUsuarioB64}`)
                    .push({ email, nome: dadosUsuario.nome })
                    .then(() => console.log('Sucesso'))
                    .catch(erro => console.log(erro));
                } else {
                    dispatch(
                        {
                            type: ADICIONA_CONTATO_ERRO,
                            payload: 'E-mail informado não corresponde a um usuário valido'
                        }
                    );
                }
            });
    }
);
