import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { EcommNavbar } from './EcommNavbar'
import { EcommFooter } from './EcommFooter'
import { EcommSlider } from './EcommSlider'
import { EcommCollection } from './EcommCollection'
import { EcommSpecial } from './EcommSpecial'
import { EcommOffers } from './EcommOffers'
import { EcommBlog } from './EcommBlog'
import { EcommHome } from './EcommHome'
import { EcommPopular } from './EcommPopular'
import { EcommAbout } from './EcommAbout'
import { EcommNews } from './EcommNews'

export const Pages = () => {
  return (
    <>
     <Router>
        <EcommNavbar />
        <Routes>
            <Route path='/' element={<EcommHome />} />
            <Route path='/carouselExampleFade' element={<EcommSlider />}/>
            <Route path='/ecommcollection' element={<EcommCollection />}/>
            <Route path='/ecommspecial' element={<EcommSpecial />}/>
            <Route path='/ecommoffers' element={<EcommOffers />}/>
            <Route path='/ecommblog' element={<EcommBlog />}/>
            <Route path='/ecommabout' element={<EcommAbout />}/>
            <Route path='/ecommpopular' element={<EcommPopular />}/>
            <Route path='/ecommnews' element={<EcommNews />}/>
        </Routes>
        <EcommFooter />
     </Router>
    </>
  )
}
