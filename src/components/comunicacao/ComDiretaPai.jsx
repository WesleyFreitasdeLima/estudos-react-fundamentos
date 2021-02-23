import React from 'react';
import ComDiretaFilho from './ComDiretaFilho';

export default props => {
    return (
        <div>
            <p>Troca de informações direta de um componente pai para um componente filho</p>
            <ComDiretaFilho
                nome="Wesley Freitas de Lima"
                idade={28}
                sexoMasculino={true}
            />
            <ComDiretaFilho
                nome="Alessandra Almeida"
                idade={27}
                sexoMasculino={false}
            />
        </div>
    );
}