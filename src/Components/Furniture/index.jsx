import React, { useState } from "react";
import { FurnitureM, Poisk } from "../../Mock";
import { FurnitureSt, FurnitureCon, PoiskSt, FurnitureStyle } from "./style";

const Furniture = () => {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("all");
  const [active, setActive] = useState(Poisk[0].name);
  const onFilter = (id) => {
    if (option === "all") {
      return true;
    } else {
      return id === option;
    }
  };
  return (
    <FurnitureStyle>
      <PoiskSt>
        <div className="poisk">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Search a furniture"
          />
          {Poisk.map((v) => {
            return (
              <div
                onClick={() => setActive(v.name)}
                className={active === v.name ? "active link" : "link"}
              >
                {v.name}
              </div>
            );
          })}

          <select onChange={(e) => setOption(e.target.value)} name="" id="">
            <option value="all">All</option>
            {FurnitureM.map((v) => (
              <option value={v.id}>{v.id}</option>
            ))}
          </select>
        </div>
      </PoiskSt>

      <FurnitureSt>
        {FurnitureM.map(
          (v) =>
            v.name.toLowerCase().includes(input.toLowerCase()) &&
            onFilter(v.id) && (
              <FurnitureCon>
                <div>
                  <img src={v.img} alt="rasmbor" />
                </div>
                <div className="flex">
                  <div>{v.name}</div>
                  <div>{v.narxi}</div>
                </div>
                <div className="furnituremalumot">{v.malumot}</div>
                <div className="furniturebtn">Order Now</div>
              </FurnitureCon>
            )
        )}
      </FurnitureSt>
    </FurnitureStyle>
  );
};

export default Furniture;
