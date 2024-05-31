import Button from "../Button";
import glass from "../../assets/images/glass.webp";
export default function CardItem() {
  return (
    <div className="relative p-2.5 w-[230px] min-h-[417px] flex flex-col justify-between">
      <div className="absolute p-5 top-1 left-1 bg-sale rounded-md text-base text-white z-10">
        -29%
      </div>
      <div className="flex items-center justify-center w-full h-[227px] mb-4 rounded-tl-xl rounded-tr-xl scale-110">
        <img src={glass} alt="" className="size-full rounded-lg" />
      </div>
      <h3 className="text-dark-60 text-base font-fontLight mb-4">
        Солнечные очки с дужками из бука
      </h3>
      <div className="text-lg text-dark-40 line-through flex items-center">
        3500 ₽
      </div>
      <div className="text-28 font-fontBold flex items-center mb-2">2500 ₽</div>
      <Button className="absolute bottom-0">Заказ в один клик</Button>
    </div>
  );
}
