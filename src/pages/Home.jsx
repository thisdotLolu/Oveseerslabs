import React from 'react'
import About from '../components/About'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Roadmap from '../components/Roadmap'
import Showcase from '../components/Showcase'
import Team from '../components/Team'

const Home = () => {
  return (
    <div className='home_container'>
        <div className='home_inner'>
        <Hero/>
      <About/>
      <Roadmap/>
      <Team/>
      <Faq/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home