import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Icon from "./Icon";

function CustomMouse() {
  const location = useLocation();
  useEffect(() => {
    // gestion de la position du curseur personnalisé
    if (typeof document !== "undefined") {
      const mouse = document.querySelector("#mouse");
      const mouseCenter = document.querySelector("#mouseCenter");
    }
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", (e) => {
        mouse.style.top = e.clientY - 20 + "px";
        mouse.style.left = e.clientX + "px";
        mouseCenter.style.top = e.clientY - 20 + "px";
        mouseCenter.style.left = e.clientX + "px";
      });
    }
    //changer l'apparence du cuseur personnalisé lorsqu'il passe sur certains éléments
    if (typeof document !== "undefined") {
      var authorized = document.querySelectorAll("#review-left, #review-right");

      authorized.forEach((item) => {
        item.addEventListener("mouseover", () => {
          document.querySelector("#mouseCenter").classList.add("md:flex");
          //
          document.querySelector("#mouse").classList.add("md:flex");
        });
        item.addEventListener("mouseout", () => {
          document.querySelector("#mouseCenter").classList.remove("md:flex");
          //
          document.querySelector("#mouse").classList.remove("md:flex");
        });
      });

      var leftSection = document.querySelectorAll("#review-left");

      leftSection.forEach((item) => {
        item.addEventListener("mouseover", () => {
          document
            .querySelector("#mouseCenter")
            .classList.remove("rotate-[0deg]");
          document
            .querySelector("#mouseCenter")
            .classList.add("rotate-[180deg] ");
        });
        item.addEventListener("mouseout", () => {
          document
            .querySelector("#mouseCenter")
            .classList.remove("rotate-[180deg]");

          document
            .querySelector("#mouseCenter")
            .classList.add("rotate-[0deg] ");
        });
      });
    }
  }, [location]);

  return (
    <>
      <div
        id="mouse"
        className="fixed z-[100] pointer-events-none hidden  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[100px] border border-gray-400 rounded-full duration-[400ms] ease "
      ></div>
      <div
        id="mouseCenter"
        className="fixed z-[100] items-center justify-center  pointer-events-none hidden  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4   text-gray-400 rounded-full duration-500 font-[300] ease  "
      >
        <Icon name="arrow-right" className="text-[40px] leading-[30px] " />
      </div>
    </>
  );
}

export default CustomMouse;
