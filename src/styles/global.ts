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
   -webkit-font-smoothing: antialiased;
}

html, body, #root {
   height: 100%;
   box-sizing: border-box;
   font-size: 14px;
   font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   font-weight: 400;
   line-height: 1.43;
   letter-spacing: 0.01071em;
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
