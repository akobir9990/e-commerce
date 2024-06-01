import img from "../../assets/galery/1.webp";

export default function ImageItem() {
  return (
    <div className="md:max-h-[220px] max-h-[500px] overflow-hidden md:rounded-2xl rounded-xl flex justify-center">
      <img src={img} alt="" className="w-full" />
    </div>
  );
}
