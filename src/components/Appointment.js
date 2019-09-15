import React from 'react';
import { Modal } from 'react-bootstrap';
import './Appointment.css';

class Appointment extends React.Component {
    render() {
        return (
            <div className="doctor-intro appointment">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>
                            <div>Book your Appointment</div>
                            <div>Timezone: Lisbon + 1</div>
                        </Modal.Title>
                    </Modal.Header>
            
                    <Modal.Body>
                        <p>Dates</p>
                    </Modal.Body>
                </Modal.Dialog>
                <Modal.Dialog>
                    <Modal.Body>
                        <p>Calendar</p>
                    </Modal.Body>
                </Modal.Dialog>
            </div>
        );
    }
}

export default Appointment;
