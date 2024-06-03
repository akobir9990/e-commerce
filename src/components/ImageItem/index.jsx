export default function ImageItem({ item }) {
  return (
    <div className="md:max-h-[220px] max-h-[500px] overflow-hidden md:rounded-2xl rounded-xl flex justify-center">
      <img src={item.imgUrl} alt="" className="w-full" />
    </div>
  );
}
