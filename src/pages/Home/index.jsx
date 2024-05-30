import CardItem from "../../components/CardItem";
import Glasses from "../../components/Glasses";
import Hero from "../../components/Hero";
import MapComponent from "../../components/MapComponent";
import Msg from "../../components/Msg";
import OurAdvantages from "../../components/OurAdvantages";
import OurGalery from "../../components/OurGalery";
import Review from "../../components/Review";

export default function Home() {
  return (
    <div>
      <Hero />
      <CardItem />
      <Glasses />
      <Review />
      <OurGalery />
      <OurAdvantages />
      <Msg />
      <MapComponent />
      {/* !! Should be removed */}
      {/* <Banner /> */}
    </div>
  );
}
