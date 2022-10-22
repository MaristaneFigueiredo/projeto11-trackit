import styled from "styled-components"
import HabitsPage from "../pages/HabitsPage/HabitsPage";


export default function Phrase({show}){
    return (
           <Paragraph exibir={show}>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Paragraph>
        
    );
}




const Paragraph = styled.p `
   
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
    display:${(props) => props.exibir === true ? "display" : "none"};           

    margin-top: 28px;

`
