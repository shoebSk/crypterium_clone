import React from "react";
import { BannerHeader } from "../BannerInfo/BannerStyle";
import {
  MiningFarmDiv,
  MiningFarmWrapper,
} from "../MiningFarm/MiningFarmStyle";
import { DataCenterRes } from "./DataCenterStyle";

const DataCenter = () => {
  return (
    <DataCenterRes>
      <MiningFarmWrapper padding="140px 0 35px 0" className="data-center-res">
        <MiningFarmDiv width="35%" className="data-center-div-res">
          <BannerHeader fontSize="17px" fontWeight="100" marginbottom="0">
            SHOTS OF OUR DATA CENTER
          </BannerHeader>

          <BannerHeader
            fontSize="40px"
            fontWeight="600"
            marginbottom="1rem"
            color="black">
            Our Data center
          </BannerHeader>
        </MiningFarmDiv>
        <MiningFarmDiv width="65%" className="data-center-div-res">
          <div className="m-bottom">
            Data center guarantees trouble-free operation of your equipment,
            control and monitoring for optimal external temperature, humidity,
            dust protection.
          </div>
          <div className="m-bottom">
            Data center is protected from electric voltage jumps and broken
            internet connections. Backuping of power supply systems provides
            hours-long stable functioning of equipment in case if some
            force-majeure circumstances occurs (instability of electric power
            network, industrial network disconnection etc.). a duty engineer
            proceeds to remove defects/failures at once after relevant
            information is received.
          </div>
        </MiningFarmDiv>
      </MiningFarmWrapper>
    </DataCenterRes>
  );
};

export default DataCenter;
