import { Link } from 'react-router-dom'
import { Leaf, MapPin, Phone, Mail, Clock } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons'

const footerLinks = [
  {
    title: 'Navigare',
    links: [
      { label: 'Acasă', to: '/' },
      { label: 'Principii Montessori', to: '/principii' },
      { label: 'Grupa Toddler', to: '/grupa-toddler' },
      { label: 'Casa dei Bambini', to: '/grupa-casa-dei-bambini' },
      { label: 'Galerie', to: '/galerie' },
      { label: 'Despre Noi', to: '/despre-noi' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-5">
              <div className="w-9 h-9 rounded-xl bg-sage flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <div className="font-poppins font-bold text-white text-base leading-none">
                  Montessori
                </div>
                <div className="text-xs text-sage font-medium tracking-wide">
                  Iași
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Educație autentică Montessori pentru copiii tăi. Construim viitorul
              prin respectarea naturii unice a fiecărui copil.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sage transition-colors duration-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-sage transition-colors duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Navigare</h3>
            <ul className="space-y-2.5">
              {footerLinks[0].links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 text-sm hover:text-sage transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Strada Aeroportului 1<br />
                  Iași 700384, România
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sage flex-shrink-0" />
                <a
                  href="tel:+40000000000"
                  className="text-gray-400 text-sm hover:text-sage transition-colors"
                >
                  +40 000 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sage flex-shrink-0" />
                <a
                  href="mailto:contact@montessori-iasi.ro"
                  className="text-gray-400 text-sm hover:text-sage transition-colors"
                >
                  contact@montessori-iasi.ro
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-sage mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Luni – Vineri<br />
                  08:00 – 18:00
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="font-poppins font-semibold text-white mb-3">Vino să ne cunoști</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Programează o vizită gratuită și descoperă de ce suntem alegerea familiilor
              din Iași pentru educația Montessori.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center w-full px-5 py-3 bg-sage text-white rounded-xl text-sm font-semibold hover:bg-sage-dark transition-all duration-200 hover:shadow-lg"
            >
              Programează o vizită
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Grădinița Montessori Iași. Toate drepturile rezervate.
          </p>
          <p className="text-gray-600 text-xs">
            Educație autentică Montessori din{' '}
            <span className="text-sage">♥</span>{' '}Iași
          </p>
        </div>
      </div>
    </footer>
  )
}
