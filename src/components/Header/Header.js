import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  position: sticky;
  width: auto;
  height: 70px;
  align-items: center;
  font-family: poppins-semibold,poppins,sans-serif;
  box-shadow: 0 3px 8px 0 rgb(21 47 95 / 12%);
`;

const Left = styled.div`
  padding-left: 49px;
  font-weight: 800;
  font-size: 25px;
  font-stretch: 25px/1.4em;
`;

const Right = styled.div`
  position: absolute;
  right: 49px;
  display: flex;
  align-items: center;
`;

const NavItem = styled.a`
  margin-left: 40px;
  font-size: 17px;
  padding-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  color:black;
  &:hover{
    content: '';
    color:rgb(24,119,242);
    border-bottom: 3px solid rgb(24,119,242);
    margin-bottom: -3px;
    transition: 0.3s ease-in-out;
  }

  &:active{
    content: '';
    color:rgb(24,119,242);
    border-bottom: 3px solid rgb(24,119,242);
    margin-bottom: -3px;
    transition: 0.3s ease-in-out;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export class Header extends Component {
  render() {
    return (
      <Container>
        <Left> Carina TAO</Left>
        <Right>
          <StyledLink to="/"><NavItem>Home</NavItem></StyledLink>
          <StyledLink to="/resume"><NavItem>Resume</NavItem></StyledLink>
          <StyledLink to="/projects"><NavItem>Projects</NavItem></StyledLink>
          <StyledLink to="/contact"><NavItem>Contact</NavItem></StyledLink>
        </Right>
      </Container>
    )
  }
}

export default Header
