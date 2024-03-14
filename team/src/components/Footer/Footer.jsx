import React from 'react'
import './footer.css';

import { Container, Row, Col } from 'reactstrap';
import Logo from '../../Assets/logo2.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
  <footer className="footer">
    <Container>
      <Row>
        <Col lg="3">
          <div className="Logo">
            <img src={Logo} alt=''/>
            <p>Traveling is about exploring new places, cultures, and experiences. It's a journey of discovery and enrichment, where every moment is filled with wonder and possibility.
            </p>
            <div className="social__links d-flex align-items-center gap-4">
              <span>
                <Link to='#'><i class="ri-instagram-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-linkedin-box-fill"></i></Link>
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </footer>
  )
}

export default Footer
