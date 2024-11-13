import React from 'react'
import Banner from './Banner'
import CallToAction from './CallToAction'
import Carousel from './Carousel'
import CallFoot from './CallFoot'
import Footer from './Footer'
import Header from './Header'

const Home = () => {
  return (
    <>
       <Header/>
    <Banner/>
    <CallToAction/>
    <Carousel/>
    <CallFoot/>
    <Footer/>
    </>
  )
}

export default Home