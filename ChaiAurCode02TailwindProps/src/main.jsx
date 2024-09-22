import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Card from './components/card.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* seprate each import with a horizontal rule == <hr /> */}
    
    {/* <App/> */}
    <Card/>
  </StrictMode>,
)
