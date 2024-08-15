import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="bg-primary">
      <div>
        <p className=" border-y border-vvbluedark text-[200px] font-bold  leading-[200px] text-vvbluedark">
          CHENDJOU SERGE E.
        </p>
      </div>
      <div className=" flex border-b border-vvbluedark justify-between text-light py-10 px-10 text-lg font-lg font-[300]">
        <div>
          <div className="flex flex-col ">
            <span className="text-bluedark">Email</span>
            <span className="text-light text-[17px] hover:text-gold">
              <a href="mailto:chendjouserge@gmail.com">
                chendjouserge@gmail.com
              </a>
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-bluedark">Appel</span>
            <span className="text-light text-[17px] hover:text-gold">
              <a href="call:677 777 777">677 777 777 / 699 999 999</a>
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-bluedark">Whatsapp</span>
            <span className="text-light text-[17px] hover:text-gold">
              <a href="https://whatsapp.com/677777777">677 777 777</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-bluedark">Localisation</span>
          <span className="text-light text-[17px] hover:text-gold">
            <a href="https://whatsapp.com/677777777">
              Yaoundé, Cameroun <br /> École de police, <br /> face pharmacie Emmanuel.
            </a>
          </span>
        </div>
      </div>
      <div className=" flex justify-between text-light py-10 px-10 text-lg font-lg font-[200] ">
        <p>
          <span>©{new Date().getFullYear()} |</span>
          <span className="ml-3">Réalisé par</span>
          <Link to="/" className="ml-1 hover:text-gold ">
            CampusTechSolutions
          </Link>
        </p>
        <p>Tous droits réservés</p>
      </div>
    </div>
  );
}

export default Footer;
