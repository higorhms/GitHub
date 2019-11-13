import styled, { keyframes, css } from 'styled-components';
import { colors } from '../../styles/global';

export const Form = styled.form`
   margin-top: 30px;
   display: flex;
   flex-direction: row;
`;

export const Input = styled.input`
   flex: 1;
   border: 1px solid #eee;
   padding: 10px 15px;
   border-radius: 4px;
   font-size: 16px;

   ${props =>
      props.finded &&
      css`
         border: 1px solid red;
      `}
`;

const rotate = keyframes`
   from{
      transform: rotate(0deg);
   }

   to{
      transform: rotate(360deg);
   }
`;

export const SubmitButton = styled.button.attrs(props => ({
   type: 'submit',
   disabled: props.loading,
}))`
   background: ${colors.DefaultColor};
   border: 0;
   padding: 0 15px;
   margin-left: 10px;
   border-radius: 4px;

   display: flex;
   justify-content: center;
   align-items: center;

   &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
   }

   p {
      color: #fff;
      font-weight: 600;
   }

   ${props =>
      props.loading &&
      css`
         svg {
            animation: ${rotate} 2s linear infinite;
         }
      `}
`;

export const List = styled.ul`
   list-style: none;
   margin-top: 30px;

   li {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      align-items: center;
      padding: 15px 0;

      & + li {
         border-top: 1px solid #eee;
      }

      a {
         text-decoration: none;
         color: ${colors.DefaultColor};
      }
   }

   div {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const ClearButton = styled.button`
   background: #fff;
   border: none;
   margin-left: 5px;
   color: ${colors.DefaultColor};
`;
