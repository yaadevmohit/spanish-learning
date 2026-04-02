const series = [
  {
    tag: "COLLECTION",
    title: "Guide to Learning a Language",
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80",
    href: "/guide",
    large: true,
  },
  {
    tag: "SERIE D'EXERCICES",
    title: "A1 Exercises",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    href: "/study/beginner/a1",
    large: false,
  },
  {
    tag: "SERIE D'EXERCICES",
    title: "A2 Exercises",
    img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
    href: "/study/beginner/a2",
    large: false,
  },
  {
    tag: "COLLECTION",
    title: "B1 Exercises",
    img: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800&q=80",
    href: "/study/intermediate/b1",
    large: false,
  },
  {
    tag: "COLLECTION",
    title: "B2 Exercises",
    img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80",
    href: "/study/intermediate/b2",
    large: false,
  },
];

const SeriesGrid = () => {
  const [large, ...rest] = series;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 nunito-regular">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {/* large left card */}
        <a
          href={large.href}
          className="relative w-full h-64 md:h-auto min-h-64 overflow-hidden group"
        >
          <img
            src={large.img}
            alt={large.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-300 block mb-1">
              {large.tag}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">{large.title}</h3>
          </div>
        </a>

        {/* right 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {rest.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="relative w-full h-48 overflow-hidden group"
            >
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-3 text-white">
                <span className="text-xs font-semibold tracking-widest uppercase text-gray-300 block mb-1">
                  {card.tag}
                </span>
                <h3 className="text-base md:text-lg font-bold leading-tight">{card.title}</h3>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SeriesGrid;