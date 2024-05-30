import ImageItem from "../../ImageItem";

export default function OurGalery() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-[28px] font-pt-root-ui-medium mb-4 text-dark-90">
          Наша галерея
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 md:gap-6 gap-3">
          {Array.from({ length: 8 }, (_, idx) => (
            <ImageItem key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
