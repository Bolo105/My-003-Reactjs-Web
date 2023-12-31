import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo1 from '../ecommImg/logo1.jpg'

const Sec = styled.div`
  .navbar-nav a {
    font-family: poppins;
    text-decoration: none !important;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 600;
  }
  .navbar-light .navbar-brand {
    color: #000;
    font-size: 45px !important;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 2px;
  }
  .navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: #000;
  }
  .navbar-light .navbar-nav .nav-link {
    color: #000;
  }
  .navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: #000;
  }
  .w-100 {
    height: 100vh;
  }
  .navbar-toggler {
    padding: 1px 5px;
    font-size: 18px;
    line-height: 0.3;
    background: #fff;
  }
`;
const Imag = styled.img`
    width: 70px;
`;
const Head1 = styled.h5`
    font-family: "Oswald", sans-serif !important;
    font-weight: bold;
    color: #00ffe5;
    display: inline-block;
    padding-left: 15px;
    font-size: 35px;
    vertical-align: middle;
	  letter-spacing: 1px;  
    &:hover {
      color: #00ffe5;
    }
    @media(max-width: 912px){
      font-size: 20px;
    }
`;

export const EcommNavbar = () => {
  return (
    <div>
  <Sec className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
		<div className="container">
       <div className="navbar-brand" href="/">
			   <Imag src={logo1} alt="" /><Head1>eBooks</Head1>
			 </div>
				 <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
					 <span className="navbar-toggler-icon"></span>
				</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0"> 
					<Link className="nav-item" to="/carouselExampleFade">
					    <a className="nav-link" href = "/carouselExampleFade">Home</a>
					</Link>
					<Link className="nav-item" to="/ecommcollection">
						<a className="nav-link" href="/ecommcollection">Collection</a>
					</Link>
					<Link className="nav-item" to="/ecommspecial">
						<a className="nav-link" href="/ecommspecial">Specials</a>
					</Link>
					<Link className="nav-item" to="/ecommblog">
						<a className="nav-link" href="/ecommblog">Blog</a>
					</Link>
					<Link className="nav-item" to="/ecommabout">
						<a className="nav-link" href="/ecommabout">About Us</a>
					</Link>
					<Link className="nav-item" to="/ecommpopular">
						<a className="nav-link" href="/ecommpopular">Popular</a>
					</Link>
					<Link className="nav-item" to="/ecommnews">
						<a className="nav-link" href="/ecommnews">Contact</a>
					</Link>
				</ul>
			</div>
		</div>
	</Sec>
    </div>
  )
}