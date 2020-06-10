import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  align-items: center;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 11rem));

  padding: 10px;
  overflow-y: scroll;
  min-height: 0%;
  max-height: 100vh;

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.background};
  }
  ::-webkit-scrollbar {
    width: 2px;
    background: ${(props) => props.theme.colors.border};
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: ${(props) => props.theme.colors.border};
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
  }

  a {
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s;

    :hover {
      box-shadow: 0px 0px 8px 0px
        ${(props) => lighten(0.3, `${props.theme.colors.border}`)};
    }

    p {
      margin-top: 0.4rem;
      color: ${(props) => props.theme.colors.subText};

      @media (max-width: 768px) {
        font-size: 0.8rem;
        color: ${(props) => props.theme.colors.subText};
      }
    }
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.border};

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.border};
  }
`;
