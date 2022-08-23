import { Container, Form } from './styles'
import { FiArrowLeft } from 'react-icons/fi'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

import { useState } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'

export function New(){
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[rating,setRating] = useState("")

    const navigate = useNavigate()

    function handleAddTag(){
        setTags(prevState => [...prevState,newTag]);

        setNewTag("")
    }

    function handleRemoveTag(deleted){
        // Trás todas as tags menos a deletada e retorna uma novo objeto
        setTags(prevState => prevState.filter(tag => tag !==deleted));
    }

    async function handleNewNote(){
        await api.post("/notes", {
            title,
            description,
            rating,
            tags
        })

        alert("Nota cadastrada com sucesso!!")
        navigate("/")
    }

    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <div>
                            <FiArrowLeft />
                            <Link to="/">Voltar</Link>
                        </div>

                    {/* <ButtonText title="Voltar" icon={FiArrowLeft}/> */}
                    <h1>Novo filme</h1>  
                    </header>

                    <div  className = "titleAndRating" >
                        <Input 
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                        /> 

                        <Input 
                        placeholder = "Sua nota (de 0 a 5)" 
                        onChange={e => setRating(e.target.value)}
                        />
                    </div>

                    
                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Marcadores">
                    <div className = "tags">

                        {
                            tags.map((tag,index) => (
                                <NoteItem
                                key={String(index)}
                                value={tag}
                                onClick={()=>{handleRemoveTag(tag)}}
                                />
                            ))                            
                        }

                    <NoteItem 
                    placeholder="Novo marcador" 
                    isNew 
                    onChange= {e => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                    />

                    </div>
                    </Section>
                    
                    <div className="buttonsLine">

                    <Button 
                    title="Excluir filme" 
                    className="darkButton"
                    />

                    <Button 
                    title="Salvar alterações"
                    onClick={handleNewNote}
                    />

                    </div>
                </Form>
            </main>

        </Container>
    )
}