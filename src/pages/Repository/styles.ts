import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;

  max-width: 1366px;
  margin: 0 auto;
`;

export const RepositoryInfo = styled.section`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    transition: 0.2s;
    margin-bottom: 20px;
    font-size: 16px;
    width: 80px;

    &:hover {
      color: #666;
    }
  }

  svg {
    margin-right: 4px;
  }

  header {
    display: flex;
    align-items: center;

    img {
      width: 90px;
      height: 90px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 28px;
        color: ${(props) => props.theme.colors.text};
      }

      p {
        font-size: 16px;
        color: ${(props) => props.theme.colors.subText};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 20px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 20px;
        color: ${(props) => props.theme.colors.text};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${(props) => props.theme.colors.subText};
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
