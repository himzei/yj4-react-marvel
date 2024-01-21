const menus = [
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/6/b0/65a00c98a76c9/portrait_uncanny.jpg",
    title: "comics",
    description: "Lorem ipsum dolor sit amet, ",
  },
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/6/d0/65a00c8879f1f/portrait_uncanny.jpg",
    title: "tv shows",
    description: "Lorem ipsum dolor sit amet, csadlf dasfji",
  },
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/8/a0/65a00c66c2c4b/portrait_uncanny.jpg",
    title: "games",
    description: "Lorem ipsum dolor sit amet,",
  },
  {
    image:
      "https://cdn.marvel.com/u/prod/marvel/i/mg/2/c0/65a00c68b0363/portrait_uncanny.jpg",
    title: "tv shows",
    description: "Lorem ipsum dolor sit amet, ",
  },
];

export default function NewsComponent() {
  return (
    <div className="max-w-7xl w-full flex flex-col py-16 items-center space-y-8">
      <h1 className="font-bold text-3xl uppercase">trending news</h1>
      <div className="flex gap-4">
        {menus.map((item, i) => (
          <div key={i} className="flex flex-col w-40 h-80 space-y-4 group">
            <div className="w-full h-68">
              <img
                src={item.image}
                alt="menu_image"
                className="w-full shadow-lg transition-all duration-500 hover:-translate-y-2"
              />
            </div>
            <div>
              <h2 className="text-sm uppercase font-semibold transition-all duration-500 group-hover:text-red-600">
                {item.title}
              </h2>
              <p className="text-xs">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
