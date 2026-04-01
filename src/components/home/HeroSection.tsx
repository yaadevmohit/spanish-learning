import Typewriter from "../ui/TypeWriter"

const HeroSection = () => {
    const wordsArray = ["Me gusta aprender español", "¿Dónde está la biblioteca?", "No hablo mucho español todavía", "¿Puedes hablar más despacio?", "Encantado de conocerte"];
    return(
        <div className="flex flex-col justify-center gap-10 items-center mx-auto my-2 max-w-7xl md:p-10 md:min-h-52 nunito-regular border-2">
            <Typewriter words={wordsArray} />
            <div className="flex flex-col gap-2">
                <h1 className="text-7xl trans-bold">
                Learn Spanish for real life
                </h1>
                <p className="text-xl text-gray-600 px-1">Learn spanish with curated spanish videos from youtube, text chapters and interactive exercises</p>
            </div>
            
            <div className="flex flex-col gap-2">
                <a href="" className="text-3xl px-4 py-2 text-white bg-green-500 border-green-500 border-2 hover:text-green-500 hover:bg-white transition-colors">Learn for free</a>
                <span className="px-2 text-lg text-gray-400">no credit card requried.</span>
            </div>
        </div>
    )
}

export default HeroSection