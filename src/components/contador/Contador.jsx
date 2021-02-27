import React from 'react';

import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm';

class Contador extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numeroInicial: props.numeroInicial || 0,
            numero: props.numeroInicial,
            passo: props.passoInicial || 1
        };
    }

    setInc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    setDec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            passo: parseInt(novoPasso)
        });
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <Display
                    numeroInicial={this.state.numeroInicial}
                    numero={this.state.numero}
                />

                <p>
                    <PassoForm
                        passo={this.state.passo}
                        setPasso={this.setPasso}
                    />
                    <Botoes
                        setInc={this.setInc}
                        setDec={this.setDec}
                    />
                </p>
            </div>
        );
    }
}

export default Contador;