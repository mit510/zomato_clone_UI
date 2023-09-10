import React from 'react'
import "./nightlife.css"
import Collection from '../common/collection'
import Filters from '../common/filters'
import ExploreSection from '../common/exploreSection'
import { NightLife } from '../../data/nightlife'
const nightFilters = [
  {
      id:1,
      icon:<i className=' fi fi-rr-settings-sliders absolute-centetr'></i>,
      title:"Filters",
  },
  {
    id:2,
    icon:<i className=' fi fi-rr-angle-down absolute-centetr'></i>,
    title:"Pro Offers",
},
{
  id:3,
  icon:<i className=' fi fi-rr-app-sort absolute-centetr'></i>,
  title:"Distance",
},
{
  id:4,
  // icon:<i className=' fi fi-rr-settings-sliders absolute-centetr'></i>,
  title:"Rating 4.0+",
},
{
  id:4,
  // icon:<i className=' fi fi-rr-settings-sliders absolute-centetr'></i>,
  title:"Pubs & Bars",
},
]

const collectionList=[
  {
    id:'1',
    title:"18 Lit Party Places",
    cover:"https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674824942.jpg",
    places:"19 Places",
  },
  {
    id:'2',
    title:"12 Finest Microbreweries",
    cover:"https://b.zmtcdn.com/data/collections/a9362905a0378c532acc0c146dbf472c_1675078887.jpg",
    places:"10 Places",
  },
  
] 
const nightList = NightLife;
const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList}/>
      <div className='max-width' >
        <Filters filtersList={nightFilters}></Filters>
      </div>
      <ExploreSection list={nightList} collectionName="Nightlife Restaurants in Gujarat"/>
    </div>
  )
}

export default Nightlife