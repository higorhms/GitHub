import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  padding: 30px;

  max-width: 1366px;
  margin: 0 auto;
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 28px;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.subText};
  font-size: 20px;
  font-weight: bold;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  max-width: 50%;
  margin-top: 4rem;

  input {
    flex: 1;

    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    transition: 0.2s;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: none;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;

    background: #1ba94c;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, '#1ba94c')};
    }
  }
`;

export const Repositories = styled.div`
  margin-top: 4rem;

  a {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${(props) => props.theme.colors.text};
      }

      p {
        font-size: 18px;
        color: ${(props) => props.theme.colors.subText};
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
