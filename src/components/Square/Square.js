import React, { Component } from 'react';
import styled, { css } from "styled-components";

const Square = styled.div`
  background-color: rgb(24,119,242);
  display: inline-block;
  
  ${(props)=>({
    lg: css `
      height: 20px;
      width: 20px;
    `,
    sm: css`
      height: 2px;
      width: 2px;
    `,
  }[props.size || "lg"])}
`;


export default Square;
