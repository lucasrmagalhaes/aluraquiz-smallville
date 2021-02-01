import React from 'react';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import Button from '../Button';

export default function ResultsWidget({ results }) {
  const router = useRouter();

  return (
    <Widget>
      <Widget.Header>
        <h3>Resultado</h3>
      </Widget.Header>
      <Widget.Content>
        Você acertou
        {' '}
        {results.reduce((somatoriaAtual, resultadoAtual) => {
          const isAcerto = resultadoAtual === true;
          if (isAcerto) {
            return somatoriaAtual + 1;
          }
          return somatoriaAtual;
        }, 0)}
        {' '}
        de
        {' '}
        {results.length}
        {'.'}
        <br />
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              {index + 1}
              {' - '}
              {result === true ? ' Acertou' : ' Errou'}
            </li>
          ))}
        </ul>
        <Button onClick={() => router.back()} type="button">Voltar</Button>
      </Widget.Content>
    </Widget>
  );
}