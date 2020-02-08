import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container, FormContainer } from './styles';

const schema = Yup.object().shape({
   username: Yup.string().required('Insita um e-mail válido'),
});

export default function SignIn() {
   return (
      <Container>
         <Form schema={schema} onSubmit={() => {}}>
            <Input
               name="username"
               type="username"
               placeholder="GitHub Username"
            />
            <button type="submit">Acessar</button>
         </Form>

         <p>
            Do not have an account?
            <a href="https://github.com/join?source=header-home"> Sign Up</a>
         </p>
      </Container>
   );
}
