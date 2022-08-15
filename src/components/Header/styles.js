import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
    grid-area: header;  // grid-area é uma estratégia para o header ficar fixo no topo

    height: 116px;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme})=> theme.COLORS.BACKGROUND_COLOR_800};

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 62px;

    padding: 24px 123px;

        > h2{
            color: ${({theme})=> theme.COLORS.MAIN_COLOR_TEXT_PINK};
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            letter-spacing: 1px;
        }
    
`;

export const Profile = styled(Link)`
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

            strong {
                font-size: 16px;
                font-weight: 700;
                color: ${({theme})=> theme.COLORS.TEXT_NOTES};
                text-transform: uppercase;
                display: flex;
                justify-content: flex-end;
                margin-bottom: 5px;
            }

            span {
                color: ${({theme})=> theme.COLORS.TEXT_INPUT};
                font-size: 14px;
                font-weight: 400;
                text-align: right;

                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 8px;

                > svg{
                    font-size: 16px;
                }
            }

            span:hover{
                opacity: 0.6;
            }
        }
`;