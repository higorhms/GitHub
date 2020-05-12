import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
   background: #24292e;
   padding: 0 30px;
`;

export const NavbarArea = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
   grid-gap: 10px;

   a {
      padding: 2px;
      text-align: center;
      font-weight: bold;
      color: #fff;

      :hover {
         color: ${lighten(0.3, '#333')};
      }
   }
`;

export const Content = styled.div`
   height: 64px;
   margin: 0 auto;
   display: flex;
   align-items: center;
   justify-content: space-between;

   aside {
      display: flex;
      align-items: center;
      justify-content: space-between;
   }
`;

export const Avatar = styled.img`
   width: 60px;
   height: 60px;
   border-radius: 50%;
   background: #eee;
   border: 1px solid #eee;
`;

export const ProfileArea = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   > div {
      margin-left: 10px;

      strong {
         display: block;
         color: #fff;
      }

      > a {
         display: block;
         font-size: 12px;
         margin-top: 2px;
         color: #666;
         :hover {
            color: ${lighten(0.3, '#eee')};
         }
      }
   }
   img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
   }
`;
