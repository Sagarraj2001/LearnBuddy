import React from 'react'
import './Blog.css'

export default function BlogCard(props) {
  return (
    <>

        <div className="col">
          <div className="card h-100">
            <img id="img" src={props.src} className="card-img-top" alt="..." />
            <div className="card-body">
              <a href={props.href} target='_blank' rel="noopener noreferrer">
                <h5 className="card-title">{props.title}</h5>
              </a>
              <p className="card-text">{props.description}</p>
              <div className="blog-writer">
                <p><ion-icon className="icon" name="person-circle"></ion-icon>{props.author}</p>
                <p><ion-icon name="calendar"></ion-icon>{props.date}</p>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
