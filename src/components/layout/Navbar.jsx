import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logo from '../../assets/logo.png'
import { sitePhone, sitePhoneRaw } from '../../data/content'

const navLinks = [
  { label: 'Acasă', to: '/' },
  { label: 'Principii', to: '/principii' },
  {
    label: 'Grupe',
    children: [
      { label: 'Grupa Toddler (1.3–2.6 ani)', to: '/grupa-toddler' },
      { label: 'Casa dei Bambini (2.6–6 ani)', to: '/grupa-casa-dei-bambini' },
    ],
  },
  { label: 'Galerie', to: '/galerie' },
  { label: 'Despre Noi', to: '/despre-noi' },
  { label: 'Contact', to: '/contact' },
]

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.18 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl border border-sage/20 overflow-hidden z-50"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-colors hover:bg-cream hover:text-sage-dark ${
                  isActive ? 'text-sage-dark bg-cream' : 'text-gray-700'
                }`
              }
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setDropdownOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-sage/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '72px' }}>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <motion.img
              src={logo}
              alt="Maniera Montessori"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.2 }}
              style={{ height: '52px', width: 'auto', objectFit: 'contain' }}
              className="block"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-sage-light/40 hover:text-sage-dark ${
                      dropdownOpen ? 'text-sage-dark bg-sage-light/40' : 'text-gray-700'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <DropdownMenu items={link.children} isOpen={dropdownOpen} />
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-sage-light/40 hover:text-sage-dark ${
                      isActive ? 'text-sage-dark bg-sage-light/40 font-semibold' : 'text-gray-700'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Desktop right: phone + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${sitePhoneRaw}`}
              className="flex items-center gap-1.5 text-sm font-medium text-sage-dark hover:text-sage transition-colors"
            >
              <Phone className="w-4 h-4" />
              {sitePhone}
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-sage text-white rounded-lg text-sm font-semibold hover:bg-sage-dark transition-all duration-200 hover:shadow-md"
            >
              Programează o vizită
            </Link>
          </div>

          {/* Mobile: phone icon + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${sitePhoneRaw}`}
              className="p-2 rounded-lg text-sage-dark hover:bg-sage-light/40 transition-colors"
              aria-label={`Sună la ${sitePhone}`}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-sage-light/40 transition-colors"
              aria-label="Deschide meniu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mobileOpen ? 'close' : 'open'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-sage/10 overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {/* Phone link prominently in mobile menu */}
              <a
                href={`tel:${sitePhoneRaw}`}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-sage-light/40 text-sage-dark text-sm font-semibold"
              >
                <Phone className="w-4 h-4" />
                {sitePhone}
              </a>

              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileGroupOpen(!mobileGroupOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-cream transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          mobileGroupOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileGroupOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="ml-4 mt-1 space-y-1 overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <NavLink
                              key={child.to}
                              to={child.to}
                              className={({ isActive }) =>
                                `flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                                  isActive
                                    ? 'text-sage-dark bg-sage-light/50'
                                    : 'text-gray-600 hover:bg-cream'
                                }`
                              }
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                              {child.label}
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-sage-dark bg-sage-light/50 font-semibold'
                          : 'text-gray-700 hover:bg-cream'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
              <div className="pt-3 border-t border-sage/10">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full px-5 py-3 bg-sage text-white rounded-xl text-sm font-semibold hover:bg-sage-dark transition-colors"
                >
                  Programează o vizită
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
