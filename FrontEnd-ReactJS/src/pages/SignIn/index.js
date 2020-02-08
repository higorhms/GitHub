import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import {
   Container,
   FormContainer,
   PortfolioContainer,
   FormArea,
   SocialMediasContainer,
} from './styles';

const schema = Yup.object().shape({
   username: Yup.string(),
});

export default function SignIn() {
   return (
      <Container>
         <PortfolioContainer>
            <h1>Github Finder by Higor Martins</h1>

            <p>
               Now, you can add your favorites repositories of your favorites
               developers on GitHub !
            </p>

            <SocialMediasContainer>
               <a href="https://github.com/higorhms">
                  <FaGithub size={30} />
                  Portfólio
               </a>
               <a href="https://www.linkedin.com/in/higormartinsdasilva/">
                  <FaLinkedin size={30} />
                  Linkedin
               </a>
            </SocialMediasContainer>
         </PortfolioContainer>

         <FormContainer>
            <FormArea>
               <FaGithub size={60} />
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
                  <a href="https://github.com/join?source=header-home">
                     {' '}
                     Sign Up
                  </a>
               </p>
            </FormArea>
         </FormContainer>
      </Container>
   );
}
