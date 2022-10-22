import { Container, Entry, Botao, StyledLink, ContainerAuth } from "../assets/styles/GlobalStyle"
import Logo from "../components/Logo";
import { useContext, useState } from "react"
import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { AuthContext } from "../contexts/auth";
import { authColor } from "../constants/colors";



export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" })
    const [disabledInput, setDisabledInput] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)
    const navigate = useNavigate()

    const { loading, setLoading } = useContext(AuthContext)
    const { user, setUser } = useContext(AuthContext)

    // console.log('M- user',user)

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })


    }

    function doLogin(event) {
        setDisabledInput(true)
        setDisabledButton(true)
        setLoading(1)
        event.preventDefault()





        const body = form

        axios.post(`${BASE_URL}/auth/login`, body)
            .then(
                (res) => {
                    // console.log(res.data)
                    alert("Login feito com sucesso!")
                    setLoading(0)
                    const usuario = {
                        name: res.data.name,
                        email: res.data.email,
                        photo: res.data.image,
                        token: res.data.token,
                    }
                    setUser(usuario)
                    localStorage.setItem('user', JSON.stringify(usuario)) //dados serializados - convertidos a string
                    // console.log('Pegando do localstorage o user',JSON.parse(localStorage.getItem('user')))
                    navigate("/hoje")
                }

            )
            .catch(
                (error) => {
                    // alert(`Erro: ${error.response.data} . Seu login não deu certo!`)
                    alert(`Seu login não deu certo! Por gentileza, verificar email e senha - Erro: ${error.message}.`)
                    setUser({})
                    localStorage.removeItem('user')
                    setDisabledInput(false)
                    setDisabledButton(false)
                    setLoading(0)
                }

            )


    }
    // console.log('disabledInput, disabledButton', disabledInput, disabledButton)



    return (
        <Container background={authColor} alignH="center" justV="center">
            {/* <Container background={authColor} alignH="center" justV="flex-end"> */}
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
                    <Botao data-identifier="login-btn" disabled={disabledButton} spread="303px" stature="45px" type="submit">
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
                    </Botao>
                    <StyledLink data-identifier="sign-up-action" to="/cadastro">Não possui uma conta? Cadastre-se!</StyledLink>

                </ContainerAuth>
            </form>

        </Container>



    )

}