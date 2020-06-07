/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useCallback } from 'react';
import { Form } from '@unform/web';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { Spring } from 'react-spring/renderprops';

import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

import Input from '../../components/Input';

import {
  Container,
  FormContainer,
  PortfolioContainer,
  FormArea,
  SocialMediasContainer,
} from './styles';

interface FormProps {
  username: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: FormProps): Promise<void> => {
      setLoading(true);

      try {
        await signIn(data.username);
        navigate('/dashboard');
      } catch (error) {
        toast.error(
          'Something wrong happened, please check your credentials and try again.',
        );
        setLoading(false);
      }
    },
    [navigate, signIn],
  );

  return (
    <Container>
      <PortfolioContainer>
        <h1>A Github version developed by Higor Martins</h1>

        <p>
          If you do not have an account on Github, you can try the application
          using mine, just type: higorhms.
        </p>
        <p>
          Technologies:
          <ul>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Styled Components</li>
            <li>Eslint</li>
            <li>Prettier</li>
            <li>and more...</li>
          </ul>
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
          <FormContainer style={props}>
            <FormArea>
              <FaGithub size={100} />
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
