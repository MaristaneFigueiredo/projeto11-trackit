
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import { screenColor, titleColor } from "../constants/colors";
import styled from "styled-components"
import { Container, ContainerAuth } from "../assets/styles/GlobalStyle";

export default function TodayPage() {
    return (
        <>
            <NavBar />

            <Container background={screenColor} alignH="flex-start" justV="baseline">
                <ContainerTitle>
                    <Title>Today Page</Title>
                    <h2>Nenhum hábito concluído ainda</h2>
                </ContainerTitle>


                <ContainerTask>
                    <ContainerDescription>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: <span>3 dias</span></p>
                        <p>Seu recorde:  <span>4 dias</span></p> 
                    </ContainerDescription>                      
                    <ContainerCheck>                        
                        {/* <ion-icon name="checkmark-sharp"></ion-icon> */}
                        

                        {/* <ButtonCheck corBotao={(habito.done) ? '#8FC549' : '#E7E7E7' } onClick={() => (habito.done) ? setHabitoNaoConcluido(habito.id) : setHabitoConcluido(habito.id)  }>
                            <ion-icon name="checkmark-sharp"  style={ { color: '#FFF', fontSize: '50px', fontWeight: '800' }}></ion-icon>
                        </ButtonCheck> */}

                        <ButtonCheck>
                            {/* <ion-icon name="checkmark-sharp"  style={ { color: '#FFF', fontSize: '50px', fontWeight: '800' }}></ion-icon> */}
                            <ion-icon name="checkmark-sharp"></ion-icon>
                        </ButtonCheck>
                    </ContainerCheck>
                </ContainerTask>

                <ContainerTask>
                    <ContainerDescription>
                        <h1>Ler 1 capítulo de livro</h1>
                        <p>Sequência atual: <span>3 dias</span></p>
                        <p>Seu recorde:  <span>4 dias</span></p> 
                    </ContainerDescription>                      
                    <ContainerCheck>
                        Check
                    </ContainerCheck>
                </ContainerTask>


            </Container>
            <Menu />
        </>



    )
}

const ContainerTitle = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom:28px;

    h2{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
    }

`

const Title = styled.h1`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color:${titleColor};

    


` 

const ContainerTask = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    border: 1px solid white;
    border-radius: 5px;
    background-color:#FFFFFF ;
    padding: 13px 13px 17px 15px;

    margin-bottom:10px; 
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

    }

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 12.976px;
        line-height: 16px;
    }

    span{
        color:#8FC549;
    }
`

const ContainerCheck = styled.div`
    display: flex;
    justify-content:flex-end;
    align-items: center;


`

const ButtonCheck = styled.button`
    /* background-color: #8FC549 ; */
/* background-color: ${props => props.corBotao}; */
    border: none;
    border-radius: 5px;;
    height: 70px;
    width: 70px;

    ion-icon{
        color:red;
    }
`