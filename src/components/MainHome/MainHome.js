import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Corousel from '../Corousel/Corousel'
import ServicesHome from '../ServicesHome/ServicesHome'
import WhatsAppChat from '../WhatsAppChat/WhatsAppChat'
import NewsSection from '../NewsSection/NewsSection'
import DepartmentDetails from '../DepartmentDetails/DepartmentDetails'
import BottomSlider from '../BottomSlider/BottomSlider'

const MainHome = () => {
  return (
    <>
    {/* <Header /> */}
    <Corousel />
    <ServicesHome />
    <NewsSection />
    <DepartmentDetails />
    <BottomSlider />
    {/* <WhatsAppChat/> */}
    {/* <Footer /> */}
    </>
  )
}

export default MainHome