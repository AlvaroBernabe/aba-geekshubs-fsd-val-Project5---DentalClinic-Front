import React from 'react'
import { Carousel } from 'react-bootstrap';
import NavBar from '../../components/NavBar';
import img1 from '../../assets/home1.png'
import img2 from '../../assets/home2.png'
import img3 from '../../assets/home3.png'
import './Home.css';

export const Home = () => {
  return (
    <>
    <NavBar />
    <div>Home</div>
    <br></br>
    <Carousel>
      <Carousel.Item interval={1500}>
      <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Excellence in Dentistry</h3>
          <p>Join us for Modern Dental Practices and impresive Technologies</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Affordable, Quality Dentistry</h3>
          <p>Join us for Affordable, High Quality Private Dentistry for all the Family</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Everlasting Smiles</h3>
          <p>
            We work toward creating youthful smiles por patients whose natural teeth have lost its natural color
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h4>What more do you need?</h4>
    <p>Come visit us for a check and see what we can do for you.</p>
    </>
  )
}
