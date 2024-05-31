export default function Button({ children, style, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary text-white flex justify-center items-center w-full h-10 rounded-lg ${style}`}
    >
      {children}
    </button>
  );
}
