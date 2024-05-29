import ImageItem from "../imageItem/ImageItem";

export default function OurGalery() {
  return (
    <div>
      <div className="container">
        <h1>Наша галерея</h1>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 md:gap-6 gap-3">
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
          <ImageItem />
        </div>
      </div>
    </div>
  );
}
