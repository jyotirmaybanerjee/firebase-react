import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Appointment from './Appointment';
import DoctorIntro from './DoctorIntro';
import { profile, schedules } from './data/profile';

class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <DoctorIntro info={profile} />
          </Col>
          <Col>
            <Appointment calendar={schedules} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
