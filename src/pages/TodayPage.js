
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import { screenColor } from "../constants/colors";
import styled from "styled-components"
import { Container, ContainerTask, Title } from "../assets/styles/GlobalStyle";
import { AuthContext } from "../contexts/auth";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import axios from 'axios'
import { BASE_URL } from "../constants/urls";
import Phrase from "../components/Phrase";

export default function TodayPage() {    
    const [listHabitDay, setListHabitDay] = useState([])

    const { user, percentageDone, loading, setLoading, setpercentageDone } = useContext(AuthContext)

    const header = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
        }
    }

    let weekDay = String(dayjs().locale('pt-br').format('dddd, DD/MM'))
    weekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1)


    // OPCIONAL => Se eu quiser mostrar um erro na tela caso a requisição caia no catch
    const [error, setError] = useState(false)


    useEffect(() => diplayHabitsToday(), [])

    function diplayHabitsToday() {
        

        const promise = axios.get(`${BASE_URL}/habits/today`, header)

        promise.then((res) => {
            // console.log('res.data', res.data)
            setListHabitDay(res.data)
            setLoading(1)

        })

        promise.catch((err) => {
            console.log(err.response.data)

            // OPCIONAL => mostrar erro na tela
            setError(true) // mas seto o erro como true para mostrar a mensagem de erro
            setLoading(0)

        })

        // OPCIONAL => Se a requisição deu errado (caiu no catch), renderize essa mensagem
        if (error === true) {
            return <div>Erro na requisição! Tente de novo</div>
        }

        // Se eu ainda não tive resultado da requisição , mostre o carregando
        if (!error && listHabitDay === undefined) {
            return <div>Carregando...</div>
        }
    }

    //testanto async
    async function setHabitDone(id) {
        try {
            await axios.post(`${BASE_URL}/habits/${id}/check`, {}, header)
                .then((response) => {
                   
                    diplayHabitsToday()

                })
                .catch((erro) => {
                    const mensagem = (erro.response.status === 422) ? 'Preencha os campos corretamente' : erro.response.data.message
                    alert(mensagem)
                })
        }
        catch (erro) {
            alert('Erro!')

        }

    }

    async function setHabitNotDone(id) {
        try {
            await axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, header)
                .then((response) => {                    
                    diplayHabitsToday()

                })
                .catch((erro) => {
                    const mensagem = (erro.response.status === 422) ? 'Preencha os campos corretamente' : erro.response.data.message
                    alert(mensagem)
                })
        }
        catch (erro) {
            alert('Erro!')

        }

    }


    function validaDone() {
        const habitsDone = listHabitDay.filter((h) => h.done).length || 0
        const totalHabits = listHabitDay.length || 0
        const percentual = Math.ceil((habitsDone / totalHabits) * 100) || 0
        setpercentageDone(percentual)
        localStorage.setItem('percentualConcluido', percentual)
        return percentual
    }


    return (
        <>
            <NavBar />

            <Container background={screenColor} alignH="flex-start" justV="baseline">
                <ContainerTitle>
                    <Title data-identifier="today-infos">{weekDay}</Title>
                    <SubTitle data-identifier="today-infos" letterColor={(percentageDone === 0) ? "#BABABA" : "#8FC549"}>

                        {validaDone() === 0 ?
                            "Nenhum hábito concluído ainda"
                            :
                            `${validaDone()}% dos hábitos concluídos`

                        }

                    </SubTitle>
                </ContainerTitle>


                {listHabitDay.map((h) => {
                    return (
                        <ContainerTask key={h.id} marginT="10px" showTask={(listHabitDay.length > 0) ? true : false}>
                            <ContainerDescription data-identifier="today-infos" >

                                <h1>{h.name}</h1>
                                <p>Sequência atual: <ContainerSpain SeqColor="#8FC549">{h.currentSequence} dias</ContainerSpain></p>
                                <p>Seu recorde:  <ContainerSpain SeqColor={(h.currentSequence !== h.highestSequence || h.highestSequence === 0 )  ? '##666666' : '#8FC549'}>{h.highestSequence} dias</ContainerSpain></p>


                            </ContainerDescription>

                            <ContainerCheck>
                                <ButtonCheck data-identifier="done-habit-btn" colorButton={(h.done) ? '#8FC549' : '#E7E7E7'} onClick={() => (h.done) ? setHabitNotDone(h.id) : setHabitDone(h.id)}>
                                    <ion-icon name="checkmark-sharp"></ion-icon>
                                </ButtonCheck>
                            </ContainerCheck>

                        </ContainerTask>)

                }
                )}

                <Phrase showPhrase={(listHabitDay.length > 0) ? false : true} />

            </Container>
            <Menu />
        </>



    )
}

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:28px;

`
const SubTitle = styled.h2`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color:${(props) => props.letterColor};           
        

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

const ContainerSpain = styled.span`          
            color:${(props) => props.SeqColor};
            
`

const ContainerCheck = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;
    margin-left:5px;

`

const ButtonCheck = styled.button`    
    background-color: ${props => props.colorButton};
    border: none;
    border-radius: 5px;
    height: 70px;
    width: 70px;

    ion-icon{        

        color:#FFFFFF;         
        font-weight: bold;
        font-size: 50px;       
        
    }
`