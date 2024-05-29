export default function Button({ children }) {
  return (
    <div className="bg-primaryColor text-[white] flex justify-center items-center w-[100%] h-[40px] rounded-lg">
      {children}
    </div>
  );
}
