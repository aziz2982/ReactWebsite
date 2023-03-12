import styled from "styled-components";

const FooterSt = styled.div`
  width: 1440px;
  height: 346px;
  background: #373737;
  display: flex;
  justify-content: space-evenly;
  .FooterF {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 100px;
    .btn {
      width: 171px;
      height: 39px;
      border-radius: 5px;
      background: #fff;
      color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover{

      }
    }
  }
  .FooterH {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #ffffff;
    cursor: pointer;
    :hover {
      opacity: 0.33;
    }
  }
  .H {
    margin-top: 20px;
    input {
      width: 171px;
      height: 40px;
      background: #ffffff;
      border-radius: 5px;
      outline: none;
      padding-left: 10px;
    }
    button {
      width: 56px;
      height: 40px;
      background: #ffffff;
      border-radius: 5px;
      border: none;
      margin-left: 10px;
      cursor: pointer;
    }

  }
  .FooterS {
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
    cursor: pointer;

  }
`;

export { FooterSt };
