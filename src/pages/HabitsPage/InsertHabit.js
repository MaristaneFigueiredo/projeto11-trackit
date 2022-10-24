import { useState } from "react"
import { ContainerTask, Botao, Entry } from "../../assets/styles/GlobalStyle"
import styled from "styled-components"
import { BASE_URL } from "../../constants/urls"
import { useContext } from "react"
import axios from 'axios'
import WeekButtons from "../../components/WeekButtons"
import { AuthContext } from "../../contexts/auth"


export default function InsertHabit({ setShowFormInsert, displayHabits }) {


    const [disabledButton, setDisabledButton] = useState(false)
    const [disabledInput, setDisabledInput] = useState(false)
    const { user } = useContext(AuthContext)
    const [days, setDays] = useState([])
    const { loading, setLoading } = useContext(AuthContext)
    const [habit, setHabit] = useState('')

    const header = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
        }
    }

    // function validarWeekDays() {

    //     console.log('days', days)
    //     if (days.length === 0) {
    //         alert('Informar os dia(s) da semana que o hábito deve acontecer.') 
    //         return
    //     }
    // }






    function addHabit(e) {
        setDisabledInput(true)
        setDisabledButton(true)
        e.preventDefault()


       

            const body = {
                name: habit,
                days: days
            }

        axios.post(`${BASE_URL}/habits`, body, header)
            .then(
                (res) => {
                    console.log(res.data)
                    alert("Hábito criado com sucesso!")
                    setShowFormInsert(false)
                    setLoading(1)
                    setHabit("")
                    displayHabits()

                }

            )
            .catch(
                (error) => {
                    console.log(`Erro: ${error.response.data} . Sua criação não deu certo!`)
                    // alert(`Problema na criação do hábito - Erro: ${error.response.data.message}.`)                  
                    setDisabledInput(false)
                    setDisabledButton(false)
                    setLoading(0)
                }

            )

      
    }

    return (
        <ContainerTask stature="180px" marginT="20px" showTask={true}>

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
                    <WeekButtons data-identifier="week-day-btn" days={days} setDays={setDays} required />
                </ContainerInput>

                <ContainerButtons>

                    <Botao data-identifier="cancel-habit-create-btn" disabled={disabledButton} spread="84px" stature="35px" size="15.976px" name="cancel" onClick={() => { setShowFormInsert(false); setHabit('') }}> Cancelar </Botao>
                    <Botao data-identifier="save-habit-create-btn" disabled={disabledButton} spread="84px" stature="35px" size="15.976px" type="submit"> Salvar </Botao>


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



