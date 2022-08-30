import AdvantageSection from "./components/AdvantageSection/AdvantageSection";
import BannerInfo from "./components/BannerInfo/BannerInfo";
import BlogSection from "./components/BlogSection/BlogSection";
import CalculatorSection from "./components/CalculatorSection/CalculatorSection";
import { CalculatorBGWrap } from "./components/CalculatorSection/CalculatorSectionStyle";
import ContactUs from "./components/ContactUs/ContactUs";
import DataCenter from "./components/DataCenter/DataCenter";
import DataCenterImages from "./components/DataCenter/DataCenterImages";
import EquipmentSection from "./components/EquipmentSection/EquipmentSection";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { BannerWrap } from "./components/Header/headerStyles";
import Miningfarm from "./components/MiningFarm/Miningfarm";
import MiningPartner from "./components/MiningPartner/MiningPartner";
import MissionSection from "./components/MissioSection/MissionSection";
import PowerMining from "./components/PowerMining/PowerMining";
import PricingPlan from "./components/PricingPlan/PricingPlan";
import PurchaseSection from "./components/PurchaseSection/PurchaseSection";
import QuestionSection from "./components/QuestionSection/QuestionSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import WorldMap from "./components/WorldMap/WorldMap";
import { WorldMapWrapper } from "./components/WorldMap/WorldMapStyle";
import { Container } from "./shared/MainWrapper/Container";
import { MainWrapper } from "./shared/MainWrapper/MainWrapper";

function App() {
  return (
    <Container>
      <BannerWrap>
        <Header />
      </BannerWrap>
      <MainWrapper>
        <BannerInfo />
        <Miningfarm />
        <PricingPlan />
      </MainWrapper>
      <PurchaseSection />
      <MainWrapper>
        <MissionSection />
        <PowerMining />
      </MainWrapper>
      <AdvantageSection />
      <CalculatorBGWrap>
        <CalculatorSection />
      </CalculatorBGWrap>
      <MainWrapper>
        <EquipmentSection />
        <DataCenter />
      </MainWrapper>
      <DataCenterImages />
      <WorldMap />
      <MainWrapper maxWidth='970px'>
        <QuestionSection />
      </MainWrapper>
      <BlogSection />
      <CalculatorBGWrap height='100vh' marginBottom='0'>
        <TestimonialSection />
      </CalculatorBGWrap>
      <MainWrapper>
        <MiningPartner />
      </MainWrapper>
      <ContactUs />

      <Footer />
    </Container>
  );
}

export default App;
