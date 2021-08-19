import React, { Component } from 'react';
import styled, { css } from "styled-components";
import {Row, Col} from 'react-bootstrap';

const Card = styled.div`
  background-color: white;
  margin-top: 20px;
  margin-left: 20%;
  margin-bottom: 50px;
  width: 60%;
  min-height:300px;
  box-shadow: -11.31px 11.31px 17px 0px rgba(138,131,124,0.23);
`;


// const Card = ({ children }) => (
//     <div>
//       <Container>
//         <Col sm={5}>
//           <h2>pro1</h2>
//         </Col>
//         <Col sm={7}>
//           <h3>mmmmmmm</h3>
//         </Col>
//       </Container>
//     </div>
// )
export default Card;
