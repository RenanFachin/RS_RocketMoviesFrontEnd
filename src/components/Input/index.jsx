import { Container } from './style'

export function Input({icon:Icon, ...rest}){
    return(
        <Container>
            <input {...rest} />
        </Container>
    )
}