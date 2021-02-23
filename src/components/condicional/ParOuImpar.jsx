import React from 'react';

const isPar = (numero) => (numero % 2 === 0) ? true : false;

export default props => {
    return (
        <div>
            <p>
                O número {props.numero} é <span>{isPar(props.numero) ? 'Par' : 'Ímpar'}</span>
            </p>
        </div>
    )
}