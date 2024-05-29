import Button from "../button/Button";

export default function CardItem() {
  return (
    <div className="p-[10px] relative max-w-[250px] min-h-[437px] border flex flex-col justify-between">
      <div className="absolute top-0 left-0 bg-salePersentBgColor rounded-xl text-[8px] text-[white] mr-[5px] mb-[5px] p-[2.7px] z-20">
        -29%
      </div>
      <div className="flex items-center justify-center border w-[100%] h-[238px] mb-4">
        <img src="" alt="???" className="border w-[90%] h-[90%] rounded-lg" />
      </div>
      <h3 className="text-cardItemDescriptionColor text-[16px] font-[ptRootUI-300] mb-4">
        Солнечные очки с дужками из бука
      </h3>
      <div className="text-[18px] text-crossedOutTextColor line-through flex items-center">
        3500 ₽
      </div>
      <div className="text-[28px] font-[ptRootUI-700] flex items-center">
        2500 ₽
      </div>
      <Button className="absolute bottom-0">Заказ в один клик</Button>
    </div>
  );
}
