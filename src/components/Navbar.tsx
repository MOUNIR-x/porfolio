import { Container } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='flex justify-center md:justify-between'>
            <a href="#"
                className='flex items-center font-bold text-3xl md:text-xl'
            >
                <Container className='mr-2' />
                X
                <span className='text-accent'>core</span>
            </a>
            <ul
                className='hidden md:flex space-x-4'
            >
                <li>
                    <a href="#" className='btn btn-sm btn-ghost'>
                        Accueil
                    </a>
                </li>
                <li>
                    <a href="#About" className='btn btn-sm btn-ghost'>
                        A propos
                    </a>
                </li>
                <li>
                    <a href="#Experience" className='btn btn-sm btn-ghost'>
                        Mes experiences
                    </a>
                </li>
                <li>
                    <a href="#Projects" className='btn btn-sm btn-ghost'>
                        Mes projets
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar