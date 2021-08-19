import React, { Component } from 'react';
import styled, { css } from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Container, Row, Col} from 'react-bootstrap';
import ProfileImg from '../../assets/img/profile.jpg';
import { FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

const PageContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  font-family: Poppins,sans-serif;
  overflow: auto;
`;

const LeftBack = styled.div`
  background-color: rgb(230,218,206);
  top: 80px;
  width: 100%;
  min-height: 700px;
  z-index: 0;
`;

const RightBack = styled.div`
  top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Card = styled.div`
  background-color: rgb(244,236,230);
  width: 380px;
  height: 500px;
  position: absolute;
  top: 25%;
  right: 56%;
  z-index: 1;
  box-shadow: -11.31px 11.31px 17px 0px rgba(138,131,124,0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  margin-top: 10%;
  border-radius: 150px;
`;

const Name = styled.div`
  font-weight: 800;
  font-size: 25px;
  font-stretch: 25px/1.4em;
  margin-top: 10%;

  ${(props) =>
  ({
    first: css`
      margin-top: 5%;
    `,
    last: css`
      margin-top: 0.5%;
    `,
    title: css`
      margin-top: 8%;
      font-weight: normal;
      font-size: 20px;
      letter-spacing: 0.2em;
    `,
  }[props.type || "first"])}
`;

const Line = styled.div`
  color:rgb(24,119,242);
  border-bottom: 2px solid rgb(24,119,242);
  width:70px;
  margin-top: 5%;
`;

const CardBottom = styled.div`
  background-color: white;
  position: absolute;
  bottom: 0px;
  height: 50px;
  width: 380px;
  /* top: 500px; */
  z-index: 2;
`;

const IconGroup = styled.div`
  font-size: 23px;
  font-weight: normal;
  padding-top: 2px;
  display: flex;
  justify-content: center;
`;

const IconItem = styled.a`
  margin: 0 10px;
  cursor: pointer;
  display:inline-block;
  text-decoration: none;
  color:rgb(59,60,78);
  &:hover{
    color:rgb(24,119,242);
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
    transition: all .3s ease-in-out;
  }
`;

const StyledRow = styled(Row)`
  margin-right: 0px;
`;

const Text = styled.span`
  font-weight: 700;
  margin-left: 50px;
  ${(props)=>({
    hello:css `
      margin-top: 100px;
      font-size: 80px;
      font-stretch: 100px/1.4em;

    `,
    intro:css`
      font-size: 20px;
    `,
    detail: css`
      padding-top: 30px;
      font-weight: normal;
      font-size: 17px;
    `,
  }[props.type || 'detail'])}
`;


export class HomePage extends Component {
  render() {
    return (
      <div>
        
        <PageContainer> 
          <Header />

          <div margin-right="0">
            <StyledRow margin-right="0">
              <Col sm={5}>
                <LeftBack>
                  <Card>
                    <Img src={ProfileImg}></Img>
                    <Name type="first">Hanrui</Name>
                    <Name type="last">TAO</Name>
                    <Line />
                    <Name type="title">Frontend Developer</Name>
                    <CardBottom>
                      <IconGroup>
                        <IconItem><FaFacebookSquare/></IconItem>
                        <IconItem><FaInstagramSquare/></IconItem>
                        <IconItem><FaGithubSquare/></IconItem>
                        <IconItem><FaLinkedin/></IconItem>
                      </IconGroup>
                    </CardBottom>
                  </Card>
                  
                </LeftBack>
                
              </Col>
              <Col sm={7}>
                <RightBack>
                  <Text type="hello">HELLO</Text>
                  <Text type="intro">Here's who I am {`&`} what I do</Text>
                  <Text type="detail">A passion Web Developer who has experience
                    in decreasing development time by writing clean, stable, 
                    and scalable code for the business. I am also an active learner who always 
                    likes to learn and share my knowledge with others. 
                    Most importantly I am very good at collaborating and communicating with others, 
                    especially in Agile/Scrum teams..</Text>
                </RightBack>
              </Col>
            </StyledRow>
            
          </div>

          <Footer />
        </PageContainer>
        
      </div>
    )
  }
}

export default HomePage
