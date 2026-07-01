import Title from './Title'
import img2 from '../assets/img2.jpg'
import { CalendarSync, LetterText, Paintbrush, Languages, Terminal, CheckCircle2 } from 'lucide-react'

const aboutSections = [
    {
        id: 1,
        title: "Développement Frontend",
        description: "Création d'interfaces utilisateur modernes et réactives en utilisant React.js, Next.js, HTML5, CSS3, et Tailwind CSS.",
        icon: <LetterText className='text-primary scale-125' />
    },
    {
        id: 2,
        title: "Développement Backend",
        description: "Conception d'architectures serveurs performantes avec Node.js, PHP, Prisma ORM, et gestion de bases de données relationnelles.",
        icon: <CalendarSync className='text-accent scale-125' />
    },
    {
        id: 3,
        title: "Intégration & Systèmes",
        description: "Maîtrise de l'environnement Linux (Parrot OS), déploiement d'applications, et notions de base en cybersécurité.",
        icon: <Paintbrush className='text-primary scale-125' />
    }
]

const competencies = [
    "Développement Web (Next.js, React.js, PHP, HTML, CSS)",
    "Gestion de Bases de Données (MySQL, PostgreSQL, Prisma)",
    "Maîtrise basique du système LINUX (Parrot Os)",
    "Leadership & Gestion d'équipe",
    "Travail en équipe & Collaboration Agile"
]

const About = () => {
    return (
        <div className='bg-base-300/40 p-6 sm:p-10 md:p-16 rounded-3xl mb-12 md:mb-32 border border-white/5 backdrop-blur-sm' id='About'>
            <Title title='À propos de moi' />
            
            <div className='flex flex-col xl:flex-row gap-12 items-center mt-8'>
                {/* Profile Image & Personal Card */}
                <div className='flex-1 w-full max-w-md xl:max-w-none flex justify-center'>
                    <div className='relative group w-full max-w-sm'>
                        <div className='absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition duration-1000'></div>
                        <div className='relative bg-base-100 p-4 rounded-2xl border border-white/10 shadow-2xl'>
                            <img src={img2} alt="A propos" className="w-full h-80 object-cover rounded-xl mb-4 grayscale hover:grayscale-0 transition-all duration-500" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">Profil Professionnel</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Jeune développeur Full Stack diplômé et passionné, spécialisé dans la création d'applications web et mobiles modernes. Fort d'une première expérience concrète en entreprise où j'ai mené avec succès un projet de digitalisation de bout en bout.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Specialties and Competencies */}
                <div className='flex-[1.5] w-full space-y-8'>
                    <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-1'>
                        {aboutSections.map((section) => (
                            <div key={section.id} 
                                className='flex items-start bg-base-200/50 hover:bg-base-200 p-5 rounded-2xl border border-white/5 hover:border-white/10 shadow-xl transition-all duration-300 group hover:-translate-y-1'
                            >
                                <div className='p-3 bg-base-100 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300'>
                                    {section.icon}
                                </div>
                                <div className='flex-1'>
                                    <h2 className='text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors'>
                                        {section.title}
                                    </h2>
                                    <p className='text-sm text-gray-400 leading-relaxed'>
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Sub-competencies and languages */}
                    <div className="grid md:grid-cols-2 gap-6 bg-base-200/30 p-6 rounded-2xl border border-white/5">
                        <div>
                            <h4 className="flex items-center text-md font-bold uppercase tracking-wider text-primary mb-4">
                                <Terminal className="w-4 h-4 mr-2" />
                                Compétences Clés
                            </h4>
                            <ul className="space-y-2">
                                {competencies.map((comp, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-accent shrink-0" />
                                        <span>{comp}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <div>
                            <h4 className="flex items-center text-md font-bold uppercase tracking-wider text-accent mb-4">
                                <Languages className="w-4 h-4 mr-2" />
                                Langues
                            </h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm mb-1 text-gray-300">
                                        <span>Français</span>
                                        <span className="text-accent font-semibold">Courant (Langue Maternelle)</span>
                                    </div>
                                    <div className="w-full bg-base-100 rounded-full h-2">
                                        <div className="bg-accent h-2 rounded-full w-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-1 text-gray-300">
                                        <span>Anglais</span>
                                        <span className="text-primary font-semibold">Intermédiaire (Medium)</span>
                                    </div>
                                    <div className="w-full bg-base-100 rounded-full h-2">
                                        <div className="bg-primary h-2 rounded-full w-3/5"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About