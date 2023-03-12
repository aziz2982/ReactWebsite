import styled from "styled-components";

const HomeSt = styled.div`
  width: 1440px;
  margin: 0 auto;
  .IshxonaImg {
    position: relative;
  }
  .chap {
    position: absolute;
    top: 1px;
    width: 300px;
    height: 760px;
    background: rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(15px);
  }
  .ong {
    position: absolute;
    top: 160px;
    left: 300px;
    width: 1141px;
    height: 300px;
    background: linear-gradient(
      112.8deg,
      rgba(207, 207, 207, 0.26) 0%,
      rgba(207, 207, 207, 0.06) 92.87%
    );
    backdrop-filter: blur(15px);
  }
  .Hcenter {
    width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 400px;
    margin-top: 50px;
    gap: 10px;
    .Enjoy {
      font-family: "Revalia";
      font-weight: 400;
      font-size: 36px;
      text-align: center;
      line-height: 45px;
    }
    .If {
      font-family: "Roboto";
      font-weight: 400;
      font-size: 20px;
      color: #fff;
      text-align: center;
      line-height: 23px;
    }
    .button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 30px;
      background: #373737;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s;
      :hover {
        background: #000;
        border: 1px solid #373737;
      }
    }
  }
`;

const Sonlar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 40px;
  gap: 100px;
  .malumot {
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
    }
  }
`;
export { HomeSt, Sonlar };
