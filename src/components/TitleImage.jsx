import Button from "./Button";

export default function TitleImage({
  Icon1,
  Icon2,
  Icon3,
  title,
  description,
  imgUrl,
}) {
  return (
    <section className="w-full h-[500px] relative flex justify-center items-center">
      <div className="relative max-w-7xl h-full w-full z-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-white uppercase">{title}</h2>
        <p className="text-white py-2 mb-2">{description}</p>
        <Button type="stream now" />
        {/* 아이콘 */}
        <div className="absolute bottom-0 right-0 w-full h-12 flex justify-end items-end space-x-4 px-4">
          {Icon1 && <Icon1 />}
          {Icon2 && <Icon2 />}
          {Icon3 && <Icon3 />}
        </div>
      </div>
      <div
        className="w-full h-full absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 90%, 0% 100%)",
        }}
      >
        <img
          className="w-full h-full object-cover"
          src={imgUrl}
          alt="marvel_rect"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-gray-900 to-gray-500/0" />
      </div>
    </section>
  );
}
