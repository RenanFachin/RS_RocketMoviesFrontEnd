import { Container } from './style'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

export function Star(){
    return(
        <Container>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiOutlineStar/>
        </Container>
    )
}