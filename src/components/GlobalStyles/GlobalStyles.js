import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


* {
    margin: 0;
    padding: 0;

}

*,
*::after,
*::before {
    box-sizing: inherit;
    /* border: 1px solid red; */
}

html {
    box-sizing: border-box;
    font-size: 62.5%; /* 1 rem = 10px, 10px/16p = 62.5% */
    
}

body {
    font-family: 'Muli', sans-serif ;
  font-size: 1.3rem ;
  font-weight: 300 ;
  touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  overflow-x: hidden;   
    
}

img {
    max-width: 100%;
    height: auto;
    
}

video {
  width: 100%;
  height: auto;
}
`;

export default GlobalStyle;
