export default function ReviewCardItem({ item }) {
  return (
    <div className="w-[500px] mt-10 pt-[30px] px-[30px] pb-5 bg-white rounded-2xl">
      <h3 className="text-2xl font-pt-root-ui-medium mb-2">{item.name}</h3>
      <p className="text-base font-pt-root-ui-light text-dark-60">
        {item.comment}
      </p>
    </div>
  );
}
