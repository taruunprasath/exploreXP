import React from 'react'
import '../Shared/newsletter.css';
import Image from '../Assets/teamwork.png';

import { Container, Row, Col } from 'reactstrap';

const Newsletter = () => {
  return <section className="newsletter">
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>Subscribe to Useful Traveling Tips</h2>

                    <div className="newsletter__input">
                        <input type="email" placeholder="Enter your email" />
                        <button id="button2" className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>Most people agree travelling is a good thing. People think it’s exciting, almost invigorating to travel. Travelling is the best way to learn new things, whether it be a new language or new culture because you’re experiencing it first hand instead of just reading or looking at pictures.</p>
                </div>
            </Col>
            <Col lg="6">
                <div className="newsletter__img">
                    <img src={Image} alt=''/>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter
