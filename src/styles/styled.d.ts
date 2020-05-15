import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      border: string;
      background: string;
      headerText: string;
      text: string;
      subText: string;
    };
  }
}
