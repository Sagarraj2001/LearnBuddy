import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom'


export default function CourseCard(props) {
  return (
    <div>
      <div className="col">
                <div className="card h-100" >
                    <img src={props.src} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <a href={props.href} target='_blank' rel="noopener noreferrer"><h5 className="card-title">{props.title}</h5></a>
                        <p>{props.time}</p>
                        <p className='text-danger'>{props.price}</p>
                        <ion-icon name={`${props.a}`}></ion-icon>
                        <ion-icon name={`${props.b}`}></ion-icon>
                        <ion-icon name={`${props.c}`}></ion-icon>
                        <ion-icon name={`${props.d}`}></ion-icon>
                        <ion-icon name={`${props.e}`}></ion-icon>
                        <Link to="/course/login" type="button" className="btn btn-warning d-grid gap-2 col-6 mx-auto border-0">Enroll Now</Link>
                    </div>
                </div>
            </div>
    </div>
  )
}