import React from 'react';
import listaProdutos from '../../data/produtos';

function getLinhas() {
    const linhasTabela = listaProdutos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco.toFixed(2).replace('.', ',')}</td>
            </tr>
        );
    });

    return linhasTabela;
}

export default () => {
    return (
        <>
            <p>Leitura de uma lista em JSON e convertido para uma tabela em JSX.</p>
            <table border="1" width="400">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {getLinhas()}
                </tbody>
            </table>
        </>
    );
}