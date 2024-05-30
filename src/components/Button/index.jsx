export default function Button({ children }) {
  return (
    <div className="bg-primaryColor text-[white] flex justify-center items-center w-full h-10 rounded-lg">
      {children}
    </div>
  );
}
