import styled from "styled-components";

export const Container = styled.form`
    height: 100vh;

    display: flex;
`;

export const Form = styled.form`
    padding: 0 134px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    text-align: left;


        > h1 {
            color: ${({theme})=> theme.COLORS.PINK};
            font-size: 48px;
            line-height: 64px;
            font-weight: 700;
        }

        > p {
            color: ${({theme})=> theme.COLORS.GRAY_100};
            font-size: 14px;
            line-height: 16px;
            font-weight: 400;
            margin-bottom: 48px;
        }

        > h2 {
            color: ${({theme})=> theme.COLORS.TEXT_NOTES};
            font-size: 24px;
            line-height: 32px;
            font-weight: 500;
            margin-bottom: 40px;
        }

    > Button:last-child {
        margin-top: 42px;
        display: flex;
        justify-content: center;
    }


`;
