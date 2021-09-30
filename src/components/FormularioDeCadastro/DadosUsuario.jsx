import { TextField, Button } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ aoEnviar }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro)
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                if (possoEnviar()) {
                    aoEnviar({ email, senha });
                } else {

                }
            }}
        >
            <TextField
                value={email}
                onChange={(event) => { setEmail(event.target.value) }}
                id="email"
                label="Email"
                type="email"
                name="email"
                variant="outlined"
                fullWidth
                margin="normal"
                required
            />

            <TextField
                value={senha}
                onChange={(event) => { setSenha(event.target.value) }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha"
                label="Senha"
                type="password"
                variant="outlined"
                name="senha"
                fullWidth
                margin="normal"
                required
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
            >
                Próximo
            </Button>

        </form>
    );
}

export default DadosUsuario;