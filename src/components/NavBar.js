import styled from "styled-components"
import photo from "../assets/images/bobesponja.png";


export default function NavBar(){
    return (
        <NavContainer>
            TrackIt
            <img src={photo} alt="foto usuário"/>

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
    /* align-items: baseline; */

    /* width: 100vw; */
    width: 100%;
    height: 67px;

    font-family: 'Playball', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
    
    padding-top:10px;
    padding-bottom:11px;
    padding-left:18px;

`