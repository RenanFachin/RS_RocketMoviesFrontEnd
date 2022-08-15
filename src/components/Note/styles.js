import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: rgba(255, 133, 155, 0.05);

    border: none;
    border-radius: 16px;
    padding: 32px;

    margin-bottom: 32px;

        > h1 {
            flex: 1;
            text-align: left;
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: ${({theme}) => theme.COLORS.TEXT_NOTES};
            margin-bottom: 8px;
        }

        > p {
            margin-top: 15px;
            text-align: justify;
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 20px;
            font-weight: 400;
            color: ${({theme}) => theme.COLORS.GRAY};
        }

        > footer {
            width: 100%;
            display: flex;
            margin-top: 20px;
        }
`;
