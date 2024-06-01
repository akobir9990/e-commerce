import Header from "../../components/ui/Header";

export default function Hero() {
  return (
    <div className="bg-hero-bg bg-no-repeat bg-center bg-cover">
      <div className="container">
        <Header />
      </div>
      <div className="container relative">
        <div className="min-h-screen flex flex-col gap-5 text-white md:py-[120px] py-[130px]">
          <h1 className="md:text-64 text-32 leading-[40px] font-pt-root-ui-bold md:leading-[70px]">
            Натуральный стиль и <br /> экологичность очки из дерева
          </h1>
          <p className="max-w-[760px] md:text-2xl text-base md:leading-8 leading-2xl font-pt-root-ui-medium my-4">
            Откройте для себя уникальность деревянных очков. Созданные с заботой
            о природе и вашем комфорте, наши очки - это сочетание инновационного
            дизайна и природных материалов. Каждая пара очков ручной работы
            является отражением вашей любви к планете и стремления к
            оригинальности.
          </p>
          <button className="md:w-[207px] w-full bg-primary px-5 py-2 text-20 text-white flex items-center justify-center rounded-sm font-pt-root-ui-light ">
            Узнать подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
