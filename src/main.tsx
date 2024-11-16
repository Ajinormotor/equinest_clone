import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import 'remixicon/fonts/remixicon.css'
import { BrowserRouter } from 'react-router-dom'


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <BrowserRouter>
    <App />
    </BrowserRouter>
   
  </StrictMode>,
)