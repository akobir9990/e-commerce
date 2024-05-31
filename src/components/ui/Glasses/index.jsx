import glasses from "../../../assets/images/glasses.webp";

export default function Glasses() {
  return (
    <div className="bg-[white] w-full">
      <div className="container py-10 flex flex-col md:flex-row justify-between">
        <div className="flex-1 pr-5">
          <img src={glasses} alt="//" className="" />
        </div>
        <div className="flex flex-1 pl-5 flex-col gap-5 ">
          <h2 className="font-fontBold text-3xl">
            Откройте мир ярких красок с солнечными очками из дерева
          </h2>
          <p className="text-xl font-pt-root-ui-regular mb-4">
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
