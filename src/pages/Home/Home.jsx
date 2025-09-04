import React from 'react'
import OtherServices from '../../components/home/OtherServices'
import Materials from '../../components/home/Materials'
import ProductAndService from '../../components/home/ProductAndService'
import Banner from '../../components/home/Banner'
import Faq from '../../components/home/Faq'


function Home() {
  return (
    <>
      <Banner />
      <ProductAndService />
      <Materials />
      <Faq />
      <OtherServices />


    </>
  )
}

export default Home