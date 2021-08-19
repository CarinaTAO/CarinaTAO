import styled, { css } from "styled-components";

const Card = styled.div`
  background-color: white;
  margin-top: 20px;
  margin-left: 20%;
  margin-bottom: 50px;
  width: 60%;
  min-height:300px;
  box-shadow: -11.31px 11.31px 17px 0px rgba(138,131,124,0.23);

  ${(props)=>({
    projects:css`
      margin-left: 10%;
      margin-top: 90px;
      width: 80%;
      min-height:400px;
    `,
  }[props.type])}
`;
export default Card;
