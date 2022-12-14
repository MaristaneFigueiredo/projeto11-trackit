import { Container, Entry, Botao, StyledLink, ContainerAuth } from "../assets/styles/GlobalStyle"
import Logo from "../components/Logo";
import { useContext, useState } from "react"
import axios from "axios";
import { BASE_URL } from "../constants/urls"
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner"
import { AuthContext } from "../contexts/auth";
import { authColor } from "../constants/colors";



export default function SingUpPage() {
    const [form, setForm] = useState({ email: "", name:"",  image: "", password: ""})
    const [disabledInput, setDisabledInput] = useState(false)
    const [disabledButton, setDisabledButton] = useState(false)
    const {loading, setLoading} = useContext(AuthContext)
    const navigate = useNavigate()

    function handleForm(e) {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    function doSignUP(event) {
        setDisabledInput(true)
        setDisabledButton(true)
        setLoading(1)
        event.preventDefault()

        const body = form

        axios.post(`${BASE_URL}/auth/sign-up`,body)        
            .then(
                (res) => {
                    // console.log(res.data)
                    alert("Cadastro feito com sucesso!")
                    setLoading(0)
                    navigate("/")
                    
                    
                }

            )
            .catch( 
                (error) => {
                    // console.log('error', error)
                    alert(`Seu Cadastro não deu certo! - Erro: ${error.message}.`)
                    setDisabledInput(false)
                    setDisabledButton(false)
                    setLoading(0)
                }

            )
    }    

    return(
        <Container background={authColor} alignH="center" justV="center">
        <Logo />

        <form onSubmit={doSignUP}>
            <ContainerAuth>
                <Entry spread="303px"
                    data-identifier="input-email"
                    disabled={disabledInput}
                    name="email"
                    value={form.email}
                    onChange={handleForm}
                    type="email"
                    placeholder="email"
                    required
                />
                <Entry spread="303px"
                    data-identifier="input-password"
                    disabled={disabledInput}
                    name="password"
                    value={form.password}
                    onChange={handleForm}
                    type="password"
                    placeholder="senha"
                    required
                />
                <Entry spread="303px"
                    data-identifier="input-name"
                    disabled={disabledInput}
                    name="name"
                    value={form.name}
                    onChange={handleForm}
                    type="text"
                    placeholder="nome"
                    required
                />
                <Entry spread="303px"
                    data-identifier="input-photo"
                    disabled={disabledInput}
                    name="image"
                    value={form.image}
                    onChange={handleForm}
                    type="text"
                    placeholder="foto"
                    required
                />
                
                <Botao disabled={disabledButton} spread="303px" stature="45px" size="20.976px" type="submit">
                {
                            (loading === 0) ? 'Cadastrar'
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
                <StyledLink data-identifier="back-to-login-action" to="/">Já tem uma conta? Faça login!</StyledLink>
               
            </ContainerAuth>
        </form>

    </Container>
    )
}

