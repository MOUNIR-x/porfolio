import Title from "./Title"
import imgCSS from "../assets/techno/css.png";
import imgJS from "../assets/techno/js.png";
import imgREACT from "../assets/techno/react.png";
import imgHTML from "../assets/techno/html.png";
import imgNEXT from "../assets/techno/next-js.webp";
import imgNODE from "../assets/techno/node-js.png";
import imgTYPE from "../assets/techno/typescript.svg";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgPRISMA from "../assets/techno/prisma.webp";
import { Briefcase, Calendar, Award } from "lucide-react";

const skills = [
    { id: 1, name: "Next.js", image: imgNEXT },
    { id: 2, name: "React.js", image: imgREACT },
    { id: 3, name: "TypeScript", image: imgTYPE },
    { id: 4, name: "JavaScript", image: imgJS },
    { id: 5, name: "Node.js", image: imgNODE },
    { id: 6, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 7, name: "Prisma ORM", image: imgPRISMA },
    { id: 8, name: "HTML5", image: imgHTML },
    { id: 9, name: "CSS3", image: imgCSS },
];

const experiences = [
    {
        id: 1,
        role: "Stagiaire Développeur Fullstack",
        company: "OKFOODS CAMEROUN",
        period: "Expérience en entreprise",
        description: [
            "Conception et développement intégral de l'application Officeflow.",
            "Officeflow est une solution complète de gestion du parc informatique et de suivi des requêtes d'assistance.",
            "Digitalisation de bout en bout des processus internes de l'entreprise.",
            "Modélisation et mise en place de la base de données et de l'interface utilisateur."
        ],
        icon: <Briefcase className="w-6 h-6 text-primary" />
    },
    {
        id: 2,
        role: "Développeur Fullstack",
        company: "Freelance",
        period: "Projets Indépendants",
        description: [
            "Création et gestion de comptes professionnels sur Upwork.",
            "Création de profil et offres de services sur Malto (Plateforme de freelancing).",
            "Conception d'architectures web modernes et adaptées aux exigences des clients.",
            "Rédaction de propositions techniques et chiffrage de projets."
        ],
        icon: <Award className="w-6 h-6 text-accent" />
    },
    {
        id: 3,
        role: "Projets & Recherche Personnelle",
        company: "Développeur Fullstack",
        period: "En continu",
        description: [
            "Création d'une application de vente de produits locaux : MADE IN CAMEROUN.",
            "Création d'une application de gestion des PME : GESTCAM (en cours de développement).",
            "Apprentissage approfondi et pratique des bases de la cybersécurité (Parrot OS)."
        ],
        icon: <Calendar className="w-6 h-6 text-secondary" />
    }
];

const Experience = () => {
  return (
    <div id="Experience" className="my-16 md:my-32">
        <Title title="Compétences & Expériences"/>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-10">
            {/* Left: Skills grid */}
            <div className="w-full lg:w-5/12">
                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Technologies maîtrisées</h3>
                <div className="grid grid-cols-3 gap-6">
                    {skills.map((skill) => (
                        <div key={skill.id} className="flex flex-col items-center group">
                            <div className="w-18 h-18 sm:w-20 sm:h-20 p-3 rounded-2xl bg-base-200 border border-white/5 group-hover:border-primary/50 shadow-md group-hover:shadow-primary/10 transition-all duration-300 flex justify-center items-center group-hover:-translate-y-1"> 
                                <img src={skill.image} 
                                alt={skill.name}
                                className="object-contain h-full w-full filter brightness-95 group-hover:brightness-100 transition-all duration-300"
                                />
                            </div>
                            <span className="mt-2 text-xs font-medium text-gray-400 group-hover:text-white transition-colors text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right: Experiences timeline */}
            <div className="w-full lg:w-7/12 space-y-6">
                <h3 className="text-xl font-bold text-white mb-6 tracking-wide">Parcours professionnel</h3>
                <div className="relative border-l border-white/10 ml-4 pl-6 space-y-8">
                    {experiences.map((experience) => (
                        <div key={experience.id} className="relative group">
                            {/* Dot icon */}
                            <span className="absolute -left-10 top-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-base-300 border border-white/10 group-hover:border-primary/50 transition-colors shadow-lg">
                                {experience.icon}
                            </span>
                            
                            <div className="bg-base-200/50 hover:bg-base-200 p-6 rounded-2xl border border-white/5 hover:border-white/10 shadow-xl transition-all duration-300">
                                <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2.5 py-1 rounded-full mb-2">
                                    {experience.period}
                                </span>
                                <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                                    {experience.role}
                                </h4>
                                <h5 className="text-md font-semibold text-gray-400 mb-4">
                                    {experience.company}
                                </h5>
                                <ul className="space-y-2 list-none pl-0">
                                    {experience.description.map((desc, index) => (
                                        <li key={index} className="text-sm text-gray-300 flex items-start">
                                            <span className="text-primary mr-2 select-none">•</span>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience