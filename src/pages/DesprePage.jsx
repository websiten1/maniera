import { motion } from 'framer-motion'
import { Heart, Star, Award, Users, Leaf, ArrowRight } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { FadeInUp, AnimatedContainer, AnimatedItem } from '../components/ui/AnimatedSection'
import { teamMembers, values } from '../data/content'
import { Sun, Lightbulb, Wind } from 'lucide-react'

const valueIconMap = {
  Heart, Sun, Lightbulb, Users, Leaf, Wind, Star,
}

const milestones = [
  { year: '2019', title: 'Fondarea Grădiniței', desc: 'Elena Vasile deschide prima grupă Toddler cu 8 copii și viziunea de a aduce Montessori autentic în Iași.' },
  { year: '2020', title: 'Certificare AMI', desc: 'Grădinița primește recunoașterea AMI pentru standardele ridicate de implementare a metodei Montessori.' },
  { year: '2021', title: 'Casa dei Bambini', desc: 'Se deschide prima grupă Casa dei Bambini. Comunitatea crește la 30 de familii.' },
  { year: '2022', title: 'Extindere', desc: 'Noi spații, noi educatoare, program after-school extins până la 18:00.' },
  { year: '2024', title: '50+ Familii', desc: 'Astăzi, comunitatea noastră include peste 50 de familii fericite și 4 educatoare certificate.' },
]

