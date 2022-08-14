import { Container } from './styles'

import { Button } from '../../components/Button' // importando o componente de button
import { Header } from '../../components/Header' // importando o componente de Header
import { Section } from '../../components/Section' // importando o componente de section
import { Tag } from '../../components/Tag' // importando o componente de Tag
import { ButtonText } from '../../components/ButtonText' // importando o componente de Tag


export function Details (){

    return(
        <Container>
            <Header />

            <ButtonText title="Voltar" />

            <Section title="Meus filmes">
            <Tag title="Ficção Científica" />
            <Tag title="Drama" />
            <Tag title="Drama" />
            <Tag title="Drama" />
            </Section>
            
            

            <div>
            <Button title="Adionar filme"/>
            </div>



        </Container>
    )
}