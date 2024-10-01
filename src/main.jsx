import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './providers/themeProvider.jsx'
import { ModalProvider } from './providers/ModalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ModalProvider>

        <App />
      </ModalProvider>
    </ThemeProvider>
  </StrictMode>,
)
