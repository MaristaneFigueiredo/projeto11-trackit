import {GlobalStyle} from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

import { Link } from "react-router-dom";
import SingUpPage from "./pages/SignUpPage";



export default function App() {
    return (
        
        <BrowserRouter>
            <GlobalStyle/>

            <Routes>                
                <Route path="/" element={<LoginPage/>} />                 
                <Route path="/cadastro" element={<SingUpPage/>} /> 
            </Routes>
        
        </BrowserRouter>

      
    )

}