import { Container } from './styles'

import { Button } from '../../components/Button' // importando o componente de button

export function Details (){

    return(
        <Container>
        <h1>Hello World!!</h1>
        <span>RocketMovie</span>

        <Button />
        </Container>
    )
}