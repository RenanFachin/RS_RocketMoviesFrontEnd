import { Container, Content } from './styles'


import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'

export function Home(){
    return(
        <Container>
            <Header />

            <Content>
                <div>
                    <Section title="Meus Filmes"/>
                    <Button title="Adicionar nota"></Button>
                </div>

            </Content>
        </Container>
    )
}