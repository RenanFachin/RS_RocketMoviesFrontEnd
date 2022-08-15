import { Container, Form } from './styles'

import { FiArrowLeft } from 'react-icons/fi'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { NoteItem } from '../../components/NoteItem'
import { Section } from '../../components/Section'

export function New(){
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                    <ButtonText title="Voltar" icon={FiArrowLeft}/>

                    <h1>Novo filme</h1>  
                    </header>

                    <div  className = "titleAndRating" >
                        <Input placeholder = "Titulo" /> 
                        <Input placeholder = "Sua nota (de 0 a 5)" />
                    </div>

                    <TextArea placeholder = "Observações" />

                    <Section title="Marcadores"></Section>
                    <div className = "tags">
                            <NoteItem value="React"/>
                            <NoteItem value="" isNew />
                    </div>

                </Form>
            </main>

        </Container>
    )
}