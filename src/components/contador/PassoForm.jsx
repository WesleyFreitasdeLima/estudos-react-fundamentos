import React from 'react';

function component(props) {
    return (
        <>
            <input type="number"
                value={props.passo}
                onChange={e => props.setPasso(e.target.value)}
            />
        </>
    );
}

export default component;