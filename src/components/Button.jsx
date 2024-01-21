import { Link } from "react-router-dom";

export default function Button({ link, type, outline }) {
  return (
    <Link to={link}>
      <button
        style={{
          clipPath:
            "polygon(15% 0%, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%)",
        }}
        className={`relative ${
          outline === "outline"
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-red-600 hover:bg-red-700 "
        }  px-10 py-4 uppercase text-white font-bold`}
      >
        {type}
      </button>
    </Link>
  );
}
