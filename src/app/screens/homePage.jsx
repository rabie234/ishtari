import React from 'react'
import Header from '../components/Header'
import TopSlide from '../components/topSlider'
import SwiperCate from '../components/swiperCate'
import ProductsSlide from '../components/productsSlide'

const HomePage = () => {
  return (
    <>
      <Header/>
      <div className=' h-full bg-[#F8F8F9] w-full m-auto align-middle text-center'>
         <TopSlide/>
            <div className='w-full'>
                <img className='w-full' src="https://www.ishtari.com/image/data/system_banner/10000/2800/2753/first-web.png" alt="" />
            </div>
            <SwiperCate />
            <ProductsSlide/>
      </div>
    </>
  )
}

export default HomePage
