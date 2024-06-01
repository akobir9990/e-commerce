import { useState } from "react";
import phoneIcon from "../../../assets/icons/whitePhone.png";
import BurgerMenu from "../../BurgerMennu";

export default function Header() {
  const [isMedium, setIsMedium] = useState(window.innerWidth);

  window.addEventListener("resize", () => setIsMedium(window.innerWidth));
  return (
    <div className="flex justify-between items-center md:py-6 py-[15px]">
      <div className="flex text-lg gap-[12.8px]">
        <BurgerMenu />
        {isMedium > 768 ? (
          <a href="#" className="text-white">
            Меню
          </a>
        ) : (
          <></>
        )}
      </div>
      <div className="font-montserrat-semibold md:text-40 text-[25px]   text-white">
        LANDING
      </div>
      <div className="font-pt-root-ui-regular flex items-center text-base text-white">
        <a href="tel:+7 777 777 77 77">
          <img className="size-4" src={phoneIcon} alt="" />
        </a>
        {isMedium > 768 ? (
          <a href="tel:+7 777 777 77 77" className="text-white">
            +7 777 777 77 77
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
