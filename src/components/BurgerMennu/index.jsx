// import component 👇
import { useState } from "react";
import Drawer from "react-modern-drawer";
import telegram from "../../assets/icons/telegram.png";
import vk from "../../assets/icons/vk.png";
import ok from "../../assets/icons/ok.png";
import burger from "../../assets/icons/burger.svg";
import "react-modern-drawer/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <img src={burger} alt="" />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="p-8 min-w-[500px]"
      >
        <div>
          <h3 className="text-2xl font-pt-root-ui-medium mb-8 pb-8">Меню</h3>
          <div className="info pb-6">
            <h4 className="text-lg font-pt-root-ui-regular mb-4">Информация</h4>
            <ul className="text-base font-pt-root-ui-light py-[3px] grid gap-2 pt-2">
              <li>Контакты</li>
              <li>Оферта</li>
              <li>Оплата</li>
              <li>Доставка</li>
            </ul>
          </div>
          <div className="pb-6 mb-6">
            <h4 className="text-lg font-pt-root-ui-regular">Контакты</h4>
            <ul className="text-base font-light grid gap-2 pt-2">
              <li>+7 777 777 77 77</li>
              <li>г Москва, ул 1-я Тверская-Ямская, д 21</li>
            </ul>
          </div>
          <div className="flex gap-3">
            <div className="size-8 flex items-center justify-center">
              <img src={telegram} alt="" className="" />
            </div>
            <div className="size-8 flex items-center justify-center">
              <img src={vk} alt="" className="" />
            </div>
            <div className="size-8 flex items-center justify-center">
              <img src={ok} alt="" className="h-8" />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default App;
