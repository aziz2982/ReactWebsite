import styled from "styled-components";

const KaruselSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  .KaruselF {
    display: flex;
    margin-left: 20px;
    margin-right: 20px;
    background: #f9f9f9;
    border-radius: 5px;
  }
  .KaruselF2 {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 200px;
    margin-left: 20px;
  }
`;
export { KaruselSt };
