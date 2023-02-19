import { createGlobalStyle } from "styled-components";

export interface DefaultTheme {
  textColor?: string;
  bgColor?: string;
  accentColor?: string;
  borderColor?: string;
  hoverColor?: string;
}

export const Globalstyle = createGlobalStyle<{ theme: DefaultTheme }>`
@font-face {
    font-family: 'KorailRoundGothicBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/KorailRoundGothicBold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}
HTML {
  font-family:'KorailRoundGothicBold';
}

button {
  font-family:'KorailRoundGothicBold';
  position: relative;
  display: inline-block;
  font-size: .8125rem;
  padding: .3125rem .625rem;
  color: white;
  margin: 1.25rem .625rem .625rem;
  border-radius: .375rem;
  text-align: center;
  transition: top .01s linear;
  text-shadow: 0 1px 0 rgba(0,0,0,0.15);
  cursor: pointer;
  color:black;
  border:none;
  background-color: #EEEEEE;
  box-shadow: 0 0 0 1px #8f959b inset,
        0 0 0 2px rgba(255,255,255,0.11) inset,
        0 8px 0 0 rgba(241, 241, 241, 0.7),
        0 8px 0 1px rgba(0,0,0,.2),
        0 8px 8px 1px rgba(0,0,0,0.5);

}

button:active {
  top: 9px;
}


button:active{
  box-shadow: 0 0 0 1px #EEEEEE inset,
        0 0 0 2px rgba(255,255,255,0.15) inset,
        0 0 0 1px rgba(0,0,0,0.4);
}
body{
  background-color:${(props) => props.theme.bgColor}
}


a {
  color: inherit;
  text-decoration: none;
  //border:1px solid black;
  width:95%;

}

`;
