import React from 'react';

export default props => {
    return (
        <>
            <p>Membros da familia {props.sobrenome}:</p>
            <ul>
                {
                    // Fornecendo as props do componente pai para o componente filho

                    // Apenas um componente
                    // React.cloneElement(props.children, { ...props })

                    // Multiplos componentes
                    /*
                    React.Children.map(props.children, (child) => {
                        return React.cloneElement(child, props);
                    })
                    */
                    props.children.map((child, i) => {
                        return React.cloneElement(child, { ...props, key: i });
                    })
                }
            </ul>
        </>
    );
}