import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router";
import './index.css'
// import App from './App.tsx'
import Map from './pages/map/Map.tsx'
import Dbrad from './pages/dbrad/Dbrad.tsx'
import DbradMap from './pages/dbrad-map/DbradMap.tsx'
import DbradSchool from './pages/dbrad-schools/Dbradschool.tsx'
import DbradSchoolCards from './pages/dbrad-school-cards/DbradSchoolCards.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dbrad/>}/>
                <Route path="map" element={<Map/>}/>
                <Route path="rad" element={<Dbrad/>}/>
                <Route path="rad-map" element={<DbradMap/>}/>
                <Route path="rad-school" element={<DbradSchool/>}/>
                <Route path="rad-school-cards" element={<DbradSchoolCards/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
