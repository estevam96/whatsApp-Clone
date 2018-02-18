const INITIAL_STATE = {
    nomw: '',
    email: '',
    senha: ''
};

export default (state = INITIAL_STATE, action) => {
    if (action.type === 'modifica_email') {
        return { ...state, email: action.payload };
    } else if (action.type === 'modifica_senha') {
        return { ...state, senha: action.payload };
    }
    return state;
};
