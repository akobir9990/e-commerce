import EmblaCarousel from "../../Embla/EmblaCarousel";
import CardItem from "../../CardItem";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Catalog() {
  return (
    <div className="md:py-[30px] py-[100px] bg-secondary">
      <div className="container">
        <h3 className="md:text-28 text-[21px] font-pt-root-ui-medium mb-4">
          Каталог
        </h3>
        <div className="flex justify-between">
          <EmblaCarousel
            slides={SLIDES}
            options={OPTIONS}
            Content={<CardItem />}
          />
        </div>
      </div>
    </div>
  );
}
