import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};
  padding: 0 30px;
`;

export const NavbarArea = styled.div`
  display: flex;
  align-items: baseline;

  > p {
    font-weight: bold;
    font-size: 30px;
    color: ${(props) => props.theme.colors.headerText};
  }

  div {
    margin-left: 50px;

    a {
      font-size: 18px;
      font-weight: bold;
      transition: 0.3s;

      color: ${(props) => props.theme.colors.headerText};

      & + a {
        margin-left: 16px;
      }

      :hover {
        color: ${(props) => props.theme.colors.border};
        border-bottom: 2px solid ${(props) => props.theme.colors.border};
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  max-width: 1366px;
  margin: 0 auto;

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Avatar = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.border};
`;

export const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    strong {
      color: ${(props) =>
        props.theme.title === 'dark'
          ? darken(0.3, `${props.theme.colors.headerText}`)
          : lighten(0.3, `${props.theme.colors.headerText}`)};
    }
  }

  div {
    margin-left: 10px;

    strong {
      font-size: 18px;
      display: block;
      color: ${(props) => props.theme.colors.headerText};
    }

    > p {
      display: block;
      font-size: 16px;
      margin-top: 2px;
      color: #666;
    }
  }

  img {
    margin-left: 12px;
  }
`;
