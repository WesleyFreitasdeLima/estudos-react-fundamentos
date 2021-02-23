import React from 'react';

export default props => {
    return (
        <li><strong>{props.nome}</strong> {props.sobrenome}</li>
    );
}