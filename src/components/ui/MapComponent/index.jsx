import YandexMap from "../../YandexMap";
import telegram from "../../../assets/icons/whiteTelegram.png";
import vk from "../../../assets/icons/whiteVk.png";
import ok from "../../../assets/icons/whiteOk.png";

export default function MapComponent() {
  return (
    <div className="min-h-[500px] bg-secondary flex items-center md:py-[38px] py-[100px]">
      <div className="container flex md:flex-row flex-col gap-3 min-h-[422px] items-center">
        <div className="md:w-1/2 w-full">
          <YandexMap />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center gap-3">
          <h3 className="text-28 font-pt-root-ui-medium">Наши контакты</h3>
          <div className="text-26 grid gap-2">
            <a
              className="text-xl font-pt-root-ui-regular"
              href="tel:+7 777 777 77 77"
            >
              +7 777 777 77 77
            </a>
            <a
              className="text-lg font-pt-root-ui-regular"
              href="mailto:sun_glasses@insales.ru"
            >
              sun_glasses@insales.ru
            </a>
            <p className="text-base font-pt-root-ui-light">
              г Москва, ул 1-я Тверская-Ямская, д 21
            </p>
          </div>
          <div className="flex gap-4">
            <div className="size-10 rounded-[50%] flex justify-center items-center bg-primary hover:bg-primary:hower cursor-pointer">
              <img src={telegram} alt="tel" />
            </div>
            <div className="size-10 rounded-[50%] flex justify-center items-center bg-primary hover:bg-primary:hower cursor-pointer">
              <img src={vk} alt="vk" />
            </div>
            <div className="size-10 rounded-[50%] flex justify-center items-center bg-primary hover:bg-primary:hower cursor-pointer">
              <img src={ok} alt="ok" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
