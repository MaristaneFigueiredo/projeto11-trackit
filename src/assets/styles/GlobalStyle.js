import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import { authColor } from "../../constants/colors";



const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
	
  }

  body {
	
	/* font-family: 'Playball', serif; */
	font-family: 'Lexend Deca', sans-serif;
  }
  

`

const Container = styled.div`
    /* width: 100vw;
    height: 100vh;
    padding: 0 30px 0 25px; */

	min-height: 100vh;
 	width: 100%;
 	padding: 31px;
  	display: flex;
 	justify-content: center;
    align-items: center;
    flex-direction: column;
    /* background-color: #F60919; */
	background-color: ${authColor};


`


export {
	GlobalStyle,
	Container
}
