import React, {Component} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import  { FirebaseContext } from './data/firebase';
import Appointment from './components/Appointment';
import DoctorIntro from './components/DoctorIntro';
import { profile, schedules } from './data/profile';

class App extends Component {
  componentWillMount() {
    
    // const database = firebase.database();
    // var userId = firebase.auth().currentUser.uid;
    // return firebase.database().ref('/schedules/' + userId).once('value').then(function(snapshot) {
    //   // var username = (snapshot.val() && snapshot.val().username) || 'Anonymous';
    //   // ...
    //   console.log(snapshot);
    // });
  }

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

export default App;
