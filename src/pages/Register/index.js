import React, { useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, RegisterContainer, Title } from './styles';

function Register() {
  
    const [nome, setNome] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Container>
        <RegisterContainer>
            <Title>Register</Title>
            <Input placeholder="nome completo" type="text" value={nome} setValue={setNome} />
            <Input placeholder="email" type="email" value={username} setValue={setUsername} />
            <Input placeholder="senha" type="password" value={password} setValue={setPassword} />
            <Button 
                label='Cadastrar' 
            />
        </RegisterContainer>
    </Container>
   );
}

export default Register;