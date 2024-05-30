import ImageItem from "../../ImageItem";

export default function OurGalery() {
  return (
    <div>
      <div className="container">
        <h1>Наша галерея</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 md:gap-6 gap-3">
          {Array.from({ length: 8 }, (_, idx) => (
            <ImageItem key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
