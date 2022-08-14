import { Container } from './styles'

import { Button } from '../../components/Button' // importando o componente de button

export function Details (){

    return(
        <Container>
        <h1>Hello World!!</h1>
        <span>RocketMovie</span>

        <Button title="Teste 1" />
        <Button title="Teste 2" />
        <Button title="Teste 3" />
        </Container>
    )
}