import phoneIcon from "../../../assets/icons/whitePhone.png";
import BurgerMenu from "../../BurgerMennu";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-6">
      <div className="flex text-lg gap-[12.8px]">
        <BurgerMenu />
        <a href="#" className="text-white">
          Меню
        </a>
      </div>
      <div className="font-montserrat-semibold text-40 text-white">LANDING</div>
      <div className="font-pt-root-ui-regular flex items-center text-base text-white">
        <img className="size-4" src={phoneIcon} alt="" />
        +7 777 777 77 77
      </div>
    </div>
  );
}
