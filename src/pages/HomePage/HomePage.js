import React, { Component } from 'react';
import styled from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const PageContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  font-size: 15px;
`;

const PageContent = styled.div`
  background-color: rgb(230,218,206);
  top: 80px;
  width: 100%;
  height: 100%;
  overflow: auto;
`;


export class HomePage extends Component {
  render() {
    return (
      <div>
        
        <PageContainer> 
          <Header />
          <PageContent>
            <h1>homepage</h1>
            <h2>homepage</h2>
            <p>aaaaa</p>
          </PageContent>
          
          <Footer />
        </PageContainer>
        
      </div>
    )
  }
}

export default HomePage
