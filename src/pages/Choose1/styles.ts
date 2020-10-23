import styled from 'styled-components';

import logo from '../../assets/logo.png';
import icon from '../../assets/Icon.png';
import apple from '../../assets/apple.png';
import google from '../../assets/google_play.png';

export const Container = styled.div`
  height: 100vh;
  background: #75359c;

  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  background: #82529f;
  margin: 25px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-weight: bold;
    font-style: normal;
    font-size: 15vmin;
    max-height: 18vmin;
  }

  h2 {
    font-weight: 500;
    font-style: italic;
    font-size: 5vmin;
    color: #5d2380;
  }

  h3 {
    font-weight: 100;
    font-style: italic;
    font-size: 3vmin;
  }
`;

export const ForaDaCaixinha = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.img.attrs(() => ({
  src: logo,
}))`
  height: 15vh;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const Download = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80vw;
  flex-wrap: wrap;
  margin-top: 3vmin;
`;

export const Apple = styled.img.attrs(() => ({
  src: apple,
}))`
  height: 10vh;
  margin-bottom: 0.5vmin;
`;

export const Google = styled.img.attrs(() => ({
  src: google,
}))`
  height: 10vh;
  margin-bottom: 0.5vmin;
`;

export const Icon = styled.div`
  height: 25vh;
  background: url(${icon}) no-repeat bottom;
  background-size: 25vh;
`;
