import AdvantageItem from "../../AdvantageItem";

export default function OurAdvantages() {
  return (
    <div className="bg-secondary py-10">
      <div className="container">
        <h2 className="text-28 font-pt-root-ui-regular mb-[22px]">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 mb-4">
          {Array.from({ length: 6 }, (_, idx) => (
            <AdvantageItem key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
