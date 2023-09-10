import React from 'react'
import "./dining.css"
import Collection from '../common/collection'
import { DiningOut } from '../../data/diningOut'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
const collectionList=[
  {
    id:'1',
    title:"22 Live Cricket Screenings",
    cover:"https://b.zmtcdn.com/data/collections/ef140246fb4f5b15717d0ac120a303e0_1693550394.png",
    places:"21 Places",
  },
  {
    id:'2',
    title:"1O Unique Dining Experiences",
    cover:"https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places:"10 Places",
  },
  {
    id:'3',
    title:"21 Best Insta-worthy Places",
    cover:"https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
    places:"20 Places",
  },
  {
    id:'4',
    title:"21 Romantic Dining Places",
    cover:"https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
    places:"20 Places",
  },
  {
    id:'5',
    title:"7 Celebrity Owned Places",
    cover:"https://b.zmtcdn.com/data/collections/b283b7b84679debdb6275be02fdd76b5_1674569878.jpg",
    places:"7 Places",
  },
  {
    id:'6',
    title:"27 Serene Rooftop Places•",
    cover:"https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places:"28 Places",
  },
  {
    id:'7',
    title:"13 Newly Opened Restaurants",
    cover:"https://b.zmtcdn.com/data/collections/ef140246fb4f5b15717d0ac120a303e0_1693550394.png",
    places:"9 Places",
  },
  {
    id:'8',
    title:"14 Must-visit Legendary Places",
    cover:" https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1692120012.jpg",
    places:"14 Places",
  },
  
]
const diningFilters = [
  {
    id:1,
    icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating: 4.0+",
  },
  {
    id:3,   
    title: "Outdoor Seating"
  }, 
  {
    id:4,
    title: "Serves Alcohol"
  }, 
  {
    id:5,
    title: "Open Now"
  }, 
  {
    id:6,   
    title: "Great Offers"
  },
]
const diningList = DiningOut;
function diningOut() {
  return (
    <div>
      <Collection list={collectionList }/>
      <div className='max-width'>
        <Filters filtersList={diningFilters}/>
      </div>
      <ExploreSection list={diningList} collectionName="Dine-Out Restaurants in Vidhyanagar"/>
    </div>
  )
}

export default diningOut