import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Link } from "react-router-dom";

import { Container,Title, LoginContainer, H5 } from './styles';

function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setDisabled(username === '' || password === '');
  }, [username, password])

  return (
    <Container>
      <LoginContainer>
      <Title>Login</Title>
      <Input placeholder="username" type="text" value={username} setValue={setUsername} />
      <Input placeholder="password" type="password" value={password} setValue={setPassword} />
      <H5>Ainda não tem cadastro? <Link to='/register'>Clique aqui</Link> e se registre</H5>
      <Button 
          label='Login' 
          disabled={disabled}
      />
      </LoginContainer>
    </Container>
  )
}

export default Login;