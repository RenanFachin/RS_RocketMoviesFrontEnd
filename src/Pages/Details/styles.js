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

    > div.returnButton {
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: ${({theme})=> theme.COLORS.PINK};
            margin-bottom: 24px;
            font-size: 16px;
            gap: 8px;

            > button{
                display: flex;
                align-items: center;
                gap: 8px;
                font-size: 16px;
                background: none;
                border: none;
                color: ${({theme}) => theme.COLORS.PINK};
            }

            > a {
                text-decoration: none;
                color: ${({theme})=> theme.COLORS.PINK};
            }
    }

    
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

        margin-top: 8px;
        margin-bottom: 24px;
        
        > img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        > span {
            color: ${({theme}) => theme.COLORS.GRAY_100}
        }

        > svg {
            font-size: 20px;
            color: ${({theme}) => theme.COLORS.PINK}
        }

        .publicationDateAndHour{
            display: flex;
            align-items: center;
            gap: 8px;

            >span {
                color: ${({theme}) => theme.COLORS.GRAY_100}
            }

            > svg{
                font-size: 24px;
                color: ${({theme}) => theme.COLORS.PINK}
            }
        }
    }
`;