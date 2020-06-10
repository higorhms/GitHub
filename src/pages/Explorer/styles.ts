import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 30px;

  max-width: 1366px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  max-width: 80%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const Subtitle = styled.p`
  color: ${(props) => props.theme.colors.subText};
  font-size: 1.4rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  margin-top: 2rem;

  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: ${(props) => props.theme.colors.subText};
    border: 2px solid #fff;
    transition: 0.2s;

    &::placeholder {
      color: ${(props) => props.theme.colors.subText};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 160px;
    height: 50px;

    background: ${(props) => props.theme.colors.border};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.2s;

    &:hover {
      background: ${(props) => shade(0.2, props.theme.colors.border)};
    }
  }
`;

export const Repositories = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 1fr));
  margin-top: 2rem;
  overflow-y: scroll;

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.background};
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: ${(props) => props.theme.colors.border};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${(props) => props.theme.colors.border};
  }

  @media (max-width: 768px) {
    overflow-y: scroll;
    max-height: 100vh;
  }
`;

export const Repository = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 5px;
  transition: 0.2s;

  :hover {
    box-shadow: 0px 0px 3px 0px ${(props) => props.theme.colors.border};
  }

  > a {
    display: flex;
    width: 100%;
    padding: 10px;
    transition: 0.2s;

    :hover {
      border-radius: 5px;
      background: ${(props) => shade(0.1, props.theme.colors.primary)};
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;

      @media (max-width: 768px) {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
    }

    div {
      margin-left: 1rem;

      strong {
        font-size: 1.25rem;
        color: ${(props) => props.theme.colors.text};

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }

      p {
        font-size: 1rem;
        color: ${(props) => props.theme.colors.subText};
        margin-top: 4px;

        @media (max-width: 768px) {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export const IconArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => shade(0.5, props.theme.colors.border)};
  color: #f5f5f5;
  border-radius: 0 5px 5px 0;

  :hover {
    cursor: pointer;
    background: ${(props) => shade(0.6, props.theme.colors.border)};
  }
`;
