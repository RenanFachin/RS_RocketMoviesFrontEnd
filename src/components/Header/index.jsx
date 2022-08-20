import { RiShutDownLine } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { Container, Profile, Content } from './styles'

import { useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'

export function Header(){
    const { signOut } = useAuth();
    
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
                    <strong>Renan Fachin</strong>
                    <button onClick={signOut}> Sair <RiShutDownLine /> </button>
                </div>  

                </Profile>
                
                <Content to="/profile">
                    <img 
                        src="https://github.com/RenanFachin.png" 
                        alt="Foto do usuário" 
                    />
                </Content>




        </Container>
    )
}