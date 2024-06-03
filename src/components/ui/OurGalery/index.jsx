import ImageItem from "../../ImageItem";
import { fakeDataGalery } from "./const";

export default function OurGalery() {
  return (
    <div className="py-12">
      <div className="container">
        <h1 className="text-28 font-pt-root-ui-medium mb-4 text-dark-90">
          Наша галерея
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 grid-rows-2 md:gap-6 gap-3">
          {fakeDataGalery.map((item) => {
            return <ImageItem key={item.id} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}
