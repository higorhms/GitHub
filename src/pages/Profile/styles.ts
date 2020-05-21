import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  padding: 30px;

  max-width: 1366px;
  margin: 0 auto;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;

    border: 4px solid ${(props) => props.theme.colors.border};
  }

  h3 {
    margin-top: 0.2rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.text};
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.subText};
  }

  span {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 2rem;

  ul {
    display: flex;

    li {
      font-size: 1.4rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.text};
      transition: 0.3s;

      strong {
        display: block;
        font-size: 20px;
        color: ${(props) => props.theme.colors.text};
      }

      & + li {
        margin-left: 2rem;
      }

      a {
        color: ${(props) => props.theme.colors.text};
        transition: 0.2s;

        :hover {
          color: ${(props) => props.theme.colors.border};
        }
      }
    }
  }
`;
