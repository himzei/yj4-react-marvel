import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Twitter() {
  return (
    <Link to="https://twitter.com/?lang=ko">
      <div className="w-6 h-6 duration-500 text-gray-500 cursor-pointer hover:text-gray-800">
        <FaXTwitter size="full" />
      </div>
    </Link>
  );
}
