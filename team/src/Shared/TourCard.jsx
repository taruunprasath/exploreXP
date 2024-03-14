import React from 'react';
import { Card, CardBody } from "reactstrap";
import { Link } from 'react-router-dom';
import "./tour-card.css"; // Assuming you have a CSS file named "tour-card.css" for styling

const TourCard = ({ tour }) => {
  const { id, title, city, photo, featured, avgRating, reviews } = tour;
  return (
    <div className="tour__card">
      <Card>
        <div className="tour__img">
          <img src={photo} alt="tour" />
          {featured && <span>Featured</span>}
        </div>
        <CardBody>
          <div className="card__top d-flex align-items-center justify-content-between">
            <span className="tour__location d-flex align-items-center">
              <i className="ri-map-pin-line"></i>{city}
            </span>
            <span className="tour__rating d-flex align-items-center">
              <i className="ri-star-fill"></i>{avgRating}
            </span>
            <span>({reviews.length})</span>
          </div>
          <h5 className="tour__title"><Link to={`/tours/${id}`}>{title}</Link></h5>
        </CardBody>
      </Card>
    </div>
  );
}

export default TourCard;
