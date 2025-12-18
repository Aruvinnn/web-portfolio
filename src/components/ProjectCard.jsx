import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-[#0d0d12] rounded-xl overflow-hidden border border-white/5 hover:border-teal-500/30 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Project Image */}
      <div className="h-48 bg-[#0a0a0f] flex items-center justify-center">
        <span className="text-4xl">{project.emoji}</span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-2 group-hover:text-teal-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FiGithub size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-300 transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard

