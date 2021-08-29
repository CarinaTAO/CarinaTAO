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
import Easyclean from '../../assets/img/Easyclean.jpg';
import Valueeats from '../../assets/img/Valueeats.jpg';


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
                            <CardFont type="pjname">Easy Clean</CardFont>
                            <CardFont type="pjrole">Full-stack Developer <br/>Jun 2021 - Aug 2021</CardFont>
                            <CardFont type="pjdetail">Skills: React, HTML5, CSS3, JavaScript ES6, React Boostrap 5, Material UI, React Icon, Flexbox, Redux, React Router, Responsive design
                              Nodejs, JavaScript ES6, npm, MongoDB, Postman, JWT Token, JEST,
                              Agile, Jira, BitBucket, AWS EC2, AWS S3
                            </CardFont>
                          </Col>
                      </Row>                 
                    </Col>

                    <Col sm={7}>
                      <Img src={Easyclean}></Img>
                      <a href="https://www.easy-march.com/" target="_blank">
                        <Button size="sm" children="View Website" ></Button>
                      </a>
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
                            <CardFont type="pjname">Value Eats</CardFont>
                            <CardFont type="pjrole">Frontend Developer <br/>Jun 2021 - Jul 2021</CardFont>
                            <CardFont type="pjdetail">Skills: React, HTML5, CSS3, JavaScript ES6, React Boostrap 5, Material UI, React Icon, Flexbox, Axios, React Router
                              , Django, Python, SQlite3, JWT Token, Agile, Jira, and Github
                            </CardFont>
                          </Col>
                      </Row>                 
                    </Col>

                    <Col sm={7}>
                      <Img src={Valueeats}></Img>
                      <a href="https://github.com/CarinaTAO/ValueEatsWebsite" target="_blank">
                        <Button size="sm" children="View Code"></Button>
                      </a>
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
                            <CardFont type="pjrole">Full-stack Developer <br/>Mar 2021 - Apr 2021</CardFont>
                            <CardFont type="pjdetail">Skills: React, HTML5, CSS3, JavaScript ES6, Flexbox, React Boostrap, React Icon,Formspree, Responsive design
                              Github, VScode, AWS S3
                            </CardFont>
                          </Col>
                      </Row>                 
                    </Col>

                    <Col sm={7}>
                      <Img src={PersonalWeb}></Img>
                      <a href="https://github.com/CarinaTAO/CarinaTAO" target="_blank">
                        <Button size="sm" children="View Code"></Button>
                      </a>
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
