import { Container, Title } from "../assets/styles/GlobalStyle";
import { screenColor} from "../constants/colors";
import styled from "styled-components";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";

export default function HistoricPage() {
    return (
        <>
            <NavBar />

            <Container background={screenColor} alignH="flex-start" justV="baseline">
                <Title>Histórico</Title>
                <ParagraphH>Em breve você poderá ver o histórico dos seus hábitos aqui!</ParagraphH>
            </Container>

            <Menu />
        </>
    )
}


const ParagraphH = styled.p `
   
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;          

    margin-top: 28px;

`
