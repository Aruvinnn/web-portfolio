import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiSend } from 'react-icons/fi'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socialLinks = [
  { name: 'GitHub', icon: FaGithub, href: 'https://github.com/Aruvinnn' },
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://www.linkedin.com/in/m-alvin-wijaya' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/vinn.wijaya' },
]

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! (Demo only)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-yellow-300 mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                  <FiMail className="text-teal-400 text-xl" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:aruvinnwijaya@gmail.com" className="text-white hover:text-teal-400 transition-colors">
                    aruvinnwijaya@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm text-gray-500 mb-4">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#0d0d12] rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-500/10 transition-all"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full px-4 py-3 bg-[#0d0d12] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-teal-500/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-yellow-300 hover:bg-yellow-300 text-gray-900 font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <FiSend />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

