import React from 'react';
import ReactDOM from 'react-dom';

// CSS local
import './index.css';

// Componentes
import PrimeiroComponente from './components/basicos/PrimeiroComponente';
import ComponenteComParametro from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/Fragmento';

// Primeiro parametro: o que eu quero renderizar
// Segundo paramentro: elemento à inserir conteudo
ReactDOM.render(
    <div id="root">
        <PrimeiroComponente />
        <ComponenteComParametro
            titulo="Segundo Componente"
            saudacao="Boa noite"
            nome="Wesley"
        />
        <Fragmento />
    </div>,
    document.getElementById('root')
);