import { Container } from './styles'

// O children é utilizado para não deixar claro o que fará parte da section
export function Section({title, children}){
    return(
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}