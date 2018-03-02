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
    switch (action.type) {
        /*case MODIFICA_EMAIL:
        return { ...state, email: action.payload }; */
        default:
        return state;
    }
};
