import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Facebook() {
  return (
    <Link to="https://faceboo.com">
      <div className="w-6 h-6 duration-500 text-gray-500 cursor-pointer hover:text-gray-800">
        <FaFacebookSquare size="full" />
      </div>
    </Link>
  );
}
