import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import styled, { css } from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import CardFont from '../../components/CardFont';
import Button from '../../components/Button';
import PersonalWeb from '../../assets/img/personalweb.jpg';
import ProfileImg from '../../assets/img/profile.jpg';


const PageContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  font-family: Poppins,sans-serif;
  overflow: auto;
`;

const StyledRow = styled(Row)`
  margin-right: 0px;
`;

const StyledCol = styled(Col)`
  background-color: rgb(230,218,206);
  min-height: 700px;
  z-index: 0;
`;


const SideBar = styled.div`
  background-color: rgb(0,80,255);
  width: 10px;
  height: 60px;
  margin-top: 50px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

export class ProjectsPage extends Component {
  render() {
    console.log(PersonalWeb);
    return (
        <div>
        <PageContainer>
          <Header />
          <div margin-right="0">
            <StyledRow margin-right="0">
              <StyledCol>
                <PageHeader children="Projects" size="lg"></PageHeader>
                <Card type="projects">
                  <Row>
                    <Col sm={5}>
                      <Row>
                          <Col sm={1}>
                            <SideBar />
                          </Col>
                          <Col sm={11}>
                            <CardFont type="pjname">Personal Website</CardFont>
                            <CardFont type="pjrole">Owner &nbsp; &nbsp; &nbsp;Mar 2021 - Apr 2021</CardFont>
                            <CardFont type="pjdetail">• Design and develop a personal website.
                              <br/>• Used skills: HTML5, CSS3, SCSS, Javascript, ES6, Bootstrap, Flexbox, Git.
                            </CardFont>
                          </Col>
                      </Row>                 
                    </Col>

                    <Col sm={7}>
                      <Img src={PersonalWeb}></Img>
                      <Button size="sm" children="View Code"></Button>
                    </Col>
                  </Row>
                </Card>

                                <Card type="projects">
                  <Row>
                    <Col sm={5}>
                      <Row>
                          <Col sm={1}>
                            <SideBar />
                          </Col>
                          <Col sm={11}>
                            <CardFont type="pjname">Personal Website</CardFont>
                            <CardFont type="pjrole">Owner &nbsp; &nbsp; &nbsp;Mar 2021 - Apr 2021</CardFont>
                            <CardFont type="pjdetail">• Design and develop a personal website.
                              <br/>• Used skills: HTML5, CSS3, SCSS, Javascript, ES6, Bootstrap, Flexbox, Git.
                            </CardFont>
                          </Col>
                      </Row>                 
                    </Col>

                    <Col sm={7}>
                      <Img src={PersonalWeb}></Img>
                      <Button size="sm" children="View Code"></Button>
                    </Col>
                  </Row>
                </Card>

                
              </StyledCol>
            </StyledRow>
          </div>
          <Footer />
        </PageContainer>
      </div>
    )
  }
}

export default ProjectsPage;
