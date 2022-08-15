import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px auto; 
    grid-template-areas: 
    "header"
    "content";

    > main {
        grid-area: content;
    }

    .tags{
    display: flex;
    justify-content: left; 
    flex-wrap: wrap;
    background-color: black;
    padding: 20px;
    border-radius: 8px;
    gap:24px;
    margin-bottom: 40px;
 }

`;

export const Form = styled.form`
    max-width: 100%;
    margin: 40px 115px;

    > header{
        display: flex;
        align-items: left;
        flex-direction: column;
        margin-bottom: 40px;

        > h1 {
            color: ${({theme}) => theme.COLORS.TEXT_NOTES};
            font-size: 36px;
            line-height: 48px;
            font-weight: 500;
        }
    }
`;