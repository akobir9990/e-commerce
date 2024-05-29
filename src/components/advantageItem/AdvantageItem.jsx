import img from "../../assets/advantages/bigAssortimenteOfColors.webp";

export default function AdvantageItem() {
  return (
    <div className="flex items-center gap-[10px] p-3 rounded-md bg-[white]">
      <img className="w-8 h-8" src={img} alt="" />
      <p className="text">Большой ассортимент цветов</p>
    </div>
  );
}
