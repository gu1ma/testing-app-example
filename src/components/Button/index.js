import React from 'react';

import { Container } from './styles';

function Button({ label, disabled }) {

  const login = () => {
    alert('LOGIN PAGE');
  }

  return (
  <Container disabled={disabled} onClick={login}>
    {label}
  </Container>)
}

export default Button;