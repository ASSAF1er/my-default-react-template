import { routes } from "../../router/routes";
import NavItem from "../../components/atoms/NavItem";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className=" fixed top-0 z-50 py-4 left-0 w-full flex justify-between items-center px-5 border-b border-b-bluedark backdrop-blur-lg b backdrop-saturate-0 bg-bluedark/10 ">
      <div>
        <p className="text-lg text-light w-40 text-center ">
          CHENDJOU SERGE EMMANUEL
        </p>
      </div>
      <nav className="flex text-light gap-10">
        {routes.map((item, index) => (
          <NavItem key={index} text={item.text} href={item.path} />
        ))}
      </nav>
      <div className="flex items-center gap-3">
        <p className="tex-sm uppercase text-light ">Contact </p>
        <button className="  rounded-full border border-bluedark px-5 py-2 text-sm text-vvbluedark  uppercase backdrop-blur-sm bg-light hover:bg-gold hover:text-bluedark   shadow-sm ">
          Demander un devis
        </button>
      </div>
    </div>
  );
}

export default Navbar;
