import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 1366px;
  margin: 0 auto;

  padding: 20px;
`;

export const List = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
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
    transform: translateY(-5px);
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
    }

    p {
      font-size: 20px;
      color: ${(props) => props.theme.colors.text};
    }
  }

  > span {
    align-self: flex-end;
    font-weight: bold;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.border};
  }
`;

export const Description = styled.p`
  padding: 10px;
  font-size: 1rem;
  height: 100%;

  color: ${(props) => props.theme.colors.subText};

  overflow: hidden;
`;
