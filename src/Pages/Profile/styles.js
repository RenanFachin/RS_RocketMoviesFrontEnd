import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > header {
        width: 100%;
        height: 144px;
        background: rgba(255, 133, 155, 0.05);
        display: flex;
        align-items: center;
        padding: 64px 0 59px 144px;
        color: ${({theme})=> theme.COLORS.PINK};
        font-size: 16px;
        gap: 8px;
        
        > button{
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 17px;
            border: none;
            background: none;
            text-decoration: none;
            color: ${({theme})=> theme.COLORS.PINK};
        }

        svg {
            color: ${({theme})=> theme.COLORS.PINK};
            font-size: 16px;
        }
    }
`;

export const Form = styled.form`
    max-width: 340px;
    margin: -84px auto;

        > div:nth-child(4){
            margin-top: 30px;
        }


`;

export const Avatar = styled.div`
    position: relative;
    margin: 0 auto 32px;

    width: 186px;
    height: 186px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        background-color: ${({theme})=> theme.COLORS.PINK};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        cursor: pointer;

        > input {
            display: none;
        }

        > svg {
            width: 20px;
            height: 20px;
            color: ${({theme})=> theme.COLORS.BACKGROUND_COLOR_TAGS};
        }
    }
`;