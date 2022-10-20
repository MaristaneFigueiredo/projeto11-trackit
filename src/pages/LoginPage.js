import { Container, Entry, Botao, StyledLink, ContainerAuth } from "../assets/styles/GlobalStyle"
import Logo from "../components/Logo";
import { useState } from "react"
import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { ThreeDots } from "react-loader-spinner";


export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [disabledInput, setDisabledInput] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })


    }

    function doLogin(event) {
        setDisabledInput(true)
        setDisabledButton(true)
        event.preventDefault()


        const body = form

        axios.post(`${BASE_URL}/auth/login`, body)
            .then(
                (res) => {
                    // console.log(res.data)
                    alert("Login feito com sucesso!")


                }

            )
            .catch(
                (error) => {
                    // alert(`Erro: ${error.response.data} . Seu login não deu certo!`)
                    alert(`Seu login não deu certo! Por gentileza, verificar email e senha - Erro: ${error.message}.`)
                    setDisabledInput(false)
                    setDisabledButton(false)
                }

            )
    }
    console.log('disabledInput, disabledButton', disabledInput, disabledButton)


    return (
        <Container>
            <Logo />

            <form onSubmit={doLogin}>
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
                    <Botao data-identifier="login-btn" disabled={disabledButton} spread="303px" stature="45px" type="submit">Entrar</Botao>
                    {/* <Botao data-identifier="login-btn" disabled={disabledButton} spread="303px" stature="45px" type="submit">
                        {
                            (loading === 0) ? 'Entrar'
                                :
                                <ThreeDots
                                    height="50px"
                                    width="50px"
                                    radius="3"
                                    color="#FFFFFF"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={loading}
                                />
                        }
                    </Botao> */}
                    <StyledLink data-identifier="sign-up-action" to="/cadastro">Não possui uma conta? Cadastre-se!</StyledLink>

                </ContainerAuth>
            </form>

        </Container>



    )

}