import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  overflow: hidden;
  background-color: #333;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: 1fr;

  a {
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.primary};

    :hover {
      /* background: ${(props) => shade(0.1, props.theme.colors.border)}; */
      background: ${(props) => props.theme.colors.border};
    }

    svg {
      size: 2rem;
      color: ${(props) => props.theme.colors.headerText};

    }
  }
`;
