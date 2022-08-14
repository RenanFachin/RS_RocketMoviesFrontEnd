import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.PINK};
    color: ${({theme}) => theme.COLORS.TEXT_BUTTON};

    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;


    font-weight: 500;

    &:disabled{
        opacity: 0.5;
    }

    > svg{
    }
`; 