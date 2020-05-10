import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import {useField} from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string;
}

const Input: React.FC<InputProps> = ({name, ...rest}) => {
  const inputRef = useRef(null);
  const {registerField,fieldName} =useField(name);

  useEffect(()=>{
    registerField({name: fieldName, ref: inputRef.current, path: 'value'})
  },[registerField, fieldName])

  return (
    <Container>
      <input ref={inputRef} {...rest} />
    </Container>
  );
}

export default Input;

