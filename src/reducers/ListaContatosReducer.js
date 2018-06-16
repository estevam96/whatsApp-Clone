import {
    LISTA_CONTATO_USUARIO
} from '../actions/Types';

const INITIL_STATE = {};

export default (state = INITIL_STATE, action) => {
    switch (action.type) {
        case LISTA_CONTATO_USUARIO:
            return action.payload;
        default:
            return state;
    }
};
