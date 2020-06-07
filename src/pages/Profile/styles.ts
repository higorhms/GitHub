import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 30px;
  max-width: 1366px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 200px;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;

    border: 4px solid ${(props) => props.theme.colors.border};

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      margin-right: 10px;
      border: 2px solid ${(props) => props.theme.colors.border};
    }
  }

  h3 {
    margin-top: 0.2rem;
    font-size: 1.8rem;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.subText};

    @media (max-width: 768px) {
      display: none;
    }
  }

  span {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  margin-left: 2rem;

  @media (max-width: 768px) {
    max-width: 100%;
    margin-left: 0rem;
  }

  ul {
    display: flex;

    li {
      color: ${(props) => props.theme.colors.text};
      transition: 0.3s;

      & + li {
        margin-left: 2rem;

        @media (max-width: 768px) {
          margin-left: 1rem;
        }
      }

      span {
        font-size: 18px;
      }

      a {
        color: ${(props) => props.theme.colors.text};
        transition: 0.2s;

        :hover {
          color: ${(props) => props.theme.colors.border};
        }

        svg {
          @media (max-width: 768px) {
            height: 30px;
            width: 30px;
          }
        }

        strong {
          display: block;
          color: ${(props) => props.theme.colors.text};
          transition: 0.2s;
          font-weight: bold;
          font-size: 1.5rem;

          @media (max-width: 768px) {
            font-size: 1rem;
          }

          :hover {
            color: ${(props) => props.theme.colors.border};
          }
        }

        span {
          @media (max-width: 768px) {
            font-size: 0.8;
          }
        }
      }
    }
  }
`;
