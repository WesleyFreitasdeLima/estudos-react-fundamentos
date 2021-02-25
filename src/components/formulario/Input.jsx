import React, { useState } from 'react';
import './Input.css';

export default props => {
    const [valor, setValor] = useState('Inicial');

    function quandoMudar(e) {
        setValor(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div >
            <h3>{valor}</h3>
            <input className="input" type="text" value={valor} onChange={quandoMudar} />
            <br /><br />
            <input className="input" type="text" value={valor} readOnly />
            <br /><br />
            <input className="input" type="text" value={undefined} />
        </div>
    )
}