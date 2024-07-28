import React from 'react'

export default function HConCard(props) {
  return (
    <div>
      <div className="col">
                <div className="card">
                    <div className="card-body">
                        <ion-icon name={props.src} style={{fontSize:"55px", color:"orange"}}></ion-icon>
                        <h5 className="card-title" style={{ color: "orange" }}>{props.title}</h5>
                        <p className="card-text">{props.details}</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
