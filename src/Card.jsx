import React from 'react'
import './Card.css'


export default function Card(props){
  return (
    <div className='card'>
      <img src={props.imageUrl} alt="" />
      <div>
        <p className="location">{props.location} &#8226; <a href={props.googleMapsUrl}>View in Google Maps</a></p>
        <h3 className="title">{props.title}</h3>
        <p className="dates">{props.startDate} - {props.startDate}</p>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  )
}
