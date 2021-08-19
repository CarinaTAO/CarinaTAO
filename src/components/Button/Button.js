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

  ${(props)=> ({
    sm:css`
      border: 2px solid rgb(0,80,255);
      border-radius: 30px;
      margin-left: 40%;
      padding: 1% 3%;
      font-size: 13px;

    `,

  }[props.sizeprops])}
`;

const Button = ({children, size}) =>(

  <StyledButton sizeprops={size}>{children}</StyledButton>

)



export default Button;
