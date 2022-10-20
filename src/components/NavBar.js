import styled from "styled-components"

export default function NavBar(){
    return (
        <NavContainer>
            TrackIt
        </NavContainer>
    );
}



const NavContainer =styled.div`
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100vw;
height: 67px;

  
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;




`