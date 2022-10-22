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


    function addHabit(e) {
        setDisabledInput(true)
        setDisabledButton(true)
        e.preventDefault()


        console.log('days', days)
        if (days.length === 0) {
            alert('Informar os dia(s) da semana que o hábito deve acontecer.')

        } else {

            const body = {
                name: habit,
                days: days
            }

            axios.post(`${BASE_URL}/habits`, body, header)
                .then(
                    (res) => {
                        console.log(res.data)
                        alert("Hábito criado com sucesso!")
                        setShowForm(false)
                        setLoading(0)

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
                    <WeekButtons data-identifier="week-day-btn" days={days} setDays={setDays} />
                </ContainerInput>

                <ContainerButtons>
                    {/* <Botao data-identifier="cancel-habit-create-btn" disabled={disabledButton} spread="84px" stature="35px" size="15.976px" name="cancel" type="cancel" onClick={() => { setShowForm(false) }}> Cancelar </Botao> */}
                    {/* <BotaoCancel data-identifier="cancel-habit-create-btn" disabled={disabledButton} name="cancel" type="cancel" onClick={() => { setShowForm(false) }}> Cancelar </BotaoCancel> */}
                    <BotaoLink data-identifier="cancel-habit-create-btn" onClick={() => {setShowForm(false) }}>Cancelar</BotaoLink>
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


const BotaoLink = styled.span`
    color: #52b6ff;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.tamanhoTexto};
    line-height: 17px;
    text-align: center;
    text-decoration-line: ${props => props.decoration};
    text-decoration: ${props => props.decoration};
    &:focus, &:hover, &:visited, &:link, &:active {
            text-decoration: ${props => props.decoration};
        }

         

    /* background: white;
	color: #52B6FF;	
    border-radius: 4.63636px;
    border:none;
    
    height:35px;
    width: 84px;


    font-family: 'Lexend Deca', sans-serif;
    font-style: normal;
    font-weight: 400;
 
	font-size: 15.976px;
    line-height: 26px;
    
	display: flex;
	justify-content: center;
	align-items: center;

	align-items: center;
    
	cursor: pointer; */

	/* opacity: ${props => (props.loading === 1) ? 0.7 : 1}; */
`
