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
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import ComDiretaPai from './components/comunicacao/ComDiretaPai';
import ComIndiretaPai from './components/comunicacao/ComIndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';

export default () => {
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
                </Card>

                <Card titulo="#05 - Componente com filho">
                    <Familia sobrenome="Lima">
                        <FamiliaMembro nome="Wesley" />
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Alessandra" />
                    </Familia>
                </Card>

                <Card titulo="#06 - Repetição">
                    <ListaAlunos />
                </Card>

                <Card titulo="#07 - Desafio - Repetição" color="#7bc043">
                    <TabelaProdutos />
                </Card>

                <Card titulo="#08 - Renderização Condicional">
                    <ParOuImpar numero={21} />
                </Card>

                <Card titulo="#09 - Comunicação Direta">
                    <ComDiretaPai />
                </Card>

                <Card titulo="#10 - Comunicação Indireta">
                    <ComIndiretaPai />
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)">
                    <Input />
                </Card>

                <Card titulo="#12 - Contador">
                    <Contador numeroInicial={10} />
                </Card>
            </div>
        </div>
    );
}