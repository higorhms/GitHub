import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Fira+Code&display=swap');

*{
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
}

*:focus{
    outline: 0;
}

html, body, #root {
   height: 100%;
   font-family: 'Roboto Mono', monospace;

   ::-webkit-scrollbar{
      display: none;
      -ms-overflow-style: none;
   }
}

body{
   -webkit-font-smoothing: antialiased;
}

body, input, button {
   font-size: 14px;
}

a{
   text-decoration: none;
}

ul{
   list-style: none;
}

button{
   cursor: pointer;
}
`;

export const colors = {
   DefaultColor: '#301199',
};
