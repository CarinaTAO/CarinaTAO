import React, { Component } from 'react';
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  border: 2px solid rgb(0,80,255);
  border-radius: 30px;
  padding: 1% 7%;
  background-color: rgb(0,80,255);
  color:white;
  font-size: 17px;
  cursor: pointer;

  &:hover{
    background-color: transparent;
    color:black;
    transition: .4s ease 0s;
  }
`;

const Button = ({children}) =>(

  <StyledButton>{children}</StyledButton>

)



export default Button;
