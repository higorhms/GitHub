import styled, { css } from 'styled-components';

interface TooltipProps {
  isVisible: boolean;
}

export const Container = styled.div<TooltipProps>`
  position: absolute;
  width: 200px;
  top: calc(80px + 10px);
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  padding: 10px 15px 5px 5px;
  opacity: 0;
  transition: opacity 0.4s;
  visibility: hidden;
  z-index: 10;

  ${(props) =>
    props.isVisible &&
    css`
      display: block;
      opacity: 1;
      visibility: visible;
    `}

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
    transition: 0.3s;

    align-items: center;
    font-weight: bold;

    & + a {
      margin-top: 5px;
    }

    p {
      font-size: 1rem;
      color: ${(props) => props.theme.colors.headerText};
      transition: 0.3s;
    }

    svg {
      margin-right: 10px;
      transition: 0.3s;
    }

    :hover {
      p {
        color: ${(props) => props.theme.colors.border};
      }

      svg {
        color: ${(props) => props.theme.colors.border};
      }
    }
  }
`;

export const ThemeSwitcher = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.primary};
  width: 100%;
  border: none;

  :hover {
    svg {
      color: ${(props) => props.theme.colors.border};
    }
  }

  svg {
    color: ${(props) => props.theme.colors.headerText};
    margin: 5px 0 5px 0;
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
