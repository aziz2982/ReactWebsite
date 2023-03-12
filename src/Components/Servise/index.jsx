import React from "react";
import { ServiseSt } from "./style";
import moshina from "../../Assets/imgs/Settings/moshina.svg";
import nishon from "../../Assets/imgs/Settings/nishon.svg";
import pitichka from "../../Assets/imgs/Settings/ptichka.svg";

const Servise = () => {
  return (
    <ServiseSt>
      <div>
        <div className="we">We provide that service</div>
       <div className="seviseS"> <div className="chiziq"></div> It is a long established fact that a reader will be distracted by the
        service.</div>
      </div>
      <div className="opshin">
        <div className="opshin1">
          <img src={moshina} alt="moshina" />
          <div className="opshintext">Free Delevary</div>
          <div className="opshinlorem">
            It is a long established fact that a reader will be the service.
          </div>
        </div>
        <div className="opshin1">
          <img src={nishon} alt="nishon" />
          <div className="opshintext">100% Guarnatee</div>
          <div className="opshinlorem">
            It is a long established fact that a reader will be the service.
          </div>
        </div>
        <div className="opshin1">
          <img src={pitichka} alt="pitichka" />
          <div  className="opshintext">Best Quality</div>
          <div className="opshinlorem">
            It is a long established fact that a reader will be the service.
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </ServiseSt>
  );
};

export default Servise;
