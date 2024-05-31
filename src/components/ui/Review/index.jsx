import ReviewCardItem from "../../ReviewCardItem";

export default function Review() {
  return (
    <div className="bg-secondary py-[40px]">
      <div className="container">
        <h2 className="mb-4 text-28 font-pt-root-ui-regular">
          Отзывы клиентов
        </h2>
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          {Array.from({ length: 4 }, (_, idx) => (
            <ReviewCardItem key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
