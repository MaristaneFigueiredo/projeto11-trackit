import styled from "styled-components"


export default function Menu(){
    return (
        <MenuContainer>
            <p>Hábitos</p>
            Hoje 
            <p>Histórico</p>          

        </MenuContainer>
    );
}



const MenuContainer =styled.div`
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    height: 67px;

    font-family: 'Lexend Deca', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #FFFFFF;
    

`