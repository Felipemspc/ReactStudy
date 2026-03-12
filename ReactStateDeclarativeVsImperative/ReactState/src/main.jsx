import { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = reactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
