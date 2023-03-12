import styled from "styled-components";

const Container = styled.div`
  width: 1440px;
  height: 50px;
  padding-left: 20px;
  margin: 0 auto;
  background: #e5e5e5;
  display: flex;
  align-items: center;
  .imgLogo {
    width: 60%;
    img {
      width: 70px;
    }
  }
  .navRight {
    width: 65%;
    display: flex;
    gap: 50px;
  }
  .link {
    color: #000;
    text-decoration: none;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    border-radius: 10px;
    padding: 5px;
    :hover {
      transition: 0.3s;
      background: #373737;
      color: #fff;
    }
  }
  .active {
    font-weight: 900;
    background: #373737;
    color: #fff;
  }
  .Npoisk {
    cursor: pointer;
    img {
      width: 25px;
    }
  }
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: #373737;
  width: 100px;
  height: 30px;
  color: #fff;
  text-align: center;
  border-radius: 5px;
  :hover {
    background: #000;
    border: 1px solid #373737;
  }
`;

export { Container, Button };
