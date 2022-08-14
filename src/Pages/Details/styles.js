import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;


    display: grid; // deixando fixo o header
    grid-template-rows: 116px auto; // definindo a altura do header e do restante da página
    grid-template-areas: 
    "header"
    "content"; // Definindo o que é o que dentro do grid criado
`;