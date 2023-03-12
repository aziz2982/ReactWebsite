import styled from "styled-components";

const AboutCon = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-top: 50px;
  .about1 {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    padding-left: 100px;
    padding-bottom: 20px;
    span {
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
    }
  }
`;

const AboutC = styled.div`
  display: flex;
`;
const MexmonxonaAbout = styled.div`
  flex: 0.9;
  img {
    width: 610px;
  }
`;
const More = styled.div`
  flex: 1.1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  .lorem {
    width: 550px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 17px;
    line-height: 32px;
    color: #373737;
  }
  .aboutImg {
    width: 550px;
    display: flex;
    justify-content: space-between;
  }
  .aboutBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    background: #373737;
    border-radius: 5px;
    color: #fff;
    transition: all .3s;
    cursor: pointer;
    :hover{
      background: #000;
    }
  }
`;

export { AboutCon, AboutC, MexmonxonaAbout, More };
