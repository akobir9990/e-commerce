import EmblaCarousel from "../../Embla/EmblaCarousel";
import CardItem from "../../CardItem";
import { fakeCatalogData } from "./const";

const OPTIONS = { align: "start" };
console.log("fakeCatalogData => ", fakeCatalogData);
export default function Catalog() {
  return (
    <div className="md:py-[30px] py-[100px] bg-secondary">
      <div className="container">
        <h3 className="md:text-28 text-[21px] font-pt-root-ui-medium mb-4">
          Каталог
        </h3>
        <div className="flex justify-between">
          <EmblaCarousel
            fakeCatalogData={fakeCatalogData}
            slides={fakeCatalogData.length}
            options={OPTIONS}
            Content={<CardItem />}
          />
        </div>
      </div>
    </div>
  );
}
