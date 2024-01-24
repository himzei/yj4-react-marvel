import { Link } from "react-router-dom";

export default function CharacterItem({ item }) {
  return (
    <Link to={`/characters/${item.id}`}>
      <div className="h-[340px]">
        <div
          className="w-full h-full flex flex-col group cursor-pointer"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 90%, 85% 100%, 0 100%)",
          }}
        >
          <div className="w-full h-[60%] overflow-hidden">
            <img
              className="w-full h-full duration-500 object-cover group-hover:scale-110"
              src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
              alt="character_image"
            />
          </div>
          <div className="relative w-full h-[40%] bg-red-500 flex items-end">
            <div className="absolute inset-0 w-full h-full flex flex-col justify-between p-4 text-white">
              <h2>{item?.name}</h2>
              <p className="text-xs text-gray-300 duration-500 group-hover:text-gray-100">
                {item?.description.substr(0, 46)}
              </p>
            </div>
            <div className="w-full h-[95%] duration-500 group-hover:h-0 bg-main-dark"></div>
          </div>
        </div>
      </div>
    </Link>
  );
}
