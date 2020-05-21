import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;

  border-radius: 5px;

  padding: 10px;
  align-items: center;

  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 11rem));

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
      transform: translateY(-5px);
      box-shadow: 0px 0px 8px 0px
        ${(props) => lighten(0.3, `${props.theme.colors.border}`)};
    }

    p {
      margin-top: 0.4rem;
      color: ${(props) => props.theme.colors.subText};
    }
  }
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  border: 4px solid ${(props) => props.theme.colors.border};
`;
