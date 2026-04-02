import { useRef } from "react";
import {cards} from "../../assets/carouselData"
const CarouselSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "left" ? -340 : 340, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 nunito-regular">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl md:text-4xl font-bold">Where do you want to start?</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="border-2 border-black px-3 py-1 text-xl hover:bg-black hover:text-white transition-colors"
            aria-label="Scroll left"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="border-2 border-black px-3 py-1 text-xl hover:bg-black hover:text-white transition-colors"
            aria-label="Scroll right"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {cards.map((card) => (
          <a
            key={card.title}
            href={card.href}
            className="relative flex-shrink-0 w-72 h-96 snap-start group overflow-hidden border-2 border-black"
          >
            <img
              src={card.img}
              alt={card.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />

            <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
              <h3 className="text-xl font-bold mb-2 leading-tight">{card.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.description}
              </p>
              <span className="mt-4 text-sm border-b border-white w-fit pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Start →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CarouselSection;