import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import ReviewCardItem from "../../ReviewCardItem";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <ReviewCardItem />
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

// import { DotButton, useDotButton } from "./EmblaCarouselArrowButtons";
// import useEmblaCarousel from "embla-carousel-react";
// import ReviewCardItem from "../../ReviewCardItem";

// const EmblaCarousel = (props) => {
//   const { slides, options } = props;
//   const [emblaRef, emblaApi] = useEmblaCarousel(options);
//   const { selectedIndex, scrollSnaps, onDotButtonClick } =
//     useDotButton(emblaApi);

//   return (
//     <section className="embla">
//       <div className="embla__viewport" ref={emblaRef}>
//         <div className="embla__container">
//           {slides.map((index) => (
//             <div className="embla__slide" key={index}>
//               <ReviewCardItem />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="embla__controls">
//         <div className="embla__dots">
//           {scrollSnaps.map((_, index) => (
//             <DotButton
//               key={index}
//               onClick={() => onDotButtonClick(index)}
//               className={"embla__dot".concat(
//                 index === selectedIndex ? " embla__dot--selected" : ""
//               )}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmblaCarousel;
