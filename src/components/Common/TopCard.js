import React from 'react'
import './TopCard.css'

export default function TopCard(props) {
  return (
      <div className="common">
                <div className="card mt-1 mx-2">
                    <img src="https://wallpapercave.com/wp/wp9697503.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <h1 className="card-title text-center display-1" style={{ color: "orange" }}>{props.title}</h1>
                    </div>
                </div>
            </div>
  )
}
