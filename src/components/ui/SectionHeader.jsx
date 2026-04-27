import { motion } from 'framer-motion'

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className = '',
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${centered ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${
            light
              ? 'text-white/80 bg-white/15'
              : 'text-sage-dark bg-sage-light/60'
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-poppins font-bold leading-tight mb-4 ${
          light ? 'text-white' : 'text-gray-800'
        }`}
        style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-warm-gray'
          }`}
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
