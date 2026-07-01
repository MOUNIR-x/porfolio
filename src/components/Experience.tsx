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

import google from "../assets/companies/google.png";
import meta from "../assets/companies/meta.webp";
import amazon from "../assets/companies/amazon.png";

const skills = [
    { id:1, name: "HTML", image: imgHTML },
    { id:1, name: "CSS", image: imgCSS },
    { id:1, name: "Javascript", image: imgJS },
    { id:1, name: "React", image: imgREACT },
    { id:1, name: "Node.js", image: imgNODE },
    { id:1, name: "Tailwind CSS", image: imgTAILWIND },
    { id:1, name: "Typescript", image: imgTYPE },
    { id:1, name: "Next.js", image: imgNEXT },
    { id:1, name: "Prisma", image: imgPRISMA },
];

const experiences= [
    {
        id:1,
        role: "Software Engineer",
        company: "Google",
        period: "Sep 20222 - Présent",
        description: [
            "Developpement de nouvelles fonctionnalités pour Google Maps. ",
            "Optimisation des performances de l'application. ,"
        ],
        image: google,
    },
    {
        id:2,
        role: "Software Engineer",
        company: "Google",
        period: "Sep 20222 - Présent",
        description: [
            "Developpement de nouvelles fonctionnalités pour Google Maps. ",
            "Optimisation des performances de l'application. ,"
        ],
        image: meta,
    },
    {
        id:3,
        role: "Software Engineer",
        company: "Google",
        period: "Sep 20222 - Présent",
        description: [
            "Developpement de nouvelles fonctionnalités pour Google Maps. ",
            "Optimisation des performances de l'application. ,"
        ],
        image: amazon,
    },
]

const Experience = () => {
  return (
    <div id="Experience">
        <Title title="Experiences"/>
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                {skills.map((skill)=>(
                    <div key={skill.id} className="flex flex-col justify-center items-center ">
                        <div className="w-24 h-24 p-2 rounded-full border-2 border-accent "> 
                            <img src={skill.image} 
                            alt={skill.name}
                            className="object-cover rounded-full h-full w-full"
                            />
                        </div>
                        <span className="mt-2 text-sm"> {skill.name} </span>
                    </div>
                ))}
            </div>
            <div className="md:ml-4 flex flex-col space-y-4 ">
                {experiences.map((experience)=>(
                    <div key={experience.id} 
                       className="flex flex-col bg-base-200 p-5 
                       rounded-xl shadow-xl" 
                    >
                        <div className="flex items-center">
                            <img src= {experience.image} 
                            alt= {experience.company}
                            className="object-cover h-10 w-10"
                            />
                        <div className="ml-4">
                            <h1 className="text-xl text-accent font-bold">
                                {experience.role} , {experience.company}
                            </h1>
                            <span className="text-sm">{experience.period}</span>
                        </div>
                        </div>
                        <ul className="list-disc ml-16 mt-2">
                            {experience.description.map((desc , index)=>(
                                <div>
                                    <li key={index}>
                                    {desc}
                                </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
    
  )
}

export default Experience