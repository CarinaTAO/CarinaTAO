import styled, { css } from "styled-components";

const CardFont = styled.div`
  color:rgb(115,115,115);
  font-size: 20px;
  font-weight: 800;
  ${(props)=> ({
    time:css`
      margin-left: 10%;
      margin-top: 20%;
      color: rgb(0,80,255);

    `,
    title:css`
      padding-top: 5%;
      padding-left: 10%;
      font-size: 17px;
      font-weight: normal;
    `,
    detail:css`
      padding:5% 10%;
      font-size: 17px;
      font-weight: normal;
    `,
    skill:css `
      margin-left: 10%;
      margin-top: 10%;
      color: rgb(0,80,255);
    `,
    pjname:css`
      color: rgb(0,80,255);
      margin-left: 3%;
      margin-top: 15%;
    `,
    pjrole:css`
      margin-top: 2%;
      margin-left: 3%;
      font-size: 17px;
      font-weight: normal;
    `,
    pjdetail:css`
      padding:5% 3%;
      font-size: 17px;
      font-weight: normal;
    `,
  }[props.type || "time"])}
`;
export default CardFont;
