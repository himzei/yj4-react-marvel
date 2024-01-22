export default function SubPageMain({ title, description, imgUrl }) {
  return (
    <section className="relative w-full flex justify-end h-[400px]">
      <img
        className="w-3/4 h-full object-cover"
        src={imgUrl}
        alt="movies_image"
      />
      <div className="absolute left-0 right-0 top-0 w-full h-full bg-gradient-to-r from-gray-900 via-gray-900 via-35% to-transparent"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2  text-white text-center">
        <h1 className="text-4xl font-bold  uppercase py-2">{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
