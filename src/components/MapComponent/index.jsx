import YandexMap from "../YandexMap";

export default function MapComponent() {
  return (
    <div>
      <div className="container flex">
        <div className="w-1/2">
          <YandexMap />
        </div>
        <div className="w-1/2">
          <h3>Наши контакты</h3>
          <div>
            <a
              className="text-xl font-pt-root-ui-light"
              href="tel:+7 777 777 77 77"
            >
              +7 777 777 77 77
            </a>
            <a
              className="text-[18px] font-pt-root-ui-light"
              href="mailto:sun_glasses@insales.ru"
            >
              sun_glasses@insales.ru
            </a>
            <p className="text-[16px] font-pt-root-ui-light">
              г Москва, ул 1-я Тверская-Ямская, д 21
            </p>
          </div>
          <div>
            <div>
              <img src="" alt="telegram" />
            </div>
            <div>
              <img src="" alt="vkontakte" />
            </div>
            <div></div>
            <img src="" alt="odnoklasniki" />
          </div>
        </div>
      </div>
    </div>
  );
}
