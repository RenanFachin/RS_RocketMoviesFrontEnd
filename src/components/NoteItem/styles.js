import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    background-color: ${({ theme, isNew}) => isNew ? 'transparent' : '#262529'};
    color: ${({ theme }) => theme.COLORS.GRAY_100 };

    
    border : ${({ theme, isNew}) => isNew ? `2px dashed ${ theme.COLORS.TEXT_INPUT }` : 'none'};

    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete {
        color:  ${({ theme }) => theme.COLORS.PINK };
    }

    .button-add {
        color:  ${({ theme }) => theme.COLORS.PINK };
    }


    >input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${({ theme }) => theme.COLORS.WHITE };
        background: transparent;

        border: none;

        &::placeholder{
            ${({ theme }) => theme.COLORS.GRAY };
        }
    }

`;