import React, { Component } from 'react';
import { Row, Col} from 'react-bootstrap';
import styled, { css } from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import CardFont from '../../components/CardFont';
import Button from '../../components/Button';
import CV from '../../assets/file/HanruiTAO.pdf';

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

const SecondHeader = styled.div`
  margin-left: 40%;
  margin-top: 6%;
  font-size: 24px;
  font-weight: 800;
`;

const CVButton = styled.div`
  margin-left: 30%;
  margin-top: 6%;
`;

const SkillRight = styled.div`
  margin-top: 20%;
`;

export class ResumePage extends Component {
  render() {
    return (
        <div>
        <PageContainer> 
          <Header />
          <div margin-right="0">
            <StyledRow margin-right="0">
              <StyledCol>
                <PageHeader children="Resume" size="lg"></PageHeader>
                <Row>
                  <Col xs={6}>
                    <SecondHeader>Experience</SecondHeader>
                  </Col>
                  
                  <Col xs={6}>
                    <CVButton>
                      <a href={CV} target="_blank" rel="noopener noreferrer" download>
                        <Button children="Download CV"></Button>
                      </a>
                    </CVButton>
                  </Col>
                </Row>
                

                <Card>
                  <Row>
                    <Col sm={5}>
                      <CardFont>2019 - 2020</CardFont>
                      <CardFont type="title">Kaggle Competition: <br />Forecast Rossmann Store Sales</CardFont>
                    </Col>
                    
                    <Col sm={7}>
                      <CardFont type="detail">• Extract 1017209 pieces of data which are about the store, promotion, and competitor data; Responsible for the data
                        cleaning and data analysis.<br/>
                        • Build three different Machine Learning algorithms models and an ensemble learning model to fit and train the train
                        data set; <br/>
                        • Forecast store sales by using different models.
                        Analyze results and find that using the ensemble learning model can get a better result that is more precise and
                        generalized; Also get a good score in this Kaggle competition.
                        </CardFont>
                    </Col>
                  </Row>
                </Card>

                 <Card>
                  <Row>
                    <Col sm={5}>
                      <CardFont>2019 - 2020</CardFont>
                      <CardFont type="title">Kaggle Competition: <br />Forecast Rossmann Store Sales</CardFont>
                    </Col>
                    
                    <Col sm={7}>
                      <CardFont type="detail">• Extract 1017209 pieces of data which are about the store, promotion, and competitor data; Responsible for the data
                        cleaning and data analysis.<br/>
                        • Build three different Machine Learning algorithms models and an ensemble learning model to fit and train the train
                        data set; <br/>
                        • Forecast store sales by using different models.
                        Analyze results and find that using the ensemble learning model can get a better result that is more precise and
                        generalized; Also get a good score in this Kaggle competition.
                        </CardFont>
                    </Col>
                  </Row>
                </Card>

                <Col xs={6}>
                    <SecondHeader>Education</SecondHeader>
                </Col>
                
                <Card>
                  <Row>
                    <Col sm={5}>
                      <CardFont>2019 - 2020</CardFont>
                      <CardFont type="title">Kaggle Competition: <br />Forecast Rossmann Store Sales</CardFont>
                    </Col>
                    
                    <Col sm={7}>
                      <CardFont type="detail">• Extract 1017209 pieces of data which are about the store, promotion, and competitor data; Responsible for the data
                        cleaning and data analysis.<br/>
                        • Build three different Machine Learning algorithms models and an ensemble learning model to fit and train the train
                        data set; <br/>
                        • Forecast store sales by using different models.
                        Analyze results and find that using the ensemble learning model can get a better result that is more precise and
                        generalized; Also get a good score in this Kaggle competition.
                        </CardFont>
                    </Col>
                  </Row>
                </Card>

                 <Card>
                  <Row>
                    <Col sm={5}>
                      <CardFont>2019 - 2020</CardFont>
                      <CardFont type="title">Kaggle Competition: <br />Forecast Rossmann Store Sales</CardFont>
                    </Col>
                    
                    <Col sm={7}>
                      <CardFont type="detail">
                        • Extract 1017209 pieces of data which are about the store, promotion, and competitor data; Responsible for the data
                        cleaning and data analysis.<br/>
                        • Build three different Machine Learning algorithms models and an ensemble learning model to fit and train the train
                        data set; <br/>
                        • Forecast store sales by using different models.
                        Analyze results and find that using the ensemble learning model can get a better result that is more precise and
                        generalized; Also get a good score in this Kaggle competition.
                        </CardFont>
                    </Col>
                  </Row>
                </Card>

                <Col xs={6}>
                    <SecondHeader>Skills</SecondHeader>
                </Col>
                <Card>
                  <Row>
                    <Col xs={6}>
                      <CardFont type="skill">Python</CardFont>
                      <PageHeader children="Pandas" size="sm"></PageHeader>
                      <PageHeader children="Scikit-Learn" size="sm"></PageHeader>
                      <PageHeader children="Jupyter" size="sm"></PageHeader>      
                      <PageHeader children="PyTorch " size="sm"></PageHeader>
                    </Col>
                    <Col xs={6}>
                      <SkillRight>
                        <PageHeader children="Numpy" size="sm"></PageHeader>
                        <PageHeader children="Tensorflow + Keras " size="sm"></PageHeader>
                        <PageHeader children="OpenCV" size="sm"></PageHeader>
                      </SkillRight>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6}>
                      <CardFont type="skill">Web Development</CardFont>
                      <PageHeader children="Javascript" size="sm"></PageHeader>
                      <PageHeader children="React" size="sm"></PageHeader>
                      <PageHeader children="MongoDB" size="sm"></PageHeader>
                      <PageHeader children="Axios" size="sm"></PageHeader>
                      <PageHeader children="Git" size="sm"></PageHeader>     
                      <PageHeader children="Github" size="sm"></PageHeader>
                      <PageHeader children="Jira" size="sm"></PageHeader> 
                    </Col>
                    <Col xs={6}>
                      <SkillRight>
                        <PageHeader children="HTML + SASS/CSS" size="sm"></PageHeader>
                        <PageHeader children="Node.JS " size="sm"></PageHeader>
                        <PageHeader children="Amazon Web Services" size="sm"></PageHeader>
                        <PageHeader children="Redux" size="sm"></PageHeader>
                        <PageHeader children="Postman" size="sm"></PageHeader>
                        <PageHeader children="Bitbucket" size="sm"></PageHeader>
                        <PageHeader children="Agile" size="sm"></PageHeader>
                      </SkillRight>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6}>
                      <CardFont type="skill">Languages</CardFont>
                      <PageHeader children="Javascript" size="sm"></PageHeader>
                      <PageHeader children="Python" size="sm"></PageHeader>
                      <PageHeader children="C" size="sm"></PageHeader>
                      <PageHeader children="HTML" size="sm"></PageHeader>
                    </Col>
                    <Col xs={6}>
                      <SkillRight>
                        <PageHeader children="PostgreSQL/SQLite3" size="sm"></PageHeader>
                        <PageHeader children="C++" size="sm"></PageHeader>
                        <PageHeader children="SASS/CSS" size="sm"></PageHeader>
                        
                      </SkillRight>
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

export default ResumePage
