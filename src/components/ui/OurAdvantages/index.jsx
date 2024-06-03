import AdvantageItem from "../../AdvantageItem";
import { fakeAdvantageData } from "./const";

export default function OurAdvantages() {
  return (
    <div className="bg-secondary py-10">
      <div className="container">
        <h2 className="text-28 font-pt-root-ui-regular mb-[22px]">
          Наши преимущества
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 gap-3 mb-4">
          {fakeAdvantageData.map((item) => {
            return <AdvantageItem item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
}
