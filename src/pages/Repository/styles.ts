import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 30px;

  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  max-width: 80%;

  @media (max-width: 768px) {
    overflow: hidden;
    max-width: 100%;
    min-height: 100vh;
    max-height: 100vh;
  }
`;

export const RepositoryInfo = styled.section`
  header {
    display: flex;
    align-items: center;

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 2px solid ${(props) => props.theme.colors.border};

      @media (max-width: 768px) {
        width: 80px;
        height: 80px;
        border-radius: 20%;
        border: 2px solid ${(props) => props.theme.colors.border};
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 2rem;
        color: ${(props) => props.theme.colors.text};

        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
      }

      p {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.subText};
        margin-top: 4px;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    @media (max-width: 768px) {
      align-items: center;
    }

    li {
      & + li {
        margin-left: 80px;

        @media (max-width: 768px) {
          margin-left: 20px;
        }
      }

      strong {
        display: block;
        font-size: 20px;
        color: ${(props) => props.theme.colors.text};

        @media (max-width: 768px) {
          font-size: 1.4rem;
        }
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${(props) => shade(0.1, props.theme.colors.text)};

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }
    }
  }

  a {
    margin-left: auto;
    color: ${(props) => props.theme.colors.text};
    transition: 0.2s;

    :hover {
      color: ${(props) => props.theme.colors.border};
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;
  max-height: 100vh;
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
    margin-top: 10px;
  }

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

    svg {
      height: 30px;
      width: 30px;
      color: ${(props) => props.theme.colors.border};
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 1.6rem;
        color: ${(props) => props.theme.colors.text};

        @media (max-width: 768px) {
          font-size: 1.2rem;
        }
      }

      p {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.subText};
        margin-top: 4px;

        @media (max-width: 768px) {
          font-size: 1rem;
        }
      }
    }

    svg {
      width: 30px;
    }
  }
`;
