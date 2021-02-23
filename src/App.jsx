import React from 'react';

// CSS local
import './index.css';
import './App.css';

// Componentes
import Card from './components/layout/Card';
import PrimeiroComponente from './components/basicos/PrimeiroComponente';
import ComponenteComParametro from './components/basicos/ComponenteComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from './components/basicos/Aleatorio';
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';

export default props => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <p>
                Execícios executados durante o curso de <a href="https://www.udemy.com/course/react-redux-pt/">React + Redux</a>
            </p>
            <div className="Cards">
                <Card titulo="#01 - Primeiro Componente" >
                    <PrimeiroComponente />
                </Card>

                <Card titulo="#02 - Componente com parâmetro">
                    <ComponenteComParametro
                        titulo="Segundo Componente"
                        saudacao="Boa noite"
                        nome="Wesley"
                    />
                </Card>

                <Card titulo="#03 - Componente fragmento">
                    <Fragmento />
                </Card>

                <Card titulo="#04 - Desafio - Numero aleatorio" color="#7bc043">
                    <Aleatorio min={1} max={10} />
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="#05 - Componente com filho">
                    <Familia sobrenome="Lima">
                        <FamiliaMembro nome="Wesley" />
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Alessandra"/>
                    </Familia>
                </Card>
            </div>
        </div>
    );
}