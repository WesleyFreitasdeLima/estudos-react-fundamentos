import React from 'react';

export default props => {
    const { min, max } = props;
    const numeroAleatorio = Math.floor(Math.random() * (max - min)) + min;

    return (
        // <></> Sintaxe reduzida para <React.Fragment></React.Fragment>
        <>
            <h2>Numero aleatorio</h2>
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Valor Escolhido: {numeroAleatorio}</p>
        </>
    );
}