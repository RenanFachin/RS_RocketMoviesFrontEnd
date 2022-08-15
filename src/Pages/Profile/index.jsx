import { Container, Form, Avatar } from './styles'
import { FiArrowLeft } from 'react-icons/Fi'
import { FiUser, FiMail, FiLock, FiCamera} from 'react-icons/fi'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

export function Profile(){
    return(
        <Container>
            <header>
                <ButtonText title="Voltar" icon={FiArrowLeft}/>
            </header>

            <Form>
                
            <Avatar>
                <img 
                src="https://github.com/RenanFachin.png"
                alt="Foto do usuário" />

                <label htmlFor="avatar">
                    <FiCamera />

                    <input
                        id="avatar"
                        type="file"
                    />
                </label>
            </Avatar>

            <Input 
            placeholder = "Nome"
            type = "text" 
            icon = {FiUser} 
            />

            <Input 
            placeholder = "E-mail"
            type = "text" 
            icon = {FiMail} 
            />

            <Input 
            placeholder = "Senha atual"
            type = "password" 
            icon = { FiLock } 
            />   
            
            <Input 
            placeholder = "Nova senha"
            type = "password" 
            icon = { FiLock } 
            />  
        
            <Button title="Salvar" />

            </Form>

        </Container>
    )   
}