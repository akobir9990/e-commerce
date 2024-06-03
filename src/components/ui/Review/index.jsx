import EmblaCarousel from "../../Embla/ReviewEmbla/EmblaCarousel";
import ReviewCardItem from "../../ReviewCardItem";
import { fakeReviewData } from "../Review/const";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = fakeReviewData.length;

export default function Review() {
  return (
    <div className="bg-secondary py-[40px]">
      <div className="container">
        <h2 className="mb-4 text-28 font-pt-root-ui-regular">
          Отзывы клиентов
        </h2>
        <div className="lg:hidden">
          <EmblaCarousel
            fakeReviewData={fakeReviewData}
            slides={SLIDE_COUNT}
            options={OPTIONS}
          />
        </div>
        <div className="hidden grid-rows-2 grid-cols-2 gap-4 lg:grid">
          {fakeReviewData.map((item) => {
            return <ReviewCardItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
