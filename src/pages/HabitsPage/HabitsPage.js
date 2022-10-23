
import Menu from "../../components/Menu";
import NavBar from "../../components/NavBar";
import { screenColor } from "../../constants/colors";
import styled from "styled-components"

import { Container, Title, ContainerTask  } from "../../assets/styles/GlobalStyle";

import { useState, useEffect } from "react";
import Phrase from "../../components/Phrase";
import InsertHabit from "./InsertHabit";
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth";
import { BASE_URL } from "../../constants/urls";
import axios from 'axios'
import WeekButtons from "../../components/WeekButtons"
import deleteIcon from "../../assets/images/delete.png"


export default function HabitsPage() {
    const [showPhrase, setShowPhrase] = useState(true)
    const [showFormInsert, setShowFormInsert] = useState(false)
    const { user } = useContext(AuthContext)
    const { loading, setLoading } = useContext(AuthContext)
    // const {user, loading, setLoading} = useContext(AuthContext)
    const [listHabits, setListHabits] = useState([])
    const [days, setDays] = useState([])


    const header = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
        }
    }

    useEffect(  () => displayHabits(), [])                

    async function displayHabits() {
        try {
            setLoading(1)        
                
    
            await axios.get(`${BASE_URL}/habits`, header)
                        .then( (response) => {
                            const {data} = response
                            setListHabits(data)
                            
                        })
                        .catch( (erro) => {
                            const mensagem = (erro.response.status === 422) ? 'Preencha os campos corretamente' : erro.response.data.message
                            alert(mensagem)
                        })
            setLoading(0)
        }
        catch(erro) {
            setLoading(0)
            alert('Erro!')

        }

    }

    async function deleteHabit(h) {
        try {
            const confirmaExclusao = window.confirm(`Deseja realmente excluir o hábito ${h.name}?`)
            if (!confirmaExclusao) return 
                // console.log('header', header)
            setLoading(1)      
            // BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit"      
            await axios.delete(`${BASE_URL}/habits/${h.id}`, header)
                        .then( () => {
                            // listHabits()
                            displayHabits()
                        })
                        .catch( (erro) => {
                            const mensagem = (erro.response.status === 422) ? 'Preencha os campos corretamente' : erro.response.data.message
                            alert(mensagem)
                        })
            setLoading(0)
        }
        catch(erro) {
            setLoading(0)
            alert('Erro!')

        }

    }


    function renderizarHabits(h) {
        return(
            <>
                <ContainerTask stature="91px" marginT="20px" showTask ={true}>
                    <ContainerDescription>
                        <h1 data-identifier="habit-name">{h.name}</h1>
                        
                        <WeekButtons  days={h.days}  />
                    </ContainerDescription>    

                    <ContainerRemove>
                                <BotaoDelete data-identifier="delete-habit-btn" type="button" onClick={() => deleteHabit(h)}  > <img src={deleteIcon} alt=""/> </BotaoDelete>
                                
                    </ContainerRemove>
                </ContainerTask>
            
            </>

            
        )
    }


    return (
        <>
            <NavBar />
            <Container background={screenColor} alignH="flex-start" justV="baseline">
                <ContainerHeader>
                    <Title>Meus Hábitos</Title>                    
                    <button data-identifier="create-habit-btn" onClick={()=>setShowFormInsert(true)}>+</button>                                                                
                </ContainerHeader>

                {
                        (showFormInsert === true) &&
                        <InsertHabit setShowFormInsert={setShowFormInsert}/>
                        
                } 

                {
                    loading === 0 ?
                        listHabits.map( (h) => renderizarHabits(h) )
                    
                     : ''
                }

               
                <Phrase data-identifier="no-habit-message" showPhrase={(listHabits.length > 0) ? false : true} />
                
            </Container>

            <Menu />
        </>
    )
}



const ContainerHeader = styled.div`
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
const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: baseline;

    

    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        margin-bottom:7px;

    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
    }
`

const ContainerRemove = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    margin-left:5px;

`

const BotaoDelete = styled.button`
    background-color: transparent;
    border: none;
`