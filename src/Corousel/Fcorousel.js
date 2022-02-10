import { useState } from "react";
import "./Fcorousel.css";
import { images } from "./FcorouselData";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const Fcorousel = (props) => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="FCorousel">
      <div
        className="FCorouselInner"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <ArrowBackIosIcon style={{fontSize:30}}/>
        </div>
        <div className="center"></div>
        <div
          className="right"
          onClick={() => {
            currImg < images.length-1 && setCurrImg(currImg + 1);
          }}
        >
          <ArrowForwardIosIcon style={{fontSize:30}}/>
        </div>
      </div>
    </div>
  );
};

export default Fcorousel;
