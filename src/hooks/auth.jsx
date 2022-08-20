// Importando do react
import { createContext, useContext, useState } from "react";

// Importando a API
import {api} from '../services/api'

// Criando um contexto com valor default um objeto vazio
export const AuthContext = createContext({});

// O children vai ser as rotas da aplicação (lá do main). é o filho do authContext
function AuthProvider({ children }){
    const [data, setData] = useState({});

    async function signIn({email, password}){

        try{
            const response = await api.post("/sessions", {email, password});

            const { user, token } = response.data;

            api.defaults.headers.common['Authorization'] = `Bear ${token}`;

            setData({user,token})

        } catch(error){
            if(error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível fazer o login")
            }
        }
    }
    return (
        <AuthContext.Provider value={{ signIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext); // atribuindo em context o uso de um contexto e definindo qual contexto


    return context
}


export { AuthProvider, useAuth }; 