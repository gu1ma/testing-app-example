import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container,Title, LoginContainer } from './styles';

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
      <Button 
          label='Login' 
          disabled={disabled}
      />
      </LoginContainer>
    </Container>
  )
}

export default Login;