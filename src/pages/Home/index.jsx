import Glasses from "../../components/ui/Glasses";
import MapComponent from "../../components/ui/MapComponent";
import Msg from "../../components/ui/Msg";
import OurAdvantages from "../../components/ui/OurAdvantages";
import OurGalery from "../../components/ui/OurGalery";
import Review from "../../components/ui/Review";
import WriteToUs from "../../components/ui/WriteToUs";
import Footer from "../../components/ui/Footer";
import StickyFooter from "../../components/ui/StickyFooter";
import Hero from "./Hero";
import Catalog from "../../components/ui/Catalog";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
      <Glasses />
      <Review />
      <OurGalery />
      <OurAdvantages />
      <Msg />
      <MapComponent />
      <WriteToUs />
      <Footer />
      <StickyFooter />
    </>
  );
}
