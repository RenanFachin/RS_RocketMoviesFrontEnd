import { Container, Content } from './styles'
import { FiPlus } from 'react-icons/fi'


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
                    <Button title="Adicionar nota" icon={FiPlus}></Button>
                </div>

            </Content>
        </Container>
    )
}