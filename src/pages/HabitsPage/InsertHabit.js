import { useState } from "react"
import { ContainerTask, Botao, Entry } from "../../assets/styles/GlobalStyle"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import { useContext } from "react"
import axios from 'axios'
import WeekButtons from "../../components/WeekButtons"
import { AuthContext } from "../../contexts/auth"

export default function InsertHabit({ setShowForm }) {
    const [disabledButton, setDisabledButton] = useState(false)
    const [disabledInput, setDisabledInput] = useState(false)
    const {user} = useContext(AuthContext)
    const [days, setDays] = useState([])
    const {loading, setLoading} = useContext(AuthContext)
    const [habit, setHabit] = useState('')

    const header = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : `Bearer ${user.token}`,
        }
    }


    function addHabit(e) {
        setDisabledInput(true)
        setDisabledButton(true)        
        e.preventDefault()
        
        
                {/* {
	name: "Nome do hábito",
	days: [1, 3, 5] // segunda, quarta e sexta
} */}    


        const body = {
            name:habit,
            days:days
        }

        axios.post(`${BASE_URL}/habits`, body, header)
            .then(
                (res) => {
                    // console.log(res.data)
                    alert("Hábito criado com sucesso!")
                    setShowForm(false)
                    setLoading(0)       
                   
                }

            )
            .catch(
                (error) => {
                    // alert(`Erro: ${error.response.data} . Seu login não deu certo!`)
                    alert(`Problema na criação do hábito - Erro: ${error.response.data.message}.`)                  
                    setDisabledInput(false)
                    setDisabledButton(false)
                    setLoading(0)
                }

            )

        

    }

    return (
         <ContainerTask stature="180px" marginT="20px">    
            
            <form onSubmit={addHabit}>
                <ContainerInput>
                    <Entry spread="75vw"
                        data-identifier="input-habit-name"
                        disabled={disabledInput}
                        name="name"
                        value={habit}
                        onChange={(e) => setHabit(e.target.value)}
                        type="text"
                        placeholder="nome do hábito"
                        required
                    />
                    <WeekButtons data-identifier="week-day-btn" days={days} setDays={days}/>
                </ContainerInput>

                <ContainerButtons>
                    <Botao data-identifier="cancel-habit-create-btn" disabled={disabledButton} spread="84px" stature="35px" size="15.976px" name="cancel" onClick={() => {setShowForm(false) }}> Cancelar </Botao>
                    <Botao data-identifier="save-habit-create-btn"  disabled={disabledButton} spread="84px" stature="35px" size="15.976px" type="submit"> Salvar </Botao>
                </ContainerButtons>

            </form>

        </ContainerTask>

    )
}

const ContainerInput = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: baseline;

     /* margin-top: 20px; */

   

`
const ContainerButtons = styled.div`
    display:flex;
    justify-content: flex-end;
    margin-top:29px;


`