import CardItem from "../../components/CardItem";
import Glasses from "../../components/ui/Glasses";
import Hero from "../../components/ui/Hero";
import MapComponent from "../../components/ui/MapComponent";
import Msg from "../../components/ui/Msg";
import OurAdvantages from "../../components/ui/OurAdvantages";
import OurGalery from "../../components/ui/OurGalery";
import Review from "../../components/ui/Review";
import WriteToUs from "../../components/ui/WriteToUs";

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
      <WriteToUs />
    </div>
  );
}
