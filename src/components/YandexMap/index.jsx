import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  FullscreenControl,
} from "@pbe/react-yandex-maps";

const MyMapComponent = () => (
  <Map
    defaultState={{
      center: [55.774527, 37.587093],
      zoom: 18,
    }}
    width="100%"
    height="400px"
  >
    <FullscreenControl
      options={{
        size: "large",
        position: {
          right: 20,
          top: 10,
        },
      }}
    />
    <ZoomControl
      options={{
        size: "small",
        position: {
          left: 20,
          top: 10,
        },
      }}
    />
    <Placemark geometry={[55.774527, 37.587093]} />
  </Map>
);

const YandexMap = () => (
  <YMaps className="w-full">
    <MyMapComponent />
  </YMaps>
);

export default YandexMap;
