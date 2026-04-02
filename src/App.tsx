import CarouselSection from "./components/home/CarouselSection"
import HeroSection from "./components/home/HeroSection"
import SeriesGrid from "./components/home/SeriesGrid"
import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="w-full h-full p-2">
      <Navbar />
      <SeriesGrid />
      <HeroSection />
      <CarouselSection />
    </div>
  )
}

export default App
