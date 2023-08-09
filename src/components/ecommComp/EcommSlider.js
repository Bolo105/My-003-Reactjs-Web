import React from "react";
import banner4 from '../ecommImg/banner4.jpg'
import banner3 from '../ecommImg/banner3.jpg'
import blog9 from '../ecommImg/blog9.jpg'
import styled from 'styled-components';

const Imag = styled.img`
   height: 100vh;
   width: 100%;
`;
const CarC = styled.div`
    bottom: 350px;
    z-index: 2;
    @media(max-width: 767px){
      bottom: 130px;
    }
`;
const Head = styled.h5`
    font-size: 85px;
    color: #cfd1d1;
    font-weight: bold;
    text-transform: capitalize;
    letter-spacing: 2px;
    margin-top: 25px;
    font-family: "Oswald", sans-serif !important;
    @media(max-width: 767px){
      font-size: 40px;
    }
`;
const Spa = styled.span`
    color: #00ffe5; 
    @media(max-width: 767px){
      font-size: 40px;
    }
`;
const Par = styled.p`
    width: 60%;
    margin: auto;
    font-size: 18px;
    line-height: 1.9;
    @media(max-width: 767px){
      font-size: 14px;
    }
`;
const A = styled.a`
    text-transform: uppercase;
    background-color: #00ffe5;    
    text-decoration: none;
    padding: 15px 30px;
    display: inline-block;
    color: #000 !important;
    margin-top: 15px;
    border-radius: 0px;
`;

export const EcommSlider = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Imag src={banner4} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head data-aos="fade-right" data-aos-duration="3000">Best <Spa className="" data-aos="fade-right" data-aos-duration="3000"> Collection</Spa></Head>
             <Par data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className=" text-white" data-aos="zoom-in" data-aos-duration="3000">Learn More</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={banner3} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head data-aos="fade-right" data-aos-duration="3000">Best <Spa className="" data-aos="fade-right" data-aos-duration="3000">Price / Offers</Spa></Head>
             <Par data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className="text-white" data-aos="zoom-in" data-aos-duration="3000">Learn More</A>
          </CarC> 
        </div>
        <div className="carousel-item">
          <Imag src={blog9} className="d-block w-100" alt="..." />
          <CarC className="carousel-caption">
             <Head data-aos="fade-right" data-aos-duration="3000">New Season <Spa className="" data-aos="fade-right" data-aos-duration="3000">Buy Now</Spa></Head>
             <Par data-aos="fade-left" data-aos-duration="3000">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, culpa.</Par>
             <A href="/" className=" text-white" data-aos="zoom-in" data-aos-duration="3000">Learn More</A>
          </CarC> 
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
