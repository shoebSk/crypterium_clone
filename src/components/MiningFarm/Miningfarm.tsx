import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  MiningFarmDiv,
  MiningFarmResponsiveWrapper,
  MiningFarmWrapper,
  PlayButton,
} from "./MiningFarmStyle";
import RightArrow from "../../assets/icons/right-arrow-icon.svg";

const Miningfarm = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <MiningFarmResponsiveWrapper>

    
    <MiningFarmWrapper padding="140px 15px" className="miningFarmMedia" alignItems='center'>
      <MiningFarmDiv
        width="41%"
        data-aos="fade-up"
        className="miningFarmDivMedia">
        {/* <div className="miningFarm_div miningFarm-appear"> */}
        <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
          ABOUT MINIG FARM
        </BannerHeader>

        <BannerHeader
          fontSize="40px"
          fontWeight="600"
          marginbottom="0"
          color="black">
          Crypterium Biggest Mining Farm
        </BannerHeader>

        <PlayButton>
          <img src={RightArrow} alt="RightArrow" />
        </PlayButton>
        {/* </div> */}
      </MiningFarmDiv>
      <MiningFarmDiv width="58%" className="miningFarmDivMedia">
        <div className="m-bottom" data-aos="fade-up">
          Steelhead trumpeter, zingel saury <span> grouper swallower</span>
          threadfin pencilsmelt pufferfish hoki. Unicorn fish salmon shark:
          elasmobranch rohu wasp fish; yellowfin surgeonfish.
        </div>
        <div className="m-bottom" data-aos="fade-up">
          Halfbeak, "tiger shark long-finned char gar yellowfin tuna blue
          whiting, cavefish Redfish murray cod." Squirrelfish lungfish gudgeon
          Sevan trout luminous hake bleak bocaccio glassfish gulf menhaden. Chum
          salmon mooneye pleco bango blue-redstripe danio.
        </div>
        <div data-aos="fade-up">
          Driftwood catfish lemon shark arowana; wormfish sailfish sand dab!
          Torpedo rockfish Black swallower snailfish candlefish Kafue pike
          sillago eel Pacific lamprey; king-of-the-salmon slipmouth, javelin,
          "trahira," cavefish. JavaScript is also used in environments that
          aren’t web-based, such as PDF documents
        </div>
      </MiningFarmDiv>
    </MiningFarmWrapper>
    </MiningFarmResponsiveWrapper>
  );
};

export default Miningfarm;
