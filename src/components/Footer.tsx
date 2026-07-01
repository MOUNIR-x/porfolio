import { Code2, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 pt-12 pb-8 mt-16 md:mt-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
        
        {/* Brand/Name info */}
        <div className="flex flex-col justify-center md:items-start items-center space-y-3">
          <div className="flex items-center font-bold text-xl">
            <Code2 className="mr-2 text-primary w-5 h-5" />
            <span className="text-white">P. Abu</span>
            <span className="text-primary ml-1">Mounir</span>
          </div>
          <p className="text-sm text-gray-400 max-w-xs">
            Développeur Fullstack Junior passionné par le développement d'applications performantes et la cybersécurité.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center justify-center md:items-start space-y-2">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">Contact</h4>
          <a href="mailto:pam20072007@gmail.com" className="flex items-center text-sm text-gray-400 hover:text-primary transition-colors">
            <Mail className="w-4 h-4 mr-2" />
            pam20072007@gmail.com
          </a>
          <a href="tel:+237656152872" className="flex items-center text-sm text-gray-400 hover:text-primary transition-colors">
            <Phone className="w-4 h-4 mr-2" />
            +237 656152872
          </a>
          <div className="flex items-center text-sm text-gray-400">
            <MapPin className="w-4 h-4 mr-2" />
            Douala - Bonabéri, Cameroun
          </div>
        </div>

        {/* Social / Networks */}
        <div className="flex flex-col items-center justify-center md:items-start space-y-4">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Réseaux</h4>
          <div className="flex space-x-3">
            <a 
              href="https://github.com/MOUNIR-x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-primary hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center"
              title="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              href="https://linkedin.com/in/mounir-abu-70aa78355" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 bg-white/5 hover:bg-primary hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center"
              title="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>
        
      </div>
      
      <div className="text-center pt-8 border-t border-white/5 text-xs text-gray-500">
        <p>© {currentYear} Poutougnigni Abu Mounir. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer