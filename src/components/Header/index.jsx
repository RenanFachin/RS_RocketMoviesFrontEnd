import { RiShutDownLine } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { Container, Profile } from './styles'

import { Input } from '../../components/Input'

export function Header(){
    return(
        <Container>
            <h2>RocketMovies</h2>

            <Input 
            placeholder = "Pesquisar pelo título" 
            type = "text" 
            icon = {FiSearch} 
            />
            
            <Profile to="/profile">  
            <div>
                <strong>Renan Fachin</strong>
                <span>sair <RiShutDownLine /></span>
            </div>  

            <img 
                src="https://github.com/RenanFachin.png" 
                alt="Foto do usuário" 
            />

            </Profile>



        </Container>
    )
}