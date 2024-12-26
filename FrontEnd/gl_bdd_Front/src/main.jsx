import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LandingApp from './Landing/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingApp />
  </StrictMode>,
)
