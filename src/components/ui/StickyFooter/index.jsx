import homeIcon from "../../../assets/icons/home.png";
import basketIcon from "../../../assets/icons/basket.png";
import { useState } from "react";

export default function StickyFooter() {
  const [isMedium, setIsMedium] = useState(window.innerWidth);

  const handleResize = () => {
    setIsMedium(window.innerWidth);
    console.log("isMedium => ", isMedium);
  };
  window.addEventListener("resize", handleResize);

  return (
    <div
      className={`fixed bottom-0 w-full bg-white ${
        isMedium <= 768 ? "block" : "hidden"
      }`}
    >
      <div className="container flex py-2 justify-between items-center">
        <div className="w-1/2 h-[50px] flex flex-col items-center justify-center gap-1">
          <img src={homeIcon} alt="" className="w-6" />
          <p className="font-pt-root-ui-medium text-xs text-center">Главная</p>
        </div>
        <div className="w-1/2 h-[50px] flex flex-col items-center justify-center gap-1">
          <img src={basketIcon} alt="" className="w-6" />
          <p className="font-pt-root-ui-medium text-xs text-center">Корзина</p>
        </div>
      </div>
    </div>
  );
}
