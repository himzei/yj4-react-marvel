import { useContext } from "react";
import { Link } from "react-router-dom";
import { MenuOpenContext } from "../../context/MenuOpenContext";

export default function NavLink({ children, href, FlyoutContent }) {
  const { setMenuOpen, setMenuContent } = useContext(MenuOpenContext);

  return (
    <div
      onMouseEnter={() => {
        setMenuOpen(true);
        setMenuContent(FlyoutContent);
      }}
      onMouseLeave={() => {
        setMenuOpen(false);
      }}
      className="relative group"
    >
      <Link to={href} className="relative py-2 px-1 ">
        {children}
        <span className="absolute -bottom-1 -left-2 -right-2 h-1 origin-left  scale-x-0 group-hover:scale-x-100 rounded-full bg-red-500 transition-transform duration-300 ease-out" />
      </Link>
    </div>
  );
}
