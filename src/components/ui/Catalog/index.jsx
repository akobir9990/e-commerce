import EmblaCarousel from "../../Embla/EmblaCarousel";

const OPTIONS = { align: "start" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function Catalog() {
  return (
    <div className="py-[60px] bg-secondary">
      <div className="container">
        <h3 className="text-28 font-pt-root-ui-regular mb-4">Каталог</h3>
        <div className="flex justify-between">
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
      </div>
    </div>
  );
}
