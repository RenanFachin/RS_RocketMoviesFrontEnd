import { Container, Form } from './styles'
import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

import { Link } from 'react-router-dom'

export function New(){
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddTag(){
        setTags(prevState => [...prevState,newTag]);

        setNewTag("")
    }

    function handleRemoveTag(deleted){
        // Trás todas as tags menos a deletada e retorna uma novo objeto
        setTags(prevState => prevState.filter(tag => tag !==deleted));
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
                        <Input placeholder = "Título" /> 
                        <Input placeholder = "Sua nota (de 0 a 5)" />
                    </div>

                    <TextArea placeholder = "Observações" />

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
                    <Button title="Excluir filme" className="darkButton"></Button>
                    <Button title="Salvar alterações"></Button>
                    </div>
                </Form>
            </main>

        </Container>
    )
}