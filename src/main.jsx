import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import '@fontsource-variable/playfair-display'
import '@fontsource-variable/playfair-display/wght-italic.css'
import './index.css'
import App from './App.jsx'

// Tandai bahwa JS aktif agar animasi masuk hanya berjalan bila memungkinkan.
document.documentElement.classList.add('js-reveal')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

