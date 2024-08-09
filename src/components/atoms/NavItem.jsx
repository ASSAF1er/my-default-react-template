import { Link } from "react-router-dom";
import { ComponentProps } from "react";
import Typography from "./Typography.jsx";
import { useLocation } from "react-router-dom";

export default function NavItem({
  children,
  text,
  href = "#",
  className,
  isActive,
}) {

  const { pathname } = useLocation();
  const isActive = (path) =>
  pathname.split("/")[1] === path.split("/")[1];

  return (
    <Link to={href} className="flex items-center gap-2">
      <div>{children}</div>
      <Typography
        text={text}
        className={` font-[500] text-dark ${className} ${
          isActive && "text-primary"
        }`}
      />
    </Link>
  );
}
