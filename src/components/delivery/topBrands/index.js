import React from 'react'
import "./topBrand.css"
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';
const topBrandList=[
    {
        id:1,
        name:"McDonald's",
        time:'21 min',
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/874c2b2b4554f4aed7dd3bb4e755c420_1604382943.png'
    },
    {
        id:2,
        time:'14 min',
        name:"Subway",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676522028.png'
    },
    {
        id:3,
        time:'26 min',
        name:"Sahyog Restaurant",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/20496c171f2e4e364ab63a0b3b167346_1622284711.png'
    },
    {
        id:4,
        time:'17 min',
        name:"Poptos",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/4eac2c2626d7e3f6ff85b1d6bca306b3_1611306922.png'
    },
    {
        id:5,
        time:'21 min',
        name:"KFC",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9da52e2b69f19bb603227a750e788d33_1613216178.png'
    },
    {
        id:6,
        time:'24 min',
        name:"The Belgian Waffle",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/e47dec3eb2950cde399b62b48c5645f6_1675832676.png'
    },
    {
        id:7,
        time:'24 min',
        name:"Pizza Hut",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613131913.png'
    },
    {
        id:8,
        time:'17 min',
        name:"La Milano Pizzeria",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/e6e910553f67822ba525dbe9f515a700_1671005296.png'
    },
    {
        id:9,
        time:'26 min',
        name:"Cheeza",
        cover:'https://b.zmtcdn.com/data/brand_creatives/logos/4a7413830c650a0711a39081e906962b_1687415685.png'
    },
]

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };
const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
    <div className='collection-title'>Top Brands For You</div>
    <Slider {...settings}>
    {topBrandList.map((brand)=>{
                return (
                    <div>
                        <div className='top-brand-cover'>
                            <img src={brand.cover} alt={brand.name} className='top-brands-image cur-po' />
                        </div>
                        <div className='delivery-item-title absolute-center '>{brand.name}</div>
                        <div className=' absolute-center time'>{brand.time}</div>
                    </div>
                )
              })}
    </Slider>
    </div>
  )
}

export default TopBrands