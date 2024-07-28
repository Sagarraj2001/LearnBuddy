import React from 'react'
import './Sidecard.css'

export default function sideCard(props) {
  return (
    <div className="card mb-3" id="sidecard" >
    <div className="row g-2">
      <div className="col-md-4 row align-items-center">
        <img src={props.src} className="img-fluid rounded-start" alt="..."/>
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </div>
  </div>
  )
}
