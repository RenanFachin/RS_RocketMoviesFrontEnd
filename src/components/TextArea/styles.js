import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 270px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_700};
    color: ${({theme}) => theme.COLORS.TEXT_INPUT};

    border: none;
    resize: none;

    margin-top: 40px;
    margin-bottom: 8px;
    border-radius: 10px;

    padding: 16px;

    &placeholder{
        color: ${({theme}) => theme.COLORS.TEXT_INPUT};
        font-size: 16px;
        line-height: 20px;
    }
`;