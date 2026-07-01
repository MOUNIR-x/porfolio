import { Mail, Download } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center my-12 lg:my-28 gap-10 animate-fade-in-up'>
            <div className="flex flex-col flex-1 text-center lg:text-left">
                <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-3">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
                        Disponible pour opportunités
                    </span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white">
                    Bonjour, je suis <br className="hidden sm:inline" />
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent font-black'>
                        Poutougnigni Abu Mounir
                    </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl font-bold text-gray-400 mt-3">
                    Développeur Fullstack Junior
                </h2>
                
                <p className="my-6 text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed mx-auto lg:mx-0">
                    Passionné par la création d'applications web et mobiles modernes. 
                    J'aime relever des défis algorithmiques, concevoir des solutions robustes de bout en bout 
                    et m'adapter rapidement aux nouveaux écosystèmes technologiques pour répondre aux besoins utilisateurs.
                </p>
                
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <a href="mailto:pam20072007@gmail.com" className="btn btn-primary shadow-lg hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <Mail className="w-5 h-5 mr-1" />
                        Me contacter
                    </a>
                    <a href="/cv.pdf" download="CV_POUTOUGNIGNI_ABU_MOUNIR.pdf" className="btn btn-outline border-white/20 hover:bg-white hover:text-black hover:border-white shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
                        <Download className="w-5 h-5 mr-1" />
                        Télécharger mon CV
                    </a>
                </div>
            </div>
            
            <div className="flex justify-center items-center flex-1">
                <div className="relative group">
                    {/* Decorative background glow */}
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-glow"></div>
                    
                    {/* Floating image container */}
                    <div className="relative animate-float">
                        <img 
                            src={img} 
                            alt="Poutougnigni Abu Mounir" 
                            className="w-72 h-72 sm:w-85 sm:h-85 lg:w-96 lg:h-96 object-cover border-4 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.03]" 
                            style={{
                                borderRadius: "30% 70% 70% 30% / 67% 62% 38% 33%"
                            }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home