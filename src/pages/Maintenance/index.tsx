import React from 'react';

import { Container, Content, Logo } from './styles';

const Maintenance: React.FC = () => {
  return (
    <Container>
      <Content>
        <div />
        <div>
          <Logo />
          <h1>Estamos construindo um site incrível ...</h1>
        </div>
        <h2>
          Enquanto isso você pode nos enviar um e-mail:
          <a href="mailto: oi@foradacaixinha.xyz"> oi@foradacaixinha.xyz</a>
        </h2>
      </Content>
    </Container>
  );
};

export default Maintenance;
