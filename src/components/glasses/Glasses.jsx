import glasses from "../../assets/glasses.webp";

export default function Glasses() {
  return (
    <div className="bg-[white] w-[100%]">
      <div className="container py-10 flex flex-col md:flex-row justify-between">
        <div className="flex-1 pr-5">
          <img src={glasses} alt="//" className="" />
        </div>
        <div className="flex flex-1 pl-5 flex-col gap-5 ">
          <h2 className="font-[ptRootUI-700] text-[30px] ">
            Откройте мир ярких красок с солнечными очками из дерева
          </h2>
          <p className="text-[20px] font-[ptRootUI-400] mb-4">
            В современном мире очки - это не просто средство коррекции зрения,
            это стильный аксессуар, который подчеркивает вашу индивидуальность.
            Мы предлагаем эксклюзивную коллекцию очков, которые сочетают в себе
            элегантность, комфорт и качество.
          </p>
        </div>
      </div>
    </div>
  );
}
