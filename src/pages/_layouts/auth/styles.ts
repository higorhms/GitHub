import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.background};
  min-height: 100vh;
  height: 100%;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;
