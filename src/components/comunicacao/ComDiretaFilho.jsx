import React from 'react';

export default props => {
    return (
        <div>
            <p>{props.nome}, {props.idade}, {props.sexoMasculino ? 'Homem' : 'Mulher'}</p>
        </div>
    );
}