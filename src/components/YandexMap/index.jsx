import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const MyMapComponent = () => (
  <Map
    defaultState={{
      center: [55.774527, 37.587093],
      zoom: 15,
    }}
    width="100%"
    height="400px"
  >
    <Placemark geometry={[55.774527, 37.587093]} />
  </Map>
);

const YandexMap = () => (
  <YMaps className="w-full">
    <MyMapComponent />
  </YMaps>
);

export default YandexMap;
