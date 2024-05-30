import CardItem from "../../CardItem";

export default function Catalog() {
  return (
    <div className="py-[60px] bg-[#f7f7f7]">
      <div className="container">
        <h3 className="text-[28px] font-pt-root-ui-regular mb-4">Каталог</h3>
        <div className="content">
          <div className="flex justify-between">
            {Array.from({ length: 5 }, (_, idx) => (
              <CardItem key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
