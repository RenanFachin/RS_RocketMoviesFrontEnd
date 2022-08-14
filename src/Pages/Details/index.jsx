import { Container } from './styles'

import { Button } from '../../components/Button' // importando o componente de button
import { Header } from '../../components/Header' // importando o componente de Header
import { Section } from '../../components/Section' // importando o componente de section

export function Details (){

    return(
        <Container>
            <Header />

            <Section title="Meus filmes">
            </Section>


        </Container>
    )
}