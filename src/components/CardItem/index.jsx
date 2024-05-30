import Button from "../Button";

export default function CardItem() {
  return (
    <div className="relative p-2.5 max-w-[250px] min-h-[437px] border flex flex-col justify-between">
      <div className="absolute top-0 left-0 bg-salePersentBgColor rounded-xl text-[8px] text-[white] mr-[5px] mb-[5px] p-[2.7px] z-10">
        -29%
      </div>
      <div className="flex items-center justify-center border w-full h-[238px] mb-4">
        <img src="" alt="???" className="border size-[90%] rounded-lg" />
      </div>
      <h3 className="text-cardItemDescriptionColor text-[16px] font-fontLight mb-4">
        Солнечные очки с дужками из бука
      </h3>
      <div className="text-[18px] text-crossedOutTextColor line-through flex items-center">
        3500 ₽
      </div>
      <div className="text-[28px] font-fontBold flex items-center">2500 ₽</div>
      <Button className="absolute bottom-0">Заказ в один клик</Button>
    </div>
  );
}
