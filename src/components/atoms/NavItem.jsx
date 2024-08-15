import { Link } from "react-router-dom";
import { ComponentProps } from "react";
import Typography from "./Typography.jsx";
import { useLocation } from "react-router-dom";

export default function NavItem({ children, text, href = "#", className }) {
  const { pathname } = useLocation();
  const isActive = (path) => pathname.split("/")[1] === path.split("/")[1];

  return (
    <Link
      to={href}
      className="relative flex items-center gap-2 after:absolute first-of-type:after:hidden last-of-type:after:hidden after:-right-4 after:top-1/2 after:-translate-y-1/2 after:size-[6px] after:rounded-full after:bg-light"
    >
      <div>{children}</div>
      <Typography
        text={text}
        className={`  text-lg uppercase text-light ${className} ${
          isActive(href) && "text-gold"
        }`}
      />
    </Link>
  );
}
