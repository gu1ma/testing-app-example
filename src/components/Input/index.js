import React, { useState } from 'react';

import { Container } from './styles';

function Input({ placeholder, type, value, setValue }) {
  return <Container 
            placeholder={placeholder} 
            type={type} value={value} 
            onChange={(event) => setValue(event.target.value)} 
          />;
}

export default Input;