import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import AdobeProject from './AdobeProject.tsx'
import LinguisticProject from './LinguisticProject.tsx'
import ZoomProject from './ZoomProject.tsx'
import ImmigrationProject from './ImmigrationProject.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/adobe" element={<AdobeProject />} />
        <Route path="/projects/linguistic" element={<LinguisticProject />} />
        <Route path="/projects/zoom" element={<ZoomProject />} />
        <Route path="/projects/immigration" element={<ImmigrationProject />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
