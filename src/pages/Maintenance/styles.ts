import styled from 'styled-components';

import logo from '../../assets/logo.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background: #166926;
  margin: 25px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-weight: bold;
    font-style: italic;
    font-size: 3vh;
    margin-left: 10px;
    margin-right: 10px;
  }

  h2 {
    font-weight: 500;
    font-style: italic;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 2.5vh;
    a {
      color: #47c16e;
    }
  }
`;

export const Logo = styled.div`
  height: 55vh;
  background: url(${logo}) no-repeat center;
  background-size: 55vh;
`;
