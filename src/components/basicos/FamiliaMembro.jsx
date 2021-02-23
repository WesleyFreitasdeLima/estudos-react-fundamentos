import React from 'react';

export default props => {
    console.log(props)
    return (
        <li><strong>{props.nome}</strong> {props.sobrenome}</li>
    );
}