import { Container } from './styles'
import { Star } from '../../components/Star'
import { Tag } from '../../components/Tag'

export function Note({data, ...rest}){
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            
            <header>
                <Star/>
            </header>

            <p>{data.text}</p>

            {
                data.tags &&
                
                <footer>
                {
                    data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                }
                </footer>
            }
        </Container>
    )
}