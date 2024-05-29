import AdvantageItem from "../advantageItem/AdvantageItem";

export default function OurAdvantages() {
  return (
    <div className="bg-[#f7f7f7] py-[40px]">
      <div className="container">
        <h2 className="text-[28px] font-[ptRootUI-400] mb-[22px]">
          Наши преимущества
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-3 mb-4">
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
          <AdvantageItem />
        </div>
      </div>
    </div>
  );
}
