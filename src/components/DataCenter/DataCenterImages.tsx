import React from "react";
import { LogoImage } from "../Header/headerStyles";
import { DataCenterImageWrpper, DataImagesDiv } from "./DataCenterStyle";

const DataCenterImages = () => {
  return (
    <DataCenterImageWrpper>
      <DataImagesDiv className="first">
        <figure>
          <LogoImage
            width="100%"
            height="100%"
            src="https://demo.artureanec.com/html/crypterium/img/gallery_img/1.jpg"
            alt=""
          />
          {/* <span>Modern Equipment</span> */}
        </figure>
      </DataImagesDiv>
      <DataImagesDiv className="second">
        <figure>
          <LogoImage
            width="100%"
            height="100%"
            src="https://demo.artureanec.com/html/crypterium/img/gallery_img/2.jpg"
            alt=""
          />
          {/* <span>Modern Equipment</span> */}
        </figure>
      </DataImagesDiv>
      <DataImagesDiv className="third">
        <figure>
          <LogoImage
            width="100%"
            height="100%"
            src="https://demo.artureanec.com/html/crypterium/img/gallery_img/3.jpg"
            alt=""
          />
          {/* <span>Modern Equipment</span> */}
        </figure>
      </DataImagesDiv>
      <DataImagesDiv className="fourth">
        <figure>
          <LogoImage
            width="100%"
            height="100%"
            src="https://demo.artureanec.com/html/crypterium/img/gallery_img/4.jpg"
            alt=""
          />
          {/* <span>Modern Equipment</span> */}
        </figure>
      </DataImagesDiv>
      <DataImagesDiv className="fifth">
        <figure>
          <LogoImage
            width="100%"
            height="100%"
            src="https://demo.artureanec.com/html/crypterium/img/gallery_img/5.jpg"
            alt=""
          />
          {/* <span>Modern Equipment</span> */}
        </figure>
      </DataImagesDiv>
    </DataCenterImageWrpper>
  );
};

export default DataCenterImages;
