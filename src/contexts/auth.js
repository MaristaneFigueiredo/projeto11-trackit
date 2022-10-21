import { createContext, useState } from "react"; 

export const AuthContext  = createContext({})


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))  //dados deserializados - convertidos ao formato original
    const [loading, setLoading] = useState(0)
    const [percentageDone, setpercentageDone] = useState(localStorage.getItem('percentageDone'))

    
    return (
        <AuthContext.Provider value={{ user, setUser, loading, setLoading, percentageDone, setpercentageDone }}>
            {children}
        </AuthContext.Provider>
    )
}


