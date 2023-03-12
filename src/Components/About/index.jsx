import React from "react";
import { AboutC, AboutCon, MexmonxonaAbout, More } from "./style";
import mexmonxona from "../../Assets/imgs/About/mexmonxona.svg";
import amazon from '../../Assets/imgs/About/amazon.svg'
import alibaba from '../../Assets/imgs/About/alibaba.svg'
import group from '../../Assets/imgs/About/group.svg'

const About = () => {
  return (
    <AboutCon >
      <div className="about1">
        <p>Learn about us</p>
        <span>It’s short title here</span>
      </div>
      <AboutC>
         <MexmonxonaAbout>
          <img src={mexmonxona} alt="mexmonxona" />
         </MexmonxonaAbout>
        <More>
          <div className="lorem">
            Lorem Ipsum has been the industry's standard dummy text ever to
            since the 1500s, type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting. type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting
          </div>
          <div className="aboutBtn">More about us</div>
          <div className="aboutImg">
            <div>
                <img src={amazon} alt="amazon" />
            </div>
            <div>
                <img src={alibaba} alt="alibaba" />
            </div>
            <img src={group} alt="group" />
          </div>
        </More>
      </AboutC>
    </AboutCon>
  );
};

export default About;
