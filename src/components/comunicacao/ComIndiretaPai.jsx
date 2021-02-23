import React, { useState } from 'react';
import ComIndiretaFilho from './ComIndiretaFilho';

export default props => {
    const [nome, setNome] = useState('?');
    const [idade, setIdade] = useState(0);
    const [nerd, setNerd] = useState(false);

    function callbackInfo(nome, idade, nerd) {
        console.log(nome, idade, nerd);
        setNome(nome);
        setIdade(idade);
        setNerd(nerd);
    }

    return (
        <div style={{ backgroundColor: "#2ab7ca", padding: "5px" }}>
            <h2>Componente Pai</h2>

            <p>
                <span>{nome}, </span>
                <span>{idade}, </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </p>

            <ComIndiretaFilho callback={callbackInfo}></ComIndiretaFilho>
        </div>
    )
}