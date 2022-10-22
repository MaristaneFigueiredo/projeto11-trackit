import { createGlobalStyle } from "styled-components";
import styled from "styled-components"
import { Link } from "react-router-dom";
import { titleColor } from "../../constants/colors";



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
	flex-direction: column; 
 	/* justify-content: center;    */

	justify-content:${(props) => props.justV} ;
	align-items:${(props) => props.alignH} ;
       
	background-color: ${(props) => props.background}; 
	
	margin-top:60px; //devido a nav fixed
	margin-bottom:32px; //devido ao menu fixed

`
const Entry = styled.input`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    
   background-color: ${(props) => props.disabled === true ? "#F2F2F2": "#FFFFFF"};
    
    width: 303px;
    height: 45px;
    margin-bottom: 8px;

	font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;  

`


const Botao = styled.button`
    background: #52B6FF;	
    border-radius: 4.63636px;
    border:none;
    
    height:${(props) => props.stature};
    width: ${(props) => props.spread};


    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    /* text-align: center; */
	display: flex;
	justify-content: center;
	align-items: center;

	align-items: center;
    color: #FFFFFF;	
	cursor: pointer;

	opacity: ${props => (props.loading === 1) ? 0.7 : 1};
`


const StyledLink = styled(Link)` 
	text-align: center;
	width: 303px;    
	height: 17px;
	font-family: 'Lexend Deca';
	font-style: normal;
	font-weight: 400;
	font-size: 13.976px;
	line-height: 17px;

	text-decoration-line: underline;
	color: #52B6FF;
	margin-top: 25px;
	cursor: pointer;
`

const ContainerAuth = styled.div`	
 	width: 100%;
 	padding: 31px;
  	display: flex;
    flex-direction: column;
 	justify-content: center;
  
`

const ContainerTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height:${(props) => props.stature};
    
    border: 1px solid white;
    border-radius: 5px;
    background-color:#FFFFFF ;
    padding: 13px 13px 17px 15px;

    margin-bottom:10px; 
`


const Title = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color:${titleColor};
` 


export {
	GlobalStyle,
	Container,
	Entry,
	Botao,
	StyledLink,
	ContainerAuth,
	ContainerTask,
	Title
}
