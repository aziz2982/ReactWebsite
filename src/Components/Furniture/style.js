import styled from "styled-components";

const FurnitureStyle = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-top: 50px;
`;

const FurnitureSt = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
`;
const FurnitureCon = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 258px;
  height: 338px;
  left: 141px;
  top: 2519px;
  background: #f9f9f9;
  box-shadow: 8px 8px 20px rgba(39, 39, 43, 0.1);
  border-radius: 5px;
  transition: all 0.5s;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
  .flex {
    display: flex;
    gap: 70px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #373737;
  }
  .furnituremalumot {
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #696161;
    margin-top: 10px;
  }
  .furniturebtn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    width: 101px;
    height: 40px;
    background: #373737;
    border-radius: 5px;
    color: #fff;
    margin-top: 20px;
  }
`;

const PoiskSt = styled.div`
  margin-bottom: 30px;
  input {
    width: 267px;
    height: 50px;
    background: #efefef;
    border-radius: 5px;
    border: none;
    outline: none;
    padding-left: 20px;
    font-weight: 400;
    font-size: 20px;
    line-height: 18px;
    color: #686868;
  }
  .link {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #686868;
    opacity: 0.7;
  }
  .active {
    color: #000;
    opacity: 1;
  }
  .poisk {
    display: flex;
    gap: 50px;
  }
`;

export { FurnitureSt, FurnitureCon, PoiskSt, FurnitureStyle };
