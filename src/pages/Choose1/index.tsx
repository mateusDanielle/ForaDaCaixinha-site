import React from 'react';

import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  ForaDaCaixinha,
  Logo,
  Center,
  Download,
  Apple,
  Google,
  Icon,
} from './styles';

const Maintenance: React.FC = () => {
  return (
    <Container>
      <Content>
        <ForaDaCaixinha>
          <Link to="/">
            <Logo />
          </Link>
        </ForaDaCaixinha>
        <Center>
          <div>
            <h1>Choose 1</h1>
            <h2>Entrando numa fria</h2>
          </div>
          <div>
            <h3>Clique, baixe agora e passe vergonha com seus amigos:</h3>
            <Download>
              <a href="https://apps.apple.com/br/app/id1533889623">
                <Apple />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.mateusdanielle.choose1">
                <Google />
              </a>
            </Download>
          </div>
        </Center>
        <Icon />
      </Content>
    </Container>
  );
};

export default Maintenance;
