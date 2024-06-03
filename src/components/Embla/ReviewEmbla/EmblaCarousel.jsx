import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import ReviewCardItem from "../../ReviewCardItem";

const EmblaCarousel = ({ options, fakeReviewData }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {fakeReviewData.map((item, idx) => (
            <div className="embla__slide" key={idx}>
              <ReviewCardItem item={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
