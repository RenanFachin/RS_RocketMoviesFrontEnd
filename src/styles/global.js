import { createGlobalStyle } from "styled-components"; // Dependência do styled component


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        // Desestruturação para buscar a propriedade COLORS com valor BACKGROUND_900 de dentro de theme
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_900};
        color: ${({ theme }) => theme.COLORS.WHITE};
    }

    border-style, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        filter: brightness(0.9)
    }
`;