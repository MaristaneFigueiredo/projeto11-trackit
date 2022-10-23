import { Link } from "react-router-dom";
import styled from "styled-components"
import { menuColor } from "../constants/colors";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { useContext } from 'react';
import { AuthContext } from "../contexts/auth";






export default function Menu() {
    const { percentageDone } = useContext(AuthContext)

    // console.log('Menu-percentageDone',percentageDone)
    return (
        <MenuContainer>
            <Link to="/habitos" data-identifier="habit-page-action"> <ButtonOrdinary>Hábitos</ButtonOrdinary></Link>
            <Link to="/hoje">
         
                <ContainerProgressBar>
                    <CircularProgressbar value={percentageDone} text="Hoje"
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                            textSize: '18px'
                        })
                        }
                    />
                </ContainerProgressBar>
           
            </Link>
            <Link to="/historico" data-identifier="historic-page-action"><ButtonOrdinary to="/historico">Histórico</ButtonOrdinary> </Link>

        </MenuContainer>
    );
}



const MenuContainer = styled.div`
    /* background-color: #126BA5; */
    background-color: ${menuColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    bottom: 0;

    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 67px;

    font-family: 'Lexend Deca', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;  
`

const ButtonOrdinary = styled.button`
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color:#52B6FF; 
        
        border:none;   
        background-color:#FFFFFF;
        cursor:pointer;
`
const ContainerProgressBar = styled.div`
    height: 90px;
    width: 90px;
    position: relative; 
    bottom: 30px;

    /* font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px; */


   


`