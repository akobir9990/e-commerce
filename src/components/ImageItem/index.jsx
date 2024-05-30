import img from "../../assets/galery/1.webp";

export default function ImageItem() {
  return (
    <div className="md:max-h-[220px] h-[505px] overflow-hidden md:rounded-2xl rounded-xl">
      <img src={img} alt="" />
    </div>
  );
}
