import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GifExpertApp from './components/GifExpertApp.tsx'
import './css/style.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifExpertApp/>
  </StrictMode>
)
