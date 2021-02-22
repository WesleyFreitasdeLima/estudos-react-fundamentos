import React from 'react';

export default function (props) {
    return (
        <div>
            <h2>{props.titulo}</h2>
            <h4>{props.saudacao} {props.nome}. Como vai?</h4>
        </div>
    );
}