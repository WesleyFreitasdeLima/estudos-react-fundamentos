import React from 'react';
import ReactDOM from 'react-dom';

// CSS local
import './index.css';

// Componentes
import PrimeiroComp from './components/basicos/Primeiro';

// Primeiro parametro: o que eu quero renderizar
// Segundo paramentro: elemento à inserir conteudo
ReactDOM.render(
    <div>
        <PrimeiroComp></PrimeiroComp>
        <PrimeiroComp></PrimeiroComp>
        <PrimeiroComp></PrimeiroComp>
    </div>,
    document.getElementById('root')
);