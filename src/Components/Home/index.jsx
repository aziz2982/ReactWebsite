import React from "react";
import { HomeSt, Sonlar } from "./style";
import ishxona from "../../Assets/imgs/Home/ishxona.svg";
import Body from "../Body";

const Home = () => {
  return (
    <>
      <HomeSt>
        <div className="IshxonaImg">
          <img src={ishxona} alt="" />
          <div>
            <div className="chap"></div>
            <div className="ong">
              <div className="Hcenter">
                <div className="Enjoy">
                  Enjoy your life in our luxurious furniture
                </div>
                <div className="If">
                  If you are looking for a furniture then you have come to the
                  right place.
                </div>
                <div className="button">Order Now</div>
              </div>
            </div>
          </div>
        </div>
        <Sonlar>
          <div className="malumot">
            120 k<span>Furniture Sale</span>
          </div>
          <div className="malumot">
            98 k<span>Review (4.5)</span>
          </div>
          <div className="malumot">
            125
            <span>Furniture Categories</span>
          </div>
        </Sonlar>
      </HomeSt>
      <Body />
    </>
  );
};

export default Home;
