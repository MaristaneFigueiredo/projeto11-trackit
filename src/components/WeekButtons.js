import styled from "styled-components"

import { useContext } from "react"
import { AuthContext } from "../contexts/auth"

export default function WeekButtons({days, setDays}) {

    const {loading} = useContext(AuthContext)

    function addDay(day) {
        // console.log('WeekButtons - entrei aqui')

        if (days.includes(day)) {
            const selectedDays = days.filter( (d) => d !== day)
            setDays(selectedDays)
        }
        else {
            const selectedDays = [...days, day]
            setDays(selectedDays)

        }

    }
    return (
        <>
            <ContainerDays>
                {  days !== undefined ? 
                                        days.includes(0) ?
                                                         <SmallButton type="button" onClick={() => addDay(0)}  buttonClicked={true} disabled={loading === 0 ? false : true}>D</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(0)}  buttonClicked={false} disabled={loading === 0 ? false : true}>D</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(0)}  buttonClicked={false} disabled={loading === 0 ? false : true}>D</SmallButton> 
                }
                {  days !== undefined ? 
                                        days.includes(1) ?
                                                         <SmallButton type="button" onClick={() => addDay(1)}  buttonClicked={true} disabled={loading === 0 ? false : true}>S</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(1)}  buttonClicked={false} disabled={loading === 0 ? false : true}>S</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(1)}  buttonClicked={false} disabled={loading === 0 ? false : true}>S</SmallButton> 
                }
                {  days !== undefined ? 
                                        days.includes(2) ?
                                                         <SmallButton type="button" onClick={() => addDay(2)}  buttonClicked={true} disabled={loading === 0 ? false : true}>T</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(2)}  buttonClicked={false} disabled={loading === 0 ? false : true}>T</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(2)}  buttonClicked={false} disabled={loading === 0 ? false : true}>T</SmallButton> 
                }
                {  days !== undefined ? 
                                        days.includes(3) ?
                                                         <SmallButton type="button" onClick={() => addDay(3)}  buttonClicked={true} disabled={loading === 0 ? false : true}>Q</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(3)}  buttonClicked={false} disabled={loading === 0 ? false : true}>Q</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(3)}  buttonClicked={false} disabled={loading === 0 ? false : true}>Q</SmallButton> 
                }
                {  days !== undefined ? 
                                        days.includes(4) ?
                                                         <SmallButton type="button" onClick={() => addDay(4)}  buttonClicked={true} disabled={loading === 0 ? false : true}>Q</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(4)}  buttonClicked={false} disabled={loading === 0 ? false : true}>Q</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(4)}  buttonClicked={false} disabled={loading === 0 ? false : true}>Q</SmallButton> 
                }
                {  days !== undefined ? 
                                        days.includes(5) ?
                                                         <SmallButton type="button" onClick={() => addDay(5)}  buttonClicked={true} disabled={loading === 0 ? false : true}>S</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(5)}  buttonClicked={false} disabled={loading === 0 ? false : true}>S</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(5)}  buttonClicked={false} disabled={loading === 0 ? false : true}>S</SmallButton> 
                }
                {  days !== undefined ? 
                                        days.includes(6) ?
                                                         <SmallButton type="button" onClick={() => addDay(6)}  buttonClicked={true} disabled={loading === 0 ? false : true}>S</SmallButton> 
                                                         : <SmallButton type="button" onClick={() => addDay(6)}  buttonClicked={false} disabled={loading === 0 ? false : true}>S</SmallButton> 
                                    : <SmallButton type="button" onClick={() => addDay(6)}  buttonClicked={false} disabled={loading === 0 ? false : true}>S</SmallButton> 
                }
            </ContainerDays>
        
        </>
    )
}




const ContainerDays = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-top: 8px;
`


const SmallButton = styled.button`
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    height: 30px;
    width: 30px;
    background-color: ${props => props.buttonClicked  ? '#D4D4D4' : '#FFF' };
    color: ${props => props.buttonClicked ? '#FFF' : '#D4D4D4' };
    font-size: 20px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;

`
