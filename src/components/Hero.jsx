import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16 bg-[#0a0a0f]"
    >
      <div className="text-center z-10 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-300 font-medium mb-4"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold font-['Space_Grotesk'] text-white mb-6"
        >
          M. Alvin Wijaya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl mx-auto"
        >
          Programmer & Android Developer with expertise in mobile development, UI/UX design, and web development.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-yellow-300 hover:bg-yellow-300 text-gray-900 font-medium rounded-lg transition-colors"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/20 hover:border-teal-400/50 text-white font-medium rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

