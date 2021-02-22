import React from 'react';

// CSS local
import './index.css';

// Componentes
import PrimeiroComponente from './components/basicos/PrimeiroComponente';
import ComponenteComParametro from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';

export default props => {
    return (
        <div id="root">
            <h1>Fundamentos React</h1>
            <PrimeiroComponente />
            <ComponenteComParametro
                titulo="Segundo Componente"
                saudacao="Boa noite"
                nome="Wesley"
            />
            <Fragmento />
            <Aleatorio min={1} max={10} />
        </div>
    );
}