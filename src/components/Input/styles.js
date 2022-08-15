import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_700};
    color: ${({theme}) => theme.COLORS.TEXT_INPUT};

    border-radius: 10px;
    margin-top: 8px;

    svg {
    margin-left: 12px;
    }

    > input {
        height: 56px;
        width: 100%;
        padding: 12px;
        color: ${({theme}) => theme.COLORS.TEXT_NOTES};
        background: transparent;
        border: none;

        &placeholder{
            color: ${({theme}) => theme.COLORS.TEXT_INPUT};
        }
    }
`;