export default function DesprePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #A8D5BA20 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-sage/10" />
        <div className="absolute bottom-0 -left-10 w-64 h-64 rounded-full bg-sky/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sage-dark bg-sage-light/60 px-3 py-1 rounded-full mb-4">
                Povestea Noastră
              </span>
              <h1
                className="font-poppins font-bold text-gray-800 leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Despre{' '}
                <span className="gradient-text">Grădinița Montessori</span>
                <br />Iași
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-5">
                În 2019, Elena Vasile a deschis ușile grădiniței Montessori din Iași cu
                o misiune simplă și profundă: să ofere copiilor din acest oraș o educație
                autentică, bazată pe respectul față de natura lor unică.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                De la primele 8 copii din grupa Toddler, am crescut organic, construind
                o comunitate în care copiii, educatoarele și familiile se cunosc cu adevărat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Astăzi, peste 50 de familii fac parte din povestea noastră, și fiecare
                an aduce noi descoperiri, noi bucurii și noi dovezi că metoda Montessori
                funcționează cu adevărat.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://picsum.photos/seed/despre-noi/640/520"
                    alt="Grădinița Montessori Iași"
                    className="w-full object-cover"
                    style={{ height: '420px' }}
                  />
                </div>
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 3.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5"
                >
                  <div className="font-poppins font-bold text-2xl text-sage-dark">2019</div>
                  <div className="text-sm text-warm-gray">Fondată în Iași</div>
                </motion.div>
                <motion.div
                  animate={{ y: [3, -3, 3] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-6 -right-6 bg-sage-light rounded-2xl shadow-xl p-4 text-center"
                >
                  <div className="font-poppins font-bold text-xl text-sage-dark">AMI</div>
                  <div className="text-xs text-warm-gray">Certificare oficială</div>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInUp>
              <div className="bg-sage-light/30 rounded-3xl p-8 border border-sage/20 h-full">
                <div className="w-12 h-12 rounded-xl bg-sage flex items-center justify-center mb-5">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
                  Misiunea Noastră
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Să oferim fiecărui copil un mediu pregătit, cald și autentic Montessori,
                  în care să se poată dezvolta ca ființă umană completă — cu respect față
                  de sine, față de ceilalți și față de lumea înconjurătoare.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Credem că educația nu înseamnă umplerea unui vas, ci aprinderea unui
                  foc. Misiunea noastră este să alimentăm curiozitatea naturală a fiecărui
                  copil și să o transformăm în dragoste pentru viață și pentru învățare.
                </p>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <div className="bg-sky-light/30 rounded-3xl p-8 border border-sky/20 h-full">
                <div className="w-12 h-12 rounded-xl bg-sky flex items-center justify-center mb-5">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
                  Viziunea Noastră
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Să devenim comunitatea de referință pentru educația Montessori autentică
                  din Moldova și să demonstrăm că un copil fericit, independent și
                  respectat este cel mai bun fundament pentru o societate sănătoasă.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Visăm o lume în care educația pentru viață înlocuiește educația
                  pentru note — și contribuim la această lume, un copil la un moment dat.
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Povestea noastră"
            title="Câțiva ani de Montessori autentic"
            subtitle="Fiecare an a adus noi copii, noi descoperiri și o comunitate din ce în ce mai puternică."
          />

          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage via-sky to-sage" />
            <div className="space-y-3">
              {milestones.map((m, idx) => (
                <FadeInUp key={m.year} delay={idx * 0.08}>
                  <div className="flex gap-4 pl-14 relative">
                    <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-2 border-sage/30 flex items-center justify-center shadow-sm">
                      <span className="text-sage-dark font-bold text-xs">{m.year.slice(2)}</span>
                    </div>
                    <div className={`flex-1 rounded-2xl p-5 mb-2 ${idx % 2 === 0 ? 'bg-white' : 'bg-cream-dark/50'}`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-bold text-sage-dark bg-sage-light/60 px-2 py-0.5 rounded-full">
                          {m.year}
                        </span>
                        <span className="font-poppins font-semibold text-gray-800">{m.title}</span>
                      </div>
                      <p className="text-warm-gray text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Echipa Noastră"
            title="Educatoare cu vocație"
            subtitle="Oamenii din spatele magiei. Fiecare educatoare aduce certificare Montessori, pasiune autentică și dragoste sinceră pentru copii."
          />

          <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member) => (
              <AnimatedItem key={member.name}>
                <motion.div
                  whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-default"
                >
                  {/* Avatar */}
                  <div className={`${member.color} h-36 flex items-center justify-center`}>
                    <div className="w-20 h-20 rounded-full bg-white/60 flex items-center justify-center font-poppins font-bold text-2xl text-sage-dark shadow-sm">
                      {member.avatar}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-poppins font-semibold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-sage-dark text-sm font-medium mb-1">{member.role}</p>
                    <p className="text-xs text-warm-gray mb-3">{member.qualification}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Valorile Noastre"
            title="Ce ne ghidează în fiecare zi"
          />

          <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-12">
            {values.map((v) => {
              const Icon = valueIconMap[v.icon] || Heart
              return (
                <AnimatedItem key={v.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-2xl p-5 text-center shadow-sm border border-sage/10 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage-light mx-auto flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-sage-dark" />
                    </div>
                    <div className="font-poppins font-semibold text-sm text-gray-800">{v.title}</div>
                  </motion.div>
                </AnimatedItem>
              )
            })}
          </AnimatedContainer>
        </div>
      </section>

      {/* Awards / Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            eyebrow="Recunoaștere"
            title="Certificate și afilieri"
            subtitle="Calitatea nu se declară — se certifică."
          />
          <AnimatedContainer className="flex flex-wrap justify-center gap-4 mt-10">
            {[
              { label: 'AMI', sublabel: 'Association Montessori Internationale', color: 'bg-sage-light' },
              { label: 'AMS', sublabel: 'American Montessori Society', color: 'bg-sky-light' },
              { label: 'MENCȘ', sublabel: 'Acreditată de Ministerul Educației', color: 'bg-amber-100' },
            ].map((cert) => (
              <AnimatedItem key={cert.label}>
                <div className={`${cert.color} rounded-2xl px-8 py-6 text-center`}>
                  <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-sage-dark" />
                  </div>
                  <div className="font-poppins font-bold text-xl text-gray-800">{cert.label}</div>
                  <div className="text-xs text-warm-gray mt-1 max-w-[140px]">{cert.sublabel}</div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff15 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-poppins font-bold text-white text-3xl mb-5">
              Hai să ne cunoaștem
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Fiecare familie care intră pe ușile noastre devine parte din comunitate.
              Suntem bucuroși să te primim și să îți arătăm ce înseamnă Montessori în viața reală.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="white" size="lg">
                Contactează-ne
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/galerie" size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10">
                Galerie foto
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </motion.div>
  )
}
