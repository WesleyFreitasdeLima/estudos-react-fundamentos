import React from 'react';
import alunos from '../../data/alunos';

export default () => {
    const linhasLista = alunos.map(aluno => {
        return (
            <li key={aluno.id}>
                {aluno.nome}: nota {aluno.nota};
            </li>
        );
    });

    return (
        <>
            <p>Leitura de uma lista em JSON e convertido para lista em JSX.</p>
            <ol>
                {linhasLista}
            </ol>
        </>
    );
}