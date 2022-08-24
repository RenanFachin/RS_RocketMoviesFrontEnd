import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid; // deixando fixo o header
    grid-template-rows: 116px auto; // definindo a altura do header e do restante da página
    grid-template-areas: 
    "header"
    "content"; // Definindo o que é o que dentro do grid criado

    >header{
        grid-area: header;
        height: 116px;
        width: 100%;

        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_COLOR_800};

        display: flex;
        justify-content: space-between;
        align-items: center;
        /* gap: 62px; */

        padding: 24px 123px;

        > h2{
            color: ${({theme})=> theme.COLORS.MAIN_COLOR_TEXT_PINK};
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 1px;
            margin-right: 62px;
        }

        .UserInfos{
            display: flex;
            align-items: center;
        }
    }

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

export const Profile = styled.div`
    display: flex;
    align-items: center;

        > img {
            width: 72px;
            height: 72px;
            border-radius: 50%;
        }

        > div {
            width: 200px;

            margin-right: 20px;
            line-height: 18px;
            display: flex;
            justify-content: flex-end;
            flex-direction: column;

            strong {
                font-size: 16px;
                font-weight: 700;
                color: ${({theme})=> theme.COLORS.TEXT_NOTES};
                text-transform: uppercase;
                display: flex;
                justify-content: flex-end;
                margin-bottom: 5px;
            }

            button {
                background: transparent;
                border: none;
                color: ${({theme})=> theme.COLORS.TEXT_INPUT};
                font-size: 14px;
                font-weight: 400;


                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;

                > svg{
                    font-size: 18px;
                }
            }

            button:hover{
                opacity: 0.6;
            }
        }
`;


export const UsersInfo = styled(Link)`
    display: flex;
    align-items: center;

        > img {
            width: 72px;
            height: 72px;
            border-radius: 50%;
        }
`