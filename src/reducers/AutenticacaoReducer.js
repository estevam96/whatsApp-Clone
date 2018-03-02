import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRA_USUARIO_SUCESSO,
    CADASTRA_USUARIO_ERRO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRP_EM_ANDAMENTO
} from '../actions/Types';

const INITIAL_STATE = {
    nome: '',
    email: '',
    senha: '',
    erroCadastro: '',
    erroLogin: '',
    loading_Login: false,
    loading_cadastro: false
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case MODIFICA_EMAIL:
            return { ...state, email: action.payload };
        case MODIFICA_SENHA:
            return { ...state, senha: action.payload };
        case MODIFICA_NOME:
            return { ...state, nome: action.payload };
        case CADASTRA_USUARIO_ERRO:
            return { ...state, erroCadastro: action.payload, loading_cadastro: false };
        case CADASTRA_USUARIO_SUCESSO:
            return { ...state, nome: '', senha: '', loading_cadastro: false };
        case LOGIN_USUARIO_ERRO:
            return { ...state, erroLogin: action.payload, loading_Login: false };
        case LOGIN_EM_ANDAMENTO:
            return { ...state, loading_Login: true };
        case CADASTRP_EM_ANDAMENTO:
            return { ...state, loading_cadastro: true };
        default:
            return state;
    }
};
