import { motion } from 'framer-motion'
import { FaAndroid, FaJava, FaReact, FaGitAlt, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa'
import { SiKotlin, SiGo, SiAndroidstudio } from 'react-icons/si'

const skills = [
  { name: 'Android', icon: FaAndroid, color: 'text-teal-400' },
  { name: 'Kotlin', icon: SiKotlin, color: 'text-purple-400' },
  { name: 'Java', icon: FaJava, color: 'text-orange-400' },
  { name: 'React', icon: FaReact, color: 'text-teal-400' },
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-400' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-400' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
  { name: 'Go', icon: SiGo, color: 'text-teal-400' },
  { name: 'Python', icon: FaPython, color: 'text-yellow-300' },
  { name: 'Figma', icon: FaFigma, color: 'text-purple-400' },
  { name: 'Android Studio', icon: SiAndroidstudio, color: 'text-teal-400' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
]

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-yellow-300 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-yellow-300/50 to-teal-500/50 p-1">
                <div className="w-full h-full rounded-2xl bg-[#0d0d12] flex items-center justify-center">
                  <span className="text-6xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              A fresh graduate in Informatics from Universitas Gunadarma (2021–2025) with hands-on experience in mobile development. Adept at problem-solving and debugging mobile code, with practical expertise in designing and developing UI/UX for Android applications.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Eager to contribute skills and experiences to collaborative working environments, fostering teamwork and knowledge sharing. Proficient in English and Bahasa Indonesia.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center gap-2 p-3 bg-[#0d0d12] rounded-lg hover:bg-[#141418] transition-colors group"
                  title={skill.name}
                >
                  <skill.icon className={`text-2xl ${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs text-gray-500 hidden sm:block">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About

