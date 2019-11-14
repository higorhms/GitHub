import styled, { css } from 'styled-components';
import { colors } from '../../styles/global';
import animationData from '../../animations/ampulheta.json';

// const rotate = keyframes` vem do styled-components
//    from{
//       transform: rotate(0deg);
//    }

//    to{
//       transform: rotate(360deg);
//    }
// `;

// export const Loading = styled.div`
//    font-size: 30px;
//    color: #fff;
//    display: flex;
//    justify-content: center;
//    align-items: center;
//    flex-direction: column;
//    height: 100vh;

//    svg {
//       padding-top: 20px;
//       animation: ${rotate} 2s linear infinite;
//    }
// `;

export const Owner = styled.header`
   margin-top: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;

   a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      background: ${colors.DefaultColor};
      border: none;
      color: #fff;
      font-weight: bold;
      padding: 8px;
      border-radius: 5px;
      margin-bottom: 30px;
      text-decoration: none;

      &:hover {
         opacity: 0.6;
      }
   }

   img {
      width: 120px;
      border-radius: 50%;
   }

   h1 {
      margin-top: 10px;
      font-size: 24px;
   }

   p {
      margin-top: 10px 0px;
      color: #666;
      font-size: 14px;
      text-align: center;
      max-width: 500px;
   }
`;

export const IssueList = styled.ul`
   margin-top: 30px;
   list-style: none;
   padding-top: 30px;
   border-top: 1px solid #eee;

   li {
      padding: 15px 10px;
      border: 1px solid #eee;
      border-radius: 5px;
      display: flex;

      & + li {
         margin-top: 15px;
         flex-direction: row;
      }

      img {
         width: 36px;
         height: 36px;
         border-radius: 50%;
         border: 2px solid #eee;
      }

      p {
      }

      div {
         flex: 1;
         margin-left: 15px;

         strong {
            font-size: 16px;

            a {
               text-decoration: none;
               color: #333;

               &:hover {
                  opacity: 0.6;
               }
            }

            span {
               margin-left: 10px;
               font-size: 12px;
               background: #999;
               color: #333;
               padding: 2px 4px;
               border-radius: 3px;
            }
         }

         p {
            color: #999;
            margin-top: 2px;
            font-size: 12px;
         }
      }
   }
`;

export const ButtonGroup = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 20px;
`;

export const PreviousButton = styled.button`
   background: ${colors.DefaultColor};
   padding: 5px;
   border-radius: 5px;
   border: 1px solid #eee;
   color: #fff;
   font-weight: 600;

   &:hover {
      opacity: 0.6;
   }

   ${props =>
      props.page === 1 &&
      css`
         opacity: 0.3;
      `}
`;

export const NextButton = styled.button`
   background: ${colors.DefaultColor};
   padding: 5px;
   border-radius: 5px;
   border: 1px solid #eee;
   color: #fff;
   font-weight: 600;

   &:hover {
      opacity: 0.6;
   }
`;

export const LoadingContainer = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   text-align: center;

   p {
      color: #fff;
      font-size: 18px;
   }
`;

export const defaultOptions = {
   loop: true,
   autoplay: true,
   animationData,
   rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
   },
};
