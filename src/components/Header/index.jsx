import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile } from './styles'

export function Header(){
    return(
        <Container>
            <h2>RocketMovies</h2>

            
            <Profile>  
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