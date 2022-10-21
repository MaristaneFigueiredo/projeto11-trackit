import { GlobalStyle } from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";


// import { Link } from "react-router-dom";
import SingUpPage from "./pages/SignUpPage";
import TodayPage from "./pages/TodayPage";
import { AuthProvider } from "./contexts/auth";
import HabitsPage from "./pages/HabitsPage";
import HistoricPage from "./pages/HistoricPage";



export default function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <GlobalStyle />

                <Routes>
                    <Route exact path="/" element={<LoginPage />} />
                    <Route path="/cadastro" element={<SingUpPage />} />
                    <Route path="/hoje" element={<TodayPage />} />
                    <Route path="/habitos" element={<HabitsPage />} />
                    <Route path="/historico" element={<HistoricPage />} />
                </Routes>

            </BrowserRouter>
        </AuthProvider>


    )

}