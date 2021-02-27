import React from 'react';

function component(props) {
    return (
        <div>
            <p>Valor Inicial: {props.numeroInicial}</p>
            <p>Valor Atual: {props.numero}</p>
        </div>
    );
}

export default component;