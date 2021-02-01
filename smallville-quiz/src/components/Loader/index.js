import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';

const SpinnerDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem!important;
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  animation: spin 1s linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function LoadingWidget() {
  return (
    <>
      <Widget>
        <Widget.Header>
          <h3>Carregando...</h3>
        </Widget.Header>
        <Widget.Content>
          <SpinnerDiv>
            <Spinner />
          </SpinnerDiv>
        </Widget.Content>
      </Widget>
    </>
  );
}