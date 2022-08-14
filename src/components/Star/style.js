import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    > svg {
        font-size: 20px;
        background: none;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;