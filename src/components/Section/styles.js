import styled from "styled-components";

export const Container = styled.section`

    margin-top: 50px;
    padding-left: 123px;

     >h2 {
        font-size: 32px;
        line-height: 42px;
        font-weight: 400;
        color: ${({theme}) => theme.COLORS.WHITE};

        margin-bottom: 40px;
     }
`;