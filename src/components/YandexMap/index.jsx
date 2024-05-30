import { YMaps, Map } from "@pbe/react-yandex-maps";

const MyMapComponent = () => (
  <Map
    defaultState={{ center: [55.76, 37.64], zoom: 10 }}
    width="100%"
    height="400px"
  />
);

const YandexMap = () => (
  <YMaps className="w-full">
    <MyMapComponent />
  </YMaps>
);

export default YandexMap;
