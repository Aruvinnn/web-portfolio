function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5 bg-[#08080c]">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} M. Alvin Wijaya. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}

export default Footer

