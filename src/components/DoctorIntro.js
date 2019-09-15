import React, { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./DoctorIntro.css";
import doctorImage from "../images/doctor.png";

class DoctorIntro extends React.Component {
  render() {
    const {
      name,
      specialization,
      location,
      reviewCount,
      starsGiven,
      desc
    } = this.props.info;
    let starDoms = [];
    let startIndex = 0;
    while (startIndex < starsGiven) {
      starDoms.push(
        <span key={startIndex} className="fa fa-star checked"></span>
      );
      startIndex++;
    }
    while (startIndex < 5) {
      starDoms.push(<span key={startIndex} className="fa fa-star"></span>);
      startIndex++;
    }

    return (
      <Fragment>
        <Row>
          <Col className="image-left">
            <img src={doctorImage} alt="logo" />
          </Col>
          <Col className="intro-right">
            <h4>{name}</h4>
            <span className="profession-text">{specialization}</span>
            <span> | </span>
            <span className="location-text">{location}</span>
            <div className="star-ratings">
              {starDoms}
              <span className="reviews"> ({reviewCount})</span>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="description-bottom">
            <p>{desc}</p>
          </div>
        </Row>
      </Fragment>
    );
  }
}

export default DoctorIntro;
