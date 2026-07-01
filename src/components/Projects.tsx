
import Title from './Title'
import img1 from '../assets/projects/1.png'
import img2 from '../assets/projects/2.png'
import img3 from '../assets/projects/3.png'
import img4 from '../assets/projects/4.png'
import img5 from '../assets/projects/5.png'
import img6 from '../assets/projects/6.png'
import { Camera, GitBranchPlus, GitGraphIcon, Projector } from 'lucide-react'

const projects = [
    {
        id:1,
        title: "Gestionnaire de taches",
        description: "une application qui va permettre d'automatiser et de suivre les taches ",
        technologies: ['React', 'Node.js', 'Tailwind CSS' ],
        demolink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id:2,
        title: "Gestionnaire de taches",
        description: "une application qui va permettre d'automatiser et de suivre les taches ",
        technologies: ['React', 'Node.js', 'Tailwind CSS' ],
        demolink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id:3,
        title: "Gestionnaire de taches",
        description: "une application qui va permettre d'automatiser et de suivre les taches ",
        technologies: ['React', 'Node.js', 'Tailwind CSS' ],
        demolink: '#',
        repoLink: '#',
        image: img3,     
    },
    {
        id:4,
        title: "Gestionnaire de taches",
        description: "une application qui va permettre d'automatiser et de suivre les taches ",
        technologies: ['React', 'Node.js', 'Tailwind CSS' ],
        demolink: '#',
        repoLink: '#',
        image: img4,     
    },
    {
        id:5,
        title: "Gestionnaire de taches",
        description: "une application qui va permettre d'automatiser et de suivre les taches ",
        technologies: ['React', 'Node.js', 'Tailwind CSS' ],
        demolink: '#',
        repoLink: '#',
        image: img5,     
    },
    {
        id:6,
        title: "Gestionnaire de taches",
        description: "une application qui va permettre d'automatiser et de suivre les taches ",
        technologies: ['React', 'Node.js', 'Tailwind CSS' ],
        demolink: '#',
        repoLink: '#',
        image: img6,     
    }
];

const Projects = () => {
  return (
    <div className='mt-10' id='Projects'>
        <Title title='Mes Projets'/>
        <div className=''>
            <div className='md:flex md:flex-row md:flex-wrap gap-4 justify-center flex flex-col items-center'>
                {projects.map((project)=> (
                    <div className='bg-base-200 w-70 items-center h-95 flex p-5 pt-0 rounded-xl mb-5 '>
                        <div>
                            <img src={project.image} alt={project.title} className='w-60 h-40 object-cover rounded-xl'/>
                            <h3 className="font-bold"> {project.title} </h3>
                            <p> {project.description} </p>
                            <div className='flex gap-2'>
                                {project.technologies.map((technologie)=>(
                                    <div className='bg-accent rounded-xl pl-1 pr-1'> {technologie} </div>
                                ))} 
                            </div>
                                <div className='flex gap-2 btn-ghost'>
                                    <button className='flex hover:bg-amber-600 p-2 gap-3 cursor-pointer bg-accent rounded mt-2 w-38 items-center justify-center'>Demo
                                        <Projector/>
                                    </button>
                                    <button className='hover:bg-gray-400 w-22 bg-accent cursor-pointer rounded mt-2 pl-8 bg-gray-600'>
                                        <GitGraphIcon className=''/>
                                    </button>
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