import Typewriter from "../ui/TypeWriter"
import SeriesGrid from "./SeriesGrid";

const HeroSection = () => {
    const wordsArray = ["Me gusta aprender español", "¿Dónde está la biblioteca?", "No hablo mucho español todavía", "¿Puedes hablar más despacio?", "Encantado de conocerte"];
    return (
        <div className="relative flex flex-col justify-center gap-6 items-center mx-auto my-2 max-w-7xl p-4 md:p-10 md:min-h-52 nunito-regular overflow-hidden">
  
            {   /* glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 bg-amber-300 blur-3xl opacity-40 pointer-events-none rounded-full" />
            {/* <Typewriter words={wordsArray} /> */}
            <div className="relative flex flex-col gap-2 text-center md:text-left w-full items-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl trans-bold leading-tight">
                Learn Spanish for real life
                </h1>
                <p className="text-base sm:text-xl text-gray-600 px-1">
                Learn spanish with curated spanish videos from youtube, text chapters and interactive exercises
                </p>
            </div>

            <div className="relative flex flex-col gap-2 w-full md:w-auto ">
                <a href="" className="text-xl sm:text-3xl px-4 py-2 text-white bg-green-500 border-green-500 border-2 hover:text-green-500 hover:bg-white transition-colors text-center">
                Learn for free
                </a>
                <span className="px-2 text-base text-gray-400 text-center">no credit card required.</span>
            </div>
        </div>
    )
}

export default HeroSection