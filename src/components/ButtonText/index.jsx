import { Container } from './styles'
import { FiArrowLeft } from 'react-icons/Fi'

export function ButtonText({title, ...rest}){
    return(
        <Container type="button" {...rest}>
            <FiArrowLeft />
            {title}
        </Container>
    )
}