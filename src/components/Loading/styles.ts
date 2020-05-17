import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.background};

  height: 100vh;

  > p {
    font-weight: bold;
    font-size: 80px;
    color: ${(props) => props.theme.colors.headerText};
  }
`;
