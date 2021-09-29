import { TextField, Button } from '@material-ui/core';
import React from 'react';


function DadosEntrega() {
    return (
        <form>

            <TextField
                id="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="endereco"
                label="Endereço"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
            />

            <TextField
                id="numero"
                label="Numero"
                type="number"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <TextField
                id="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="normal"
            />

            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
            >
                Finalizar Cadastrar
            </Button>

        </form>
    );
}

export default DadosEntrega;