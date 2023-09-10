import React from 'react'
import "./exploreSection.css"
import ExploreCard from './exploreCard'
// import { restaurants } from '../../../data/restaurant'
const ExploreSection = ({list,collectionName}) => {
  return (
    <div className='max-width explore-section'>
        <div className='collection-title'>{collectionName}</div>
        <div className='explore-grid'>
          {list.map((restaurant)=>{
            return <ExploreCard restaurant={restaurant}/>
          })}
        </div>
    </div>
  )
}

export default ExploreSection