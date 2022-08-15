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

    border-style, input, button, textarea, header, section, main, form{
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

    // Scroolbar
    ::-webkit-scrollbar{
        width: 8px;
    }

    ::-webkit-scrollbar-track{
        background: ${({ theme }) => theme.COLORS.BACKGROUND_COLOR_900};
    }

    ::-webkit-scrollbar-thumb{
        background: ${({theme}) => theme.COLORS.PINK};
        border-radius: 8px;
    }


    ::-webkit-scrollbar-thumb:hover{
        background-image: linear-gradient(#E86DC1, #FF859B);
    }


`;