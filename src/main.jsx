import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components' // themeprovider é uma dependência do styled components


import theme from './styles/theme'// Importação dos temas que serão aplicados à página
import GlobalStyle from './styles/global' // Importação do arquivo de definições globais da página
import { Details } from './Pages/Details' // Página que será renderizada

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Details />
    </ThemeProvider>
  </React.StrictMode>
)
