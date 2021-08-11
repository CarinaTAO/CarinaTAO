import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: auto;
  height: 80px;
  font-size: 13px;
`;

const Left = styled.div`
  padding-left: 49px;
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Left> © 2021 All rights reserved.<br /> Designed by Carina TAO</Left>
        
      </Container>
    )
  }
}

export default Footer
