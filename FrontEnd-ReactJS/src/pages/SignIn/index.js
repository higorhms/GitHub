import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { toast } from 'react-toastify';
import {
   Container,
   FormContainer,
   PortfolioContainer,
   FormArea,
   SocialMediasContainer,
} from './styles';
import api from '../../services/api';

const schema = Yup.object().shape({
   username: Yup.string(),
});

export default function SignIn() {
   const [loading, setLoading] = useState(false);

   async function handleSubmit({ username }) {
      setLoading(true);
      try {
         const response = await api.get(`/users/${username}`);
         setLoading(true);
      } catch (error) {
         toast.error(
            'Something wrong happened, please check your datas and try again.'
         );
         setLoading(false);
      }
   }

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
               <Form schema={schema} onSubmit={handleSubmit}>
                  <Input
                     name="username"
                     type="username"
                     placeholder="GitHub Username"
                  />
                  <button type="submit">
                     {loading ? 'Loading...' : 'Login'}
                  </button>
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
