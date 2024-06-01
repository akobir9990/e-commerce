import glasses from "../../../assets/images/glasses.webp";

export default function Glasses() {
  return (
    <div className="bg-[white] w-full py-[94px]">
      <div className="container py-10 flex flex-col md:flex-row justify-between gap-[27px]">
        <div className="flex-1 pr-5 w-full max-h-[312px] overflow-hidden flex items-center justify-center md:rounded-lg rounded-[30px]">
          <img src={glasses} alt="//" className="w-full" />
        </div>
        <div className="flex flex-1 pl-5 flex-col gap-7 ">
          <h2 className="font-pt-root-ui-bold md:text-3xl text-[27px] leading-[1.2]">
            Откройте мир ярких красок с солнечными очками из дерева
          </h2>
          <p className="text-xl font-pt-root-ui-regular mb-4 leading-[27.2px]">
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
