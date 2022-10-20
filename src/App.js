import {GlobalStyle} from "./assets/styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

// import { Link } from "react-router-dom";



export default function App() {
    return (

       <>
        <GlobalStyle/>
            <LoginPage/>
       </>
        
    
    
    
    
    


        // <BrowserRouter>
        //     <GlobalStyle/>
        //     <Routes>
        //         <Route>path="/" element={<LoginPage />}</Route>
        //     </Routes>
        
        // </BrowserRouter>

      
    )

}