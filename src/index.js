import React from 'react';
import ReactDOM from 'react-dom';

// CSS local
import './index.css';

const olaMundo = <strong>Olá Mundo!!!</strong>;

// Primeiro parametro: o que eu quero renderizar
// Segundo paramentro: elemento à inserir conteudo
ReactDOM.render(
    <div>
        {olaMundo}
    </div>,
    document.getElementById('root')
);