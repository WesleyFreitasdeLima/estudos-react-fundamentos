import React, { useState } from 'react';

export default (props) => {
    // Cria as variaveis, seus modificadores de estado e define os estados iniciais
    const [qtde, setQtde] = useState(props.valorInicial);
    const [numGerados, setNumGerados] = useState(null);

    // Gera os numeros aleatorios e exibe na tela os numeros gerados
    function gerarNumeros() {
        const numMin = parseInt(props.numMin);
        const numMax = parseInt(props.numMax) + 1;
        let numUtilizados = [];

        // Obtém um numero aleatorio ente o valor de 'numMin' e 'numMax' e adiciona no array 'numUtilizados'
        while (numUtilizados.length < qtde) {
            const numGerado = Math.floor(Math.random() * (numMax - numMin)) + numMin;

            // Adiciona o numero somente se ele não existir no array 'numUtilizados'
            if (numUtilizados.indexOf(numGerado) === -1)
                numUtilizados.push(numGerado);
        }

        // Ordena o array em ordem crescente
        numUtilizados = numUtilizados.sort((numRef1, numRef2) => numRef1 - numRef2);

        // Transforma o array em uma string separando os numeros por hifen
        numUtilizados = numUtilizados.join('-').toString();

        setNumGerados(
            <p>
                Números gerados: {numUtilizados}
            </p>
        );
    }

    // Limpa os numeros gerados da tela 
    function limparNumeros() {
        setNumGerados(null);
    }

    // Render
    return (
        <div>
            <h2>Mega Sena</h2>
            <p>
                Gerar uma sequência de números não repetidos entre <strong>{props.numMin}</strong> e <strong>{props.numMax}</strong>.
                </p>
            <p>Defina abaixo a quantidade de números à serem gerados.</p>
            <p>
                <input type="number"
                    value={qtde}
                    onChange={e => setQtde(e.target.value)}
                    min={1}
                />
                <button onClick={gerarNumeros}>Gerar</button>
                <button onClick={limparNumeros}>Limpar</button>
            </p>
            {numGerados}
        </div>
    );
};