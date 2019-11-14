import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

   *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
   }

   html, body, #root{
      min-height: 100%;
   }

   body{
      background: black;
      -webkit-font-smoothing: antialiased !important;
   }

   body, input, button{
      color: #222;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
   }

   button{
      cursor: pointer
   }
`;

export const colors = {
   DefaultColor: '#301199',
};
