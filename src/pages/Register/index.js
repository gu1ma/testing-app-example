import React, { useEffect, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';

import { Container, RegisterContainer, Title } from './styles';

function Register() {
  
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        setDisabled(username === '' || password === '' || name === '');
    }, [username, password, name])

  return (
    <Container>
        <RegisterContainer>
            <Title>Register</Title>
            <Input placeholder="nome completo" type="text" value={name} setValue={setName} />
            <Input placeholder="email" type="email" value={username} setValue={setUsername} />
            <Input placeholder="senha" type="password" value={password} setValue={setPassword} />
            <Button 
                label='Cadastrar' 
                disabled={disabled}
            />
        </RegisterContainer>
    </Container>
   );
}

export default Register;