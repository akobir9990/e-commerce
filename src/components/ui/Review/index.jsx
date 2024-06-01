import EmblaCarousel from "../../Embla/ReviewEmbla/EmblaCarousel";
import ReviewCardItem from "../../ReviewCardItem";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Review() {
  return (
    <div className="bg-secondary py-[40px]">
      <div className="container">
        <h2 className="mb-4 text-28 font-pt-root-ui-regular">
          Отзывы клиентов
        </h2>
        <div className="lg:hidden">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
        <div className="hidden grid-rows-2 grid-cols-2 gap-4 lg:grid">
          {Array.from({ length: 4 }, (_, idx) => (
            <ReviewCardItem key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
