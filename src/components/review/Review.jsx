import ReviewCardItem from "../reviewCardItem/ReviewCardItem";

export default function Review() {
  return (
    <div className="bg-[#f7f7f7] py-[40px]">
      <div className="container">
        <h2 className="mb-4 text-[28px] font-[ptRootUI-400]">
          Отзывы клиентов
        </h2>
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <ReviewCardItem />
          <ReviewCardItem />
          <ReviewCardItem />
          <ReviewCardItem />
        </div>
      </div>
    </div>
  );
}
