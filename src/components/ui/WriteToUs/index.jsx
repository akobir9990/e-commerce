export default function index() {
  return (
    <div>
      <div className="container grid justify-center items-center py-10">
        <div className="max-w-[680px]">
          <h1 className="text-28 font-pt-root-ui-regular mb-[30px] text-center">
            Напишите нам
          </h1>
          <form action="#" className="w-full">
            <input
              type="text"
              name=""
              id=""
              placeholder="Имя*"
              className="w-full h-[50px] rounded-md px-2.5 py-2.5 bg-secondary focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none] mb-8"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Телефон"
              className="w-full h-[50px] rounded-md px-2.5 py-2.5 bg-secondary focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none] mb-8"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Почта*"
              className="w-full h-[50px] rounded-md px-2.5 py-2.5 bg-secondary focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none] mb-8"
            />
            <textarea
              name=""
              id=""
              placeholder="Комментарий"
              className="w-full h-[115px] rounded-md px-2.5 py-2.5 bg-secondary focus:outline focus:outline-2 focus:outline-[#ededed] border border-[#ededed] focus:border-[none] resize-none mb-8"
            ></textarea>
            <div className="w-full flex justify-center">
              <button
                className="max-w-[250px] max-h-[50px] bg-primary text-white flex justify-center items-center w-full h-10 rounded-lg"
                type="submit"
              >
                Отправить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
