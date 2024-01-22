import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Instagram() {
  return (
    <Link to="https://instagra.com">
      <div className="w-6 h-6 duration-500 text-gray-500 cursor-pointer hover:text-gray-800">
        <FaInstagramSquare size="full" />
      </div>
    </Link>
  );
}
