import React, { Component } from 'react';
import { Row, Col, Form, FloatingLabel} from 'react-bootstrap';
import styled, { css } from "styled-components";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { useForm, ValidationError } from '@formspree/react';



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

const StyledFloating = styled(FloatingLabel)`
  margin-top:5%;
  margin-left: 15%;
  width: 70%;
  font-size: 15px;
  background-color: #ecf0f1;
  max-width: 100%;
  border-radius: 30px;
  outline: 0;
`;

const StyledControl = styled(Form.Control)`

  border: hidden;
  width: 100%;
  background-color: #ecf0f1;
  border-radius: 30px;
  outline: 0;

  &:focus{
    outline: 0;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    border: 1px solid #007aff;
    background-color: #ecf0f1;
    z-index: 2;
    color:rgb(17,109,255);
  }
`;



export class ContactPage extends Component {
  render() {
    
    return (
        <div>
        <PageContainer>
          <Header />
          <div margin-right="0">
            <StyledRow margin-right="0">
              <StyledCol>
                <PageHeader children="Contact Me" size="lg"></PageHeader>
                <Card type="contact">
                    
                  <Form 
                    action="https://formspree.io/f/mjvjpqkg"
                    method="POST"
                  >
                    <StyledFloating
                      controlId="floatingInput"
                      label="Name"
                      className="mb-3"
                      
                    >
                      <StyledControl type="text" placeholder="name" name="Name"/>
                    </StyledFloating>

                    <StyledFloating
                      controlId="floatingInput"
                      label="Phone"
                      className="mb-3"
                      
                    >
                      <StyledControl type="text" placeholder="phone" name="Phone"/>
                    </StyledFloating>


                    <StyledFloating
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3"
                      
                    >
                      <StyledControl type="email" placeholder="name@example.com" name="Email"/>
                    </StyledFloating>


                    <StyledFloating
                      controlId="floatingTextarea"
                      label="Message"
                      className="mb-3"
                      
                    >
                      <StyledControl type="textarea" placeholder="Leave a comment here" name="Message" style={{ height: '150px' }} />
                    </StyledFloating>

                    
                    
                    <Button size="lg" variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
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

export default ContactPage;
