import { Code2 } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='flex flex-col sm:flex-row justify-between items-center py-6 border-b border-white/10 animate-fade-in'>
            <a href="#"
                className='flex items-center font-bold text-2xl tracking-wide group transition-all duration-300 hover:opacity-90'
            >
                <Code2 className='mr-2 text-primary w-6 h-6 transition-transform duration-300 group-hover:rotate-12' />
                <span className='text-white'>X.</span>
                <span className='text-primary ml-1'>core</span>
            </a>
            <ul
                className='flex items-center space-x-1 sm:space-x-4 mt-4 sm:mt-0 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md'
            >
                <li>
                    <a href="#" className='btn btn-sm btn-ghost rounded-full text-sm font-medium hover:text-primary transition-all duration-300'>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About" className='btn btn-sm btn-ghost rounded-full text-sm font-medium hover:text-primary transition-all duration-300'>
                        À propos
                    </a>
                </li>
                <li>
                    <a href="#Experience" className='btn btn-sm btn-ghost rounded-full text-sm font-medium hover:text-primary transition-all duration-300'>
                        Expériences
                    </a>
                </li>
                <li>
                    <a href="#Projects" className='btn btn-sm btn-ghost rounded-full text-sm font-medium hover:text-primary transition-all duration-300'>
                        Projets
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar