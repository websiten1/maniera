import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import DemoModal from './components/DemoModal'
import HomePage from './pages/HomePage'
import PrincipiiPage from './pages/PrincipiiPage'
import ToddlerPage from './pages/ToddlerPage'
import CasaDeiBambiniPage from './pages/CasaDeiBambiniPage'
import GaleriePage from './pages/GaleriePage'
import ContactPage from './pages/ContactPage'
import DesprePage from './pages/DesprePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function AppRoutes() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/principii" element={<PrincipiiPage />} />
            <Route path="/grupa-toddler" element={<ToddlerPage />} />
            <Route path="/grupa-casa-dei-bambini" element={<CasaDeiBambiniPage />} />
            <Route path="/galerie" element={<GaleriePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/despre-noi" element={<DesprePage />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <DemoModal />
      <AppRoutes />
    </BrowserRouter>
  )
}
