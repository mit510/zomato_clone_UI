import React from 'react'
import "./deliveryitem.css"
const DeliveryItem = ({item}) => {
  return (
    <div className='delivery-collection'>
        <div className='delivery-item-cover'>
            <img src={item.cover} className='delivery-item-image absolute-center cur-po' alt='{item.title}' />
        </div>
        <div className='delivery-item-title absolute-center'>{item.title}</div>
    </div>
  )
}

export default DeliveryItem