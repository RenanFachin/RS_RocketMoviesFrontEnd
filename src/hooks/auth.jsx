// Importando do react
import { createContext, useContext, useState, useEffect } from "react";

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

            localStorage.setItem("@rocketnotes:user",JSON.stringify(user))
            localStorage.setItem("@rocketnotes:token", token)

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

    function signOut (){
        // Para se fazer um logout, não precisa passar nenhum dado.
        // Apenas será necessário apagar as informações que estão no localstorage
        localStorage.removeItem("@rocketnotes:token")
        localStorage.removeItem("@rocketnotes:user")

        // Voltando ao objeto vazio, passando a ter um estado de user vazio e levando a página de login (AuthRoutes) novamente
        setData({})
    }

    async function updateProfile({ user, avatarFile }){
        try{

            if(avatarFile){
                const FileUploadForm = new FormData()
                FileUploadForm.append("avatar", avatarFile)

                const response = await api.patch("/users/avatar", FileUploadForm)
                user.avatar = response.data.avatar
            }

            await api.put("/users", user);
            // setItem faz a substituição também
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user))

            setData({user, token: data.token })
            alert("Perfil atualizado!")

        } catch(error){
            if(error.response){
                alert(error.response.data.message);
            } else{
                alert("Não foi atualizar o perfil");
            }
        }
    }

    useEffect(()=> {
        // usar exatamente a mesma chave
        const token = localStorage.getItem("@rocketnotes:token")
        const user = localStorage.getItem("@rocketnotes:user")

        // if para garantir que ambos dados tenham sido informados
        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bear ${token}`;

            setData({
                token,
                // Voltando o formato de texto para objeto do tipo json
                user: JSON.parse(user),
            });
        }

    }, [])

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            user: data.user,
            updateProfile
            }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext); // atribuindo em context o uso de um contexto e definindo qual contexto


    return context
}


export { AuthProvider, useAuth }; 