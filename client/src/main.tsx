import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './lib/i18n/i18n.ts'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
