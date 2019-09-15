import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import Appointment from './components/Appointment';
import DoctorIntro from './components/DoctorIntro';
import { profile, calendar } from './data/profile';

class App extends React.Component {

  render() {
      return (
        <Container>
          <Row>
            <Col>
              <DoctorIntro info={profile} />
            </Col>
            <Col>
              <Appointment calendar={calendar} />
            </Col>
          </Row>
        </Container>
    );
  }
}

export default App;
