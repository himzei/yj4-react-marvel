import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Button({ link, type, outline, isFetching, onClick }) {
  return (
    <Link to={link}>
      <button
        onClick={onClick}
        disabled={isFetching}
        style={{
          clipPath:
            "polygon(15% 0%, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 30%)",
        }}
        className={`relative ${
          outline === "outline"
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-red-600 hover:bg-red-700 "
        }  ${
          isFetching && "bg-gray-600 hover:bg-gray-600 "
        } px-10 py-4 uppercase text-white font-bold`}
      >
        {isFetching ? (
          <span className="flex items-center space-x-2">
            <ClipLoader size="16px" color="white" /> <em>Loading</em>
          </span>
        ) : (
          type
        )}
      </button>
    </Link>
  );
}
