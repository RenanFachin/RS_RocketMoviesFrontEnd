import { useState } from 'react'
import { Container, Form, Avatar } from './styles'
import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft} from 'react-icons/fi'

import {useAuth} from '../../hooks/auth' 

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { Link } from 'react-router-dom'


export function Profile(){
    const { user, updateProfile } = useAuth();
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);

    const [passwordOld,setPasswordOld] = useState();
    const [passwordNew,setPasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        };
    
        await updateProfile({ user });
    }

    return(
        <Container>
            <header>
                <FiArrowLeft />
                <Link to="/">Voltar</Link>
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
            value={name}
            onChange={e=> setName(e.target.value)}
            />

            <Input 
            placeholder = "E-mail"
            type = "text" 
            icon = {FiMail} 
            value={email}
            onChange={e=> setEmail(e.target.value)}
            />

            <Input 
            placeholder = "Senha atual"
            type = "password" 
            icon = { FiLock } 
            onChange={e=> setPasswordOld(e.target.value)}
            />   
            
            <Input 
            placeholder = "Nova senha"
            type = "password" 
            icon = { FiLock } 
            onChange={e=> setPasswordNew(e.target.value)}
            />  
        
            <Button title="Salvar" onClick={handleUpdate}/>

            </Form>

        </Container>
    )   
}