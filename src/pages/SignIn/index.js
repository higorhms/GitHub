/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { Spring } from 'react-spring/renderprops';

import {
   Container,
   FormContainer,
   PortfolioContainer,
   FormArea,
   SocialMediasContainer,
} from './styles';
import api from '../../services/api';
import { signIn } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
   username: Yup.string(),
});

export default function SignIn() {
   const [loading, setLoading] = useState(false);
   const dispatch = useDispatch();

   async function handleSubmit({ username }) {
      setLoading(true);
      try {
         const response = await api.get(`/users/${username}`);
         dispatch(signIn(response.data));
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
               <a target="_blank" href="https://github.com/higorhms">
                  <FaGithub size={30} />
                  Portfólio
               </a>
               <a
                  target="_blank"
                  href="https://www.linkedin.com/in/higormartinsdasilva/"
               >
                  <FaLinkedin size={30} />
                  Linkedin
               </a>
            </SocialMediasContainer>
         </PortfolioContainer>

         <Spring
            from={{ transform: 'translateX(100%)' }}
            to={{ transform: 'translateX(0%)' }}
         >
            {props => (
               <FormContainer style={props}>
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
            )}
         </Spring>
      </Container>
   );
}
