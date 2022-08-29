import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  MiningFarmDiv,
  MiningFarmWrapper,
  PlayButton,
} from "./MiningFarmStyle";
import RightArrow from "../../assets/icons/right-arrow-icon.svg";

const Miningfarm = () => {
  return (
    <MiningFarmWrapper>
      <MiningFarmDiv width="35%">
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
      </MiningFarmDiv>
      <MiningFarmDiv width="65%">
        <div className="m-bottom">
          Steelhead trumpeter, zingel saury <span> grouper swallower</span>
          threadfin pencilsmelt pufferfish hoki. Unicorn fish salmon shark:
          elasmobranch rohu wasp fish; yellowfin surgeonfish.
        </div>
        <div className="m-bottom">
          Halfbeak, "tiger shark long-finned char gar yellowfin tuna blue
          whiting, cavefish Redfish murray cod." Squirrelfish lungfish gudgeon
          Sevan trout luminous hake bleak bocaccio glassfish gulf menhaden. Chum
          salmon mooneye pleco bango blue-redstripe danio.
        </div>
        <div>
          Driftwood catfish lemon shark arowana; wormfish sailfish sand dab!
          Torpedo rockfish Black swallower snailfish candlefish Kafue pike
          sillago eel Pacific lamprey; king-of-the-salmon slipmouth, javelin,
          "trahira," cavefish. JavaScript is also used in environments that
          aren’t web-based, such as PDF documents
        </div>
      </MiningFarmDiv>
    </MiningFarmWrapper>
  );
};

export default Miningfarm;
