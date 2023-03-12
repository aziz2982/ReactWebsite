import React, { useState } from "react";
import img1 from "../../Assets/imgs/Karusel/1.png";
import img2 from "../../Assets/imgs/Karusel/2.png";
import { KaruselSt } from "./style";

const Karusel = () => {
  const databases = [
    {
      id: 1,
      user1: {
        img: img1,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
      user2: {
        img: img2,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
    },
    {
      id: 2,
      user1: {
        img: img2,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
      user2: {
        img: img1,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
    },
    {
      id: 3,
      user1: {
        img: img1,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
      user2: {
        img: img2,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
    },
    {
      id: 4,
      user1: {
        img: img2,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
      user2: {
        img: img1,
        name: "Mr. Jone Ambrose",
        data: "2022-07-11",
        lorem:
          "“Lorem Ipsum has been the industry by standard dummy text ever to since the 1500s, it’s  type and scrambled it to make a type specimen book. It’s has survived not only five.”",
      },
    },
  ];
  const [words] = useState(databases);
  const [slcwords, setslcwords] = useState(0);

  const onLeft = () => {
    if (slcwords > 0 && databases.length) {
      setslcwords(slcwords - 1);
    }
  };
  const onRight = () => {
    if (slcwords < databases.length - 1 && databases.length) {
      setslcwords(slcwords + 1);
    }
  };
  const Sugar = words[slcwords];
  return (
    <KaruselSt>
      <button onClick={() => onLeft()}>{"<="}</button>
      <div className="KaruselF">
        <img src={Sugar.user1.img} alt="" />
        <div className="KaruselF2">
          <h1> {Sugar.user1.name} </h1>
          <div>{Sugar.user1.data}</div>
          <div>{Sugar.user1.lorem}</div>
        </div>
      </div>

      <div className="KaruselF">
        <img src={Sugar.user2.img} alt="" />
        <div className="KaruselF2">
          <h1> {Sugar.user2.name} </h1>
          <div>{Sugar.user2.data}</div>
          <div>{Sugar.user2.lorem}</div>
        </div>
      </div>
      <button onClick={() => onRight()}>{"=>"}</button>
    </KaruselSt>
  );
};

export default Karusel;
