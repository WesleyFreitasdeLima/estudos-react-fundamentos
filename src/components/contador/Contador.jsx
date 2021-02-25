import React from 'react';

class Contador extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numeroInicial: props.numeroInicial || 0,
            numero: props.numeroInicial,
            passo: props.passoInicial || 1
        }
    }

    add = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        });
    }

    rmv = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        });
    }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value
        })
    }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Valor Inicial: {this.state.numeroInicial}</p>
                <p>Valor Atual: {this.state.numero}</p>
                <p>
                    <input type="text" value={this.state.passo} onChange={this.setPasso} />
                    <button onClick={this.add}>+</button>
                    <button onClick={this.rmv}>-</button>
                </p>
            </div>
        );
    }
}

export default Contador;