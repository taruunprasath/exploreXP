import React from 'react';
import '../Styles/tour-details.css';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tours from '../Assets/data/tour.js';

const TourDetails = () => {
  const { id } = useParams();


  const tour = tours.find(tour => tour.id === id);

  if (!tour) {
    return alert("Not Found");
  }

  const { photo, title, desc, city, address, avgRating } = tour;

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className="d-flex align-items-center gap-1">
                      <i className="ri-star-s-fill" style={{ color: "var(--secondary-color)" }}></i>
                      {avgRating}
                    </span>
                    <span>
                      <i className="ri-map-pin-fill"></i>{address} 
                    </span>
                  </div>
                  <div className="tour_extra-details">
                    <span><i className="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default TourDetails;
