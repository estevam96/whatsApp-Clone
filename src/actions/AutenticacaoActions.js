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
