import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.text};
`;

export const List = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export const ListItem = styled.div`
  border-radius: 4px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 150px;
  border-radius: 5px;
  padding: 10px;
  transition: 0.3s;

  /* last alt */
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  :hover {
    transform: translateY(-5px);
    box-shadow: 0px 0px 8px 0px
      ${(props) => lighten(0.3, `${props.theme.colors.border}`)};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px 5px 0px 0px;

    p {
      font-size: 20px;
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

export const Description = styled.p`
  padding: 5px;
  font-size: 18px;
  color: ${(props) => props.theme.colors.subText};
  height: 100px;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
