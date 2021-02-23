import React from 'react';

function gerarIdade() {
    const min = 30;
    const max = 70;
    const intervalo = max - min;
    const idade = parseInt((Math.random() * intervalo) + min);
    return idade;
}

function gerarNerd() {
    const isNerd = Math.random() > 0.5;
    return isNerd;
}

export default props => {
    const cb = props.callback;
    return (
        <div style={{ backgroundColor: "#fed766", padding: "5px" }}>
            <h3>Componente Filho</h3>

            <button onClick={(e) => cb('João', gerarIdade(), gerarNerd())}>
                Fornecer Informações
            </button>
        </div>
    )
}