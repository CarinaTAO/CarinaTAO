import React, { Component } from 'react';
import styled from "styled-components";
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: auto;
  height: 80px;
  font-family: Poppins,sans-serif;
`;

const Left = styled.div`
  padding-left: 49px;
  font-size: 13px;
`;

const Email = styled.div`
  position: absolute;
  right: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  font-weight: bold;
`;

const Detail = styled.div`
  font-size: 13px;
  font-weight: normal;
  padding-top: 10px;
`;

const Follow = styled.div`
  position: absolute;
  right: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 13px;
  font-weight: bold;
`;

const IconGroup = styled.div`
  font-size: 23px;
  font-weight: normal;
  padding-top: 10px;
`;

const IconItem = styled.a`
  margin: 0 10px;
  cursor: pointer;
  display:inline-block;
  &:hover{
    color:rgb(24,119,242);
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    transition: all .3s ease-in-out;
  }
`;

export class Footer extends Component {
  render() {
    return (
      <Container>
        <Left> © 2021 All rights reserved.<br /> Designed by Carina TAO</Left>
        <Email>Email
          <Detail>carina.tao5@gmail.com</Detail>
        </Email>
        <Follow>Follow
          <IconGroup>
            <IconItem><FaFacebookSquare/></IconItem>
            <IconItem><FaInstagramSquare/></IconItem>
            <IconItem><FaGithubSquare/></IconItem>
            <IconItem><FaLinkedin/></IconItem>
          </IconGroup>
          
        </Follow>
      </Container>
    )
  }
}

export default Footer
