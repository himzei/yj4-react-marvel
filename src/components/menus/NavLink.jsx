import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MenuOpenContext } from "../../context/MenuOpenContext";

export default function NavLink({ children, href, FlyoutContent }) {
  const [open, setOpen] = useState(false);
  const { setMenuOpen, setMenuContent } = useContext(MenuOpenContext);

  return (
    <div
      onMouseEnter={() => {
        setOpen(true);
        setMenuOpen(true);
        setMenuContent(FlyoutContent);
      }}
      onMouseLeave={() => {
        setOpen(false);
        setMenuOpen(false);
      }}
      className="relative"
    >
      <Link to={href} className="relative py-2 px-1 ">
        {children}
        <span
          // className="absolute bottom-0 left-0 w-10 h-10 bg-red-500"
          style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-1 -left-2 -right-2 h-0.5 origin-left scale-x-0 rounded-full bg-red-500 transition-transform duration-300 ease-out"
        />
      </Link>
    </div>
  );
}
