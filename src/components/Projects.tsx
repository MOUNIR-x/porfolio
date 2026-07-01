import Title from './Title'
import img1 from '../assets/projects/1.png'
import img2 from '../assets/projects/2.png'
import img3 from '../assets/projects/3.png'
import img4 from '../assets/projects/4.png'
import { ExternalLink } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: "Officeflow",
        description: "Solution web intégrée conçue pour OKFOODS CAMEROUN permettant la gestion complète du parc informatique et le suivi en temps réel des demandes d'assistance des utilisateurs.",
        technologies: ['Next.js', 'React', 'Node.js', 'Tailwind', 'Prisma', 'PostgreSQL'],
        demoLink: '#',
        repoLink: 'https://github.com/MOUNIR-x',
        image: img1,
    },
    {
        id: 2,
        title: "MADE IN CAMEROUN",
        description: "Plateforme dynamique de vente de produits locaux camerounais. Conçue pour promouvoir le savoir-faire local et faciliter la mise en relation directe entre producteurs locaux et acheteurs.",
        technologies: ['React', 'Node.js', 'Tailwind CSS', 'MySQL'],
        demoLink: '#',
        repoLink: 'https://github.com/MOUNIR-x',
        image: img2,
    },
    {
        id: 3,
        title: "GESTCAM",
        description: "Application de gestion d'entreprise (ERP/PME) en cours de développement. Permet d'optimiser la comptabilité, le suivi des stocks et la facturation pour les petites et moyennes entreprises.",
        technologies: ['React', 'Prisma', 'Tailwind CSS', 'PostgreSQL', 'Node.js'],
        demoLink: '#',
        repoLink: 'https://github.com/MOUNIR-x',
        image: img3,
    },
    {
        id: 4,
        title: "Sécurité & Parrot OS Lab",
        description: "Environnement d'expérimentation et d'apprentissage des fondamentaux de la cybersécurité, audits de sécurité applicative, et administration avancée sous Linux Parrot OS.",
        technologies: ['Linux', 'Parrot OS', 'Bash Scripting', 'Security Audits'],
        demoLink: '#',
        repoLink: 'https://github.com/MOUNIR-x',
        image: img4,
    }
];

const Projects = () => {
  return (
    <div className='my-16 md:my-32' id='Projects'>
        <Title title='Mes Réalisations & Projets'/>
        <div className='mt-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project) => (
                    <div key={project.id} 
                        className='bg-base-200/50 hover:bg-base-200 rounded-2xl border border-white/5 hover:border-white/10 shadow-xl overflow-hidden transition-all duration-500 group flex flex-col'
                    >
                        {/* Project Image Container */}
                        <div className="relative overflow-hidden h-52 sm:h-64">
                            <div className="absolute inset-0 bg-gradient-to-t from-base-300 via-transparent to-transparent opacity-60 z-10"></div>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
                            />
                        </div>
                        
                        {/* Project Content */}
                        <div className='p-6 flex flex-col flex-grow justify-between'>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors"> 
                                    {project.title} 
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-4"> 
                                    {project.description} 
                                </p>
                                
                                {/* Technologies tags */}
                                <div className='flex flex-wrap gap-1.5 mb-6'>
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className='bg-white/5 border border-white/10 text-gray-300 rounded-full px-3 py-0.5 text-xs font-medium'> 
                                            {tech} 
                                        </span>
                                    ))} 
                                </div>
                            </div>
                            
                            {/* Action Buttons */}
                            <div className='flex items-center gap-3 pt-4 border-t border-white/5'>
                                <a 
                                    href={project.demoLink}
                                    className='flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary hover:bg-primary/95 text-white font-medium rounded-xl shadow-lg shadow-primary/10 transition-all text-sm'
                                >
                                    <span>Démo Live</span>
                                    <ExternalLink className='w-4 h-4'/>
                                </a>
                                <a 
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='flex items-center justify-center gap-2 p-2 w-11 h-11 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 transition-all'
                                    title="Voir le code source"
                                >
                                    <svg className='w-5 h-5 fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )
}

export default Projects