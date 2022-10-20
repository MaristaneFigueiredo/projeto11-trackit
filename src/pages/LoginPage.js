

import { Container } from "../assets/styles/GlobalStyle";
import Logo from "../components/Logo";
import styled from "styled-components"
import { useState } from "react"

export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })


    }

    function doLogin(event) {
        console.log(event)
    }


    return (
        <Container>
            <Logo />

            <form onSubmit={doLogin}>
                <ContainerLogo>
                    <input
                        name="email"
                        value={form.email}
                        onChange={handleForm}
                        type="email"
                        placeholder="email"
                    />
                    <button type="submit">Entrar</button>
                </ContainerLogo>
            </form>

        </Container>



    )

}


const ContainerLogo = styled.div`
 

	/* min-height: 100vh; */
 	width: 100%;
 	padding: 31px;
  	display: flex;
    flex-direction: column;
 	justify-content: center;
    /* align-items: center; */
    



`

const Entry = styled.input`

`