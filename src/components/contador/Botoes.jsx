import React from 'react';

function component(props) {
    return (
        <>
            <button onClick={props.setInc}>+</button>
            <button onClick={props.setDec}>-</button>
        </>
    );
}

export default component;