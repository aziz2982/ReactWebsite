import styled from "styled-components";

const ServiseSt = styled.div`
  width: 1440px;
  margin: 0 auto;
  margin-top: 50px;
  .opshin {
    display: flex;
    justify-content: space-evenly;
    margin-top: 40px;
  }
  .seviseS {
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 400px;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #373737;
    .chiziq{
        width: 120px;
        height: 2px;
        background: #E5E5E5;
    }
  }
  .we {
    font-weight: 400;
    font-size: 30px;
    line-height: 35px;
    color: #000000;
  }
  .opshin1 {
    width: 300px;
    height: 170px;
    background: #ffffff;
    border-radius: 5px;
    transition: all 0.3s;
    :hover {
      box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.05);
    }
  }
  .opshintext {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }
  .opshinlorem {
    margin-top: 10px;
    font-weight: 300;
    font-size: 17px;
    color: #696161;
  }
`;
export { ServiseSt };
