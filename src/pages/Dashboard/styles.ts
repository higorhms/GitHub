import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;
  padding: 20px;

  overflow-y: scroll;
  height: 100vh;

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
    min-height: 100vh;
    height: 100%;
  }

  > h1 {
    font-size: 1.4rem;
    color: ${(props) => props.theme.colors.headerText};
    margin-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    @media (min-width: 768px) {
      display: none;
    }
  }
`;

export const List = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media (max-width: 768px) {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: 0.3s;
  height: 100%;
  border-radius: 5px;
  padding: 10px;

  :hover {
    box-shadow: 0px 0px 8px 0px
      ${(props) => lighten(0.3, `${props.theme.colors.border}`)};
  }

  div {
    display: flex;
    align-items: center;
    padding: 5px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px 5px 0px 0px;

    svg {
      margin-right: 0.5rem;
      height: 20px;
      width: 20px;
      color: ${(props) => props.theme.colors.border};
    }

    h1 {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.4rem;

      @media (max-width: 768px) {
        font-size: 1rem;
      }
    }
  }

  > span {
    align-self: flex-end;
    font-weight: bold;
    color: ${(props) => props.theme.colors.border};
  }
`;

export const Description = styled.p`
  padding: 10px;
  height: 100%;
  color: ${(props) => props.theme.colors.subText};
  overflow: hidden;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
