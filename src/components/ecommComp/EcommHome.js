import React from 'react'
import { EcommNavbar } from './EcommNavbar'
import { EcommSlider } from './EcommSlider'
import { EcommCollection } from './EcommCollection'
import { EcommSpecial } from './EcommSpecial'
import { EcommBlog } from './EcommBlog'
import { EcommAbout } from './EcommAbout'
import { EcommPopular } from './EcommPopular'
import { EcommNews } from './EcommNews'
import { EcommOffers } from './EcommOffers'

export const EcommHome = () => {
  return (
    <div>
      <EcommNavbar />
      <EcommSlider />
      <EcommCollection />
      <EcommSpecial />
      <EcommOffers />
      <EcommBlog />
      <EcommAbout />
      <EcommPopular />
      <EcommNews />
    </div>
  )
}
