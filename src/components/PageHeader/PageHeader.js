import React, { Component } from 'react';
import { Children } from 'react';
import styled, { css } from "styled-components";

const Header = styled.div`
  margin-top: 5%;
  margin-left: 43%;
`;

const Word = styled.div`
  padding-left: 8px;
  display: inline-block;

  ${(props)=>({
    lg:css`
      font-size: 33px;
      font-weight: 800;
    `,
    sm:css`
      font-size: 15x;
      font-weight: normal;
      color:rgb(115,115,115);
    `,
  }[props.size || "lg"])}
`;

const Square = styled.div`
  background-color: rgb(24,119,242);
  display: inline-block;
  
  ${(props)=>({
    lg: css `
      height: 20px;
      width: 20px;
    `,
    sm: css`
      margin-left: 20%;
      margin-top: 5%;
      height: 10px;
      width: 10px;
    `,
  }[props.size || "lg"])}
`;

const PageHeader = ({ children, size }) => (
    <div>
        
          {(size === 'lg') && (
            <Header>
              <Square />
              <Word>{children}</Word>
            </Header>
          )}

          {(size === 'sm') && (
            <div>
              <Square size="sm" />
              <Word size="sm">{children}</Word>
            </div>
          )}
          

        
      </div>
)


export default PageHeader;


