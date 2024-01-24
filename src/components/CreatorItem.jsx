import { Link } from "react-router-dom";

export default function CreatorItem({ item }) {
  return (
    <Link to={`/creators/${item?.id}`}>
      <div className="shrink-0 cursor-pointer group">
        <div className="w-full h-[280px]">
          <img
            className="w-full h-full object-cover duration-500 group-hover:-translate-y-3"
            src={`${item?.thumbnail?.path}.${item?.thumbnail?.extension}`}
            alt="comics_image"
          />
        </div>
        <div className="py-2 px-1">
          <h2 className="text-sm font-semibold duration-500 group-hover:text-red-600 ">
            {item.firstName}
          </h2>
          <h4 className="text-gray-500 text-sm">
            {item.modified?.split("-")[0]}
          </h4>
        </div>
      </div>
    </Link>
  );
}
