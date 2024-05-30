import img from "../../assets/icons/bigAssortimenteOfColors.webp";

export default function AdvantageItem() {
  return (
    <div className="flex items-center gap-2.5 p-3 rounded-md bg-white">
      <img className="size-8" src={img} alt="" />
      <p className="">Большой ассортимент цветов</p>
    </div>
  );
}
