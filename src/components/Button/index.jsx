import { Container } from './styles'

// Fazendo o botão aceitar propriedades (props)
// Para fazer ser mostrado o title definido para cada elemento precisamos utilizar props.title
// Porém, para funcionar, precisa estar entre as {}
// Também é possível desestruturar props, passando Button({title}) como argumento e depois {title} no escopo

// a prop.loading é para desabilitar o botão e evitar que o usuário fique clicando e chamando
// loading = false é o valor padrão, caso não seja informado como propriedade 

// ...rest é para não ficar falando todas as propriedades que o botão possui
export function Button({title, loading = false, ...rest}){
    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {loading ? 'Carregando...' : title}
        </Container>
    )
}