import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

   *{
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      font-family: 'Fira Code', monospace;
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
   }

   button{
      cursor: pointer
   }
`;

export const colors = {
   DefaultColor: '#301199',
};
