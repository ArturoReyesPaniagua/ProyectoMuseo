import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Presentacion from './presentacion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Presentacion/>
  </StrictMode>,
)
