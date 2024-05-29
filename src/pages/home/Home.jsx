import CardItem from "../../components/cardItem/CardItem";
import Glasses from "../../components/glasses/Glasses";
import Hero from "../../components/hero/Hero";
import Msg from "../../components/msg/Msg";
import OurAdvantages from "../../components/ourAdvantages/OurAdvantages";
import OurGalery from "../../components/ourGalery/OurGalery";
import Review from "../../components/review/Review";

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
    </div>
  );
}
