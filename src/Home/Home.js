import React from 'react'
import "./Home.css"
import Product from '../Product/Product'

function Home() {
  return (
    <>
    <div className="home">
      <div className="home__container">
        <img className='home__image' src="https://m.media-amazon.com/images/I/81WkL1NQRBL._SX3000_.jpg" alt="" />

        <div className="home__row">
          <Product 
            id='584565852'
            title='Dell Inspiron 3511 Laptop, Intel i3-1115G4, 8GB, 512GB SSD, Win 11 + MSO, 15.6" (39.62Cms) FHD WVA AG Narrow Border, Carbon Black (D560842WIN9B, 1.8Kgs)'
            price={40490}
            image="https://m.media-amazon.com/images/I/6192pE7H2FL._SX679_.jpg"
            rating={4}/>

          <Product 
            id='548962565'
            title='Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage) with No Cost EMI & Additional Exchange Offers'
            price={29999}
            image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY679_.jpg"
            rating={4}/>
            
        </div>

        <div className="home__row">
        <Product 
            id='492523659'
            title='boAt Wave Lite Smartwatch with 1.69 Inches(4.29cm) HD Display, Heart Rate & SpO2 Level Monitor, Multiple Watch Faces, Activity Tracker, Multiple Sports Modes & IP68 (Scarlet Red)'
            price={1999}
            image="https://images-eu.ssl-images-amazon.com/images/I/41Bj3iYflTL._SX300_SY300_QL70_FMwebp_.jpg"
            rating={4}/>
            
            <Product 
            id='491596165'
            title='All-new Echo (4th Gen, Black) combo with Syska 12W LED smart color bulb'
            price={7249}
            image="https://m.media-amazon.com/images/I/61KB2qCxbBL._SX679_.jpg"
            rating={4}/>
            
            <Product 
            id='989513659'
            title='2021 Apple iPad Mini with A15 Bionic chip (Wi-Fi + Cellular, 64GB) - Space Grey (6th Generation)'
            price={60990}
            image="https://m.media-amazon.com/images/I/71hM0QvGshL._SX679_.jpg"
            rating={4}/>



        </div>

        <div className="home__row">
          <Product 
            id='123123456452'
            title='LG C2 195 cm (77 Inches) Evo Gallery Edition 4K Ultra HD Smart OLED TV OLED77C2PSC (Black) (2022 Model) | With Eye Comfort Display'
            price={410990}
            image="https://m.media-amazon.com/images/I/61Jo9L0lQiL._SL1500_.jpg"
            rating={5}/>


        </div>




      </div>
    </div>
    </>
  )
}

export default Home