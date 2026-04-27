import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-sage-dark focus-visible:ring-offset-2 cursor-pointer select-none'

  const variants = {
    primary: 'bg-sage text-white hover:bg-sage-dark shadow-sm hover:shadow-md',
    secondary: 'bg-transparent border-2 border-sage-dark text-sage-dark hover:bg-sage hover:text-white hover:border-sage',
    white: 'bg-white text-sage-dark hover:bg-cream shadow-sm hover:shadow-md',
    ghost: 'bg-transparent text-sage-dark hover:bg-sage-light',
    dark: 'bg-sage-dark text-white hover:bg-sage-dark/90 shadow-sm hover:shadow-md',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.15 },
  }

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {children}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  )
}
