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

html{
   display: block;
   -webkit-font-smoothing: antialiased;
}

html, body, #root {
   height: 100%;
   padding: 0;
   box-sizing: border-box;
   font-size: 0.875rem;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 400;
   line-height: 1.43;
   letter-spacing: 0.01071em;

   ::-webkit-scrollbar{
      display: none;
      -ms-overflow-style: none;
   }

   @media (max-width: 480px) {
      height: 950px;
   }
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
