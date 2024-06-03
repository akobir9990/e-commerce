export default function AdvantageItem({ item }) {
  return (
    <div className="flex items-center gap-2.5 p-3 rounded-md bg-white">
      <img className="size-8" src={item.imgUrl} alt="" />
      <p className="text-[10px]">{item.title}</p>
    </div>
  );
}
