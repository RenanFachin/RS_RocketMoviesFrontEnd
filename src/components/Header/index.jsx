import { RiShutDownLine } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { Container, Profile, Content } from './styles'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'

import { api } from '../../services/api'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

export function Header(){

    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    return(
        <Container>
            <h2>RocketMovies</h2>

            <Input 
            placeholder = "Pesquisar pelo título" 
            type = "text" 
            icon = {FiSearch} 
            />
            
            <Profile>  
                <div>
                    <strong>{user.name}</strong>
                    <button onClick={signOut}> Sair <RiShutDownLine /> </button>
                </div>  

                </Profile>
                
                <Content to="/profile">
                    <img 
                        src={avatarUrl} 
                        alt="Foto do usuário" 
                    />
                </Content>




        </Container>
    )
}