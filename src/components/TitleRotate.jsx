export default function TitleRotate({ text, color }) {
  return (
    <div className="relative flex items-center uppercase w-80 h-20 text-xl tracking-widest  ">
      <span
        className={`${
          color === "dark" ? "text-white bg-main-dark" : "text-black"
        }`}
      >
        {text}
      </span>
      <div className="absolute top-20 left-0 w-28 origin-bottom-left h-[1px] -rotate-[45deg] bg-[#c6a972]"></div>
    </div>
  );
}
