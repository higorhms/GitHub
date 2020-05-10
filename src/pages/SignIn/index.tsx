/* eslint-disable react/jsx-no-target-blank */
import React, { useState } from 'react';
import {Form} from '@unform/web';
import Input from '../../components/Input';
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

interface FormProps {
  username: string;
}

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

   function handleSubmit(data:FormProps):void {
     console.log(data)
    setLoading(true);
    try {
      api.get(`/users/${data.username}`).then(response => {
        dispatch(signIn(response.data));
        setLoading(true);
      })
    } catch (error) {
      toast.error(
        'Something wrong happened, please check your datas and try again.',
      );
      setLoading(false);
    }
  }

  return (
    <Container container>
      <PortfolioContainer item xs>
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
        {(props) => (
          <FormContainer style={props} item xs>
            <FormArea>
              <FaGithub size={60} />
              <Form onSubmit={handleSubmit}>
                <Input
                  name="username"
                  type="text"
                  placeholder="GitHub Username"
                />
                <button type="submit">
                  {loading ? 'Loading...' : 'Sign in'}
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
};

export default SignIn;
