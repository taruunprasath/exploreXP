import React from 'react'
import '../Styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import Subtitle from '../Shared/Subtitle';
import Suitcase from '../Assets/suitcase.png';
import heroImg from '../Assets/heroImg.jpg';
import heroImg2 from '../Assets/heroImg2.jpg';
import heroVideo from '../Assets/heroVideo.mp4';
import Search from '../Shared/Search';
import FeaturedTourList from '../Featured-tours/FeaturedTourList';
import Newsletter from '../Shared/Newsletter';

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Let's Go"}/>
                  <img src={Suitcase} alt=''/>
                </div>
                <h1>Life is either a daring <span className="highlight">Adventure</span> or nothing at all</h1>
                <p>Traveling is an adventure that unveils the beauty of new places, cultures, and experiences. 
                  It's a journey of discovery, where every moment holds the promise of something extraordinary.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=""/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" muted autoPlay loop/>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg2} alt=""/>
              </div>
            </Col>
            <Search />
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'}/>
              <h2 className="featured__tour-title">Our Amazing Tours </h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  )
}

export default Home
