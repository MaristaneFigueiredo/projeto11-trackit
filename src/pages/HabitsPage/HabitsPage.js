
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import { screenColor } from "../../constants/colors";
import styled from "styled-components"

import { Container, Title  } from "../../assets/styles/GlobalStyle";

import { useState } from "react";
import Phrase from "../../components/Phrase";
import InsertHabit from "./InsertHabit";
import { useNavigate } from "react-router-dom"


export default function HabitsPage() {
    const [show, setShow] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()



    return (
        <>
            <NavBar />
            <Container background={screenColor} alignH="flex-start" justV="baseline">
                <ContainerInsert>
                    <Title>Meus Hábitos</Title>
                    {/* <button onClick={addHabit}>+</button>   */}
                    <button onClick={()=>setShowForm(true)}>+</button>                                                                
                </ContainerInsert>

                {
                        (showForm === true) &&
                        <InsertHabit setShowForm="setShowForm"/>
                        
                } 

                <Phrase show={show}/>
            </Container>

            <Menu />
        </>
    )
}



const ContainerInsert = styled.div`
    display: flex;
    justify-content:space-between;
    width: 100%;
    

    button{
        background-color: #52B6FF ;
        border: none;
        border-radius: 4.63636px;
        width: 40px;
        height: 35px;    

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        color: #FFFFFF;
        cursor:pointer;
    }

    

    
`