import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 250px;
  top: calc(80px + 10px);
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  padding: 10px 15px 5px 5px;
  display: block;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${(props) => props.theme.colors.primary};
  }
`;

export const MenuToolTip = styled.div`
  display: flex;
  flex-direction: column;

  > a {
    display: flex;
    background: ${(props) => props.theme.colors.background};
    padding: 10px;
    border-radius: 5px;
    color: ${(props) => props.theme.colors.headerText};
    width: 100%;

    align-items: center;
    justify-content: center;
    font-weight: bold;

    & + a {
      margin-top: 5px;
    }
  }
`;

export const ThemeSwitcher = styled.div`
  padding: 5px;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
`;
