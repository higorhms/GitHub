import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  bottom: 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  grid-template-rows: 1fr;

  @media (min-width: 768px) {
    display: none;
  }

  a {
    padding: 5px 0 2px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.colors.primary};

    :hover {
      background: ${(props) => props.theme.colors.border};
    }

    svg {
      color: ${(props) => props.theme.colors.headerText};
      height: 20px;
      width: 20px;
    }

    p {
      margin-top: 5px;
      font-size: 0.8rem;
      color: ${(props) => props.theme.colors.subText};
    }
  }
`;
