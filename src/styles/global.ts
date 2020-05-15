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

body{
   -webkit-font-smoothing: antialiased;
   ::-webkit-scrollbar{
     display: none;
  }
}

body, input, button {
   font-size: 14px;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
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
  DefaultColor: '#24292e',
};
