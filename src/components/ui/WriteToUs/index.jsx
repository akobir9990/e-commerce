export default function index() {
  return (
    <div>
      <div className="container grid justify-center items-center py-10">
        <div className="w-[680px] grid justify-center itecen ">
          <h1 className="text-[28px] font-pt-root-ui-regular mb-[30px] text-center">
            Напишите нам
          </h1>
          <form action="#" className="grid w-full gap-8">
            <input
              type="text"
              name=""
              id=""
              placeholder="Имя*"
              className="w-[680px] h-[50px] rounded-md px-2.5 py-2.5 bg-[#f7f7f7] focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none]"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Телефон"
              className="w-[680px] h-[50px] rounded-md px-2.5 py-2.5 bg-[#f7f7f7] focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none]"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Почта*"
              className="w-[680px] h-[50px] rounded-md px-2.5 py-2.5 bg-[#f7f7f7] focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none]"
            />
            <textarea
              name=""
              id=""
              placeholder="Комментарий"
              className="w-[680px] h-[115px] rounded-md px-2.5 py-2.5 bg-[#f7f7f7] focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none] resize-none"
            ></textarea>
            <button
              className="max-w-[250px] max-h-[50px] bg-primaryColor text-white flex justify-center items-center w-full h-10 rounded-lg"
              type="submit"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
