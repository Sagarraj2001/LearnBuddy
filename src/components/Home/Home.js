import React from 'react'
import HeroSection from './Hero/HeroSection'
import Habout from './Habout/Habout'
import HcourseCard from './Hcourse/HcourseCard'
import Hblog from './HBlog/Hblog'
import HContact from './Hcontact/HContact'
import Footer from '../Footer/Footer'
import Hprice from './Hprice/Hprice'

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Habout/>
      <HcourseCard/>
      <Hblog/>
      <HContact/>
      <Hprice/>
      <Footer/>
    </div>
  )
}
