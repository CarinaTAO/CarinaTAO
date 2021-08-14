import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export class ResumePage extends Component {
  render() {
    return (

        // <Container>
        //   <Row className="mb-3">
        //     <Col sm={8}>sm=8</Col>
        //     <Col sm={4}>sm=4</Col>
        //   </Row>
        //   <Row>
        //     <Col sm>sm=true</Col>
        //     <Col sm>sm=true</Col>
        //     <Col sm>sm=true</Col>
        //   </Row>
        // </Container>
      
        <Container>
            <Row>
              <Col>
                aaaaa
              </Col>

              <Col xs={5}>
                bbbbb
              </Col>
              </Row>
        </Container>

    )
  }
}

export default ResumePage
