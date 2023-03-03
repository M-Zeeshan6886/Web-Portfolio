import React, { useState } from "react";
import adeelBuxImg from "../../../assets/adeel-bux.png";
import jugaHealthImg from "../../../assets/juga-health.png";
import cookImg from "../../../assets/cook.png";
import vivaWellImg from "../../../assets/vivawell.png";
import bostomImg from "../../../assets/bostom.png";

function BuiltItemContainer() {
  const [image, setImage] = useState(adeelBuxImg);

  const changeImage = (fileName) => {
    switch (fileName) {
      case "adeel-bux.png":
        setImage(adeelBuxImg);
        break;
      case "juga-health.png":
        setImage(jugaHealthImg);
        break;
      case "cook.png":
        setImage(cookImg);
        break;
      case "vivawell.png":
        setImage(vivaWellImg);
        break;
      case "bostom.png":
        setImage(bostomImg);
        break;
      default:
        setImage(adeelBuxImg);
        break;
    }
  };

  return (
    <div className="builtItem-container">
      <div className="builtItem-container-content">
        <div className="builtItem-container-content-left">
          <button onClick={() => changeImage("adeel-bux.png")}>
            01 ADEEL BUX
          </button>
          <button onClick={() => changeImage("juga-health.png")}>
            02 JUGA HEALTH
          </button>
          <button onClick={() => changeImage("cook.png")}>
            03 COOK IN THE NOOK
          </button>
          <button onClick={() => changeImage("vivawell.png")}>
            04 VIVA WELL
          </button>
          <button onClick={() => changeImage("bostom.png")}>05 BOSTOM</button>
        </div>
        <div className="builtItem-container-content-right">
          <img src={image} alt="Project preview" className="image" />
        </div>
      </div>
    </div>
  );
}

export default BuiltItemContainer;
