import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import '@fontsource/sora'; // Regular (400)
import '@fontsource/sora/600.css'; // Optional: weight
import '@fontsource/climate-crisis'; // Display font


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
