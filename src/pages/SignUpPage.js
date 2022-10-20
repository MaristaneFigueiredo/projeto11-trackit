import { Container, Entry, Botao, StyledLink, ContainerAuth } from "../assets/styles/GlobalStyle"
import Logo from "../components/Logo";
import { useState } from "react"
import axios from "axios";
import { BASE_URL } from "../constants/urls"


export default function SingUpPage() {
    const [form, setForm] = useState({ email: "", name:"",  image: "", password: ""})
    const [disabledInput, setDisabledInput] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function doSignUP(event) {
        setDisabledInput(true)
        setDisabledButton(true)
        event.preventDefault()

        const body = form

        axios.post(`${BASE_URL}/auth/sign-up`,body)        
            .then(
                (res) => {
                    // console.log(res.data)
                    alert("Cadastro feito com sucesso!")
                    
                    
                }

            )
            .catch( 
                (error) => {
                    // console.log('error', error)
                    alert(`Seu Cadastro não deu certo! - Erro: ${error.message}.`)
                    setDisabledInput(false)
                    setDisabledButton(false)
                }

            )
    }    

    return(
        <Container>
        <Logo />

        <form onSubmit={doSignUP}>
            <ContainerAuth>
                <Entry
                    data-identifier="input-email"
                    disabled={disabledInput}
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="email"
                    placeholder="email"
                    required
                />
                <Entry
                    data-identifier="input-password"
                    disabled={disabledInput}
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="password"
                    placeholder="senha"
                    required
                />
                <Entry
                    data-identifier="input-name"
                    disabled={disabledInput}
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="nome"
                    required
                />
                <Entry
                    data-identifier="input-photo"
                    disabled={disabledInput}
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                    type="text"
                    placeholder="foto"
                    required
                />
                <Botao disabled={disabledButton} spread="303px" stature="45px" type="submit">Cadastrar</Botao>
                <StyledLink data-identifier="back-to-login-action" to="/">Já tem uma conta? Faça login!</StyledLink>
               
            </ContainerAuth>
        </form>

    </Container>
    )
}

