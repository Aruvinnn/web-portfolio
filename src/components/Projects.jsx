import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Kanim Cilegon Website',
    description: 'Contributed to a government agency website with front-end and back-end development. Built UI using HTML, CSS, and JavaScript with interactive elements.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🏛️',
    github: null,
    live: null,
  },
  {
    title: 'Mona - Money Management App',
    description: 'A collaborative money management mobile app from Bangkit Capstone. Designed UI in Figma and implemented in Android Studio using XML.',
    tech: ['Android', 'Kotlin', 'Figma', 'XML'],
    emoji: '💰',
    github: 'https://github.com/HafizWayne/MonaProject',
    live: null,
  },
  {
    title: 'Bersujud - Prayer Schedule App',
    description: 'Independent prayer schedule application using Bimas Islam Kemenag API. Features nearby mosque location finder based on user location.',
    tech: ['Android', 'Kotlin', 'REST API'],
    emoji: '🕌',
    github: 'https://github.com/Aruvinnn/Bersujud',
    live: null,
  },
  {
    title: '#KaburAjaDulu Sentiment Analysis',
    description: 'AI-based sentiment analysis using IndoBERTweet model. Data collected via web crawling from X platform with interactive React dashboard.',
    tech: ['Python', 'IndoBERTweet', 'Golang', 'React'],
    emoji: '🤖',
    github: 'https://github.com/Aruvinnn/Sentiment-Analysis-KaburAjaDulu',
    live: null,
  },
]

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#08080c]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white mb-4">
            Project Experience
          </h2>
          <div className="w-20 h-1 bg-yellow-300 mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            A collection of projects showcasing my experience in mobile development, web development, and machine learning.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

