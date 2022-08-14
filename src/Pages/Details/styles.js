import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid; // deixando fixo o header
    grid-template-rows: 116px auto; // definindo a altura do header e do restante da página
    grid-template-areas: 
    "header"
    "content"; // Definindo o que é o que dentro do grid criado

        > main {

            grid-area: content;
            overflow-y: auto;
            padding: 40px 123px;


            p {
                text-align: justify;
                line-height: 21px;
                font-weight: 400;
                color: ${({theme})=> theme.COLORS.TEXT_NOTES}
            }
        }


`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;

    overflow-y: auto;
    
    > div {
        display: flex;
        gap: 20px;
        align-items: center;

        h1 {
            font-size: 36px;
            line-height: 47px;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.TEXT_NOTES};
            font-family: 'Roboto', sans-serif;
        }
    }

    .publicationStats {
        font-family: 'Roboto', sans-serif;

        display: flex;
        gap: 8px;

        margin-top: 24px;
        margin-bottom: 40px;
        
        > img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }

        > svg {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.PINK}
        }
    }
`;