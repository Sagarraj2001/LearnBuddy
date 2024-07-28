import React from 'react'
import { Link } from 'react-router-dom'

export default function PriceCard(props) {
    return (
        <>
            <div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-warning border-bottom"><strong>{props.title}</strong></h2>
                            <h3 className="card-text"><strong>{props.amount}</strong></h3>
                            <p className="card-text border-bottom"> {props.detail}</p>
                            <p className="card-text "><strong>{props.benefit}</strong></p>
                            <div className="text-start">
                                <p className={props.line1}><ion-icon name={props.icon1}></ion-icon>{props.benefit1}</p>
                                <p className={props.line2}><ion-icon name={props.icon2}></ion-icon>{props.benefit1}</p>
                                <p className={props.line3}><ion-icon name={props.icon3}></ion-icon>{props.benefit3}</p>
                                <p className={props.line4}><ion-icon name={props.icon4}></ion-icon>{props.benefit4}</p>
                                <p className={props.line5}><ion-icon name={props.icon5}></ion-icon>{props.benefit5}</p>
                                <p className={props.line6}><ion-icon name={props.icon6}></ion-icon>{props.benefit6}</p>
                                <p className={props.line7}><ion-icon name={props.icon7}></ion-icon>{props.benefit7}</p>
                                <p className={props.line8}><ion-icon name={props.icon8}></ion-icon>{props.benefit8}</p>
                                <p className={props.line9}><ion-icon name={props.icon9}></ion-icon>{props.benefit9}</p>
                                <p className={props.line10}><ion-icon name={props.icon10}></ion-icon>{props.benefit10}</p>
                            </div>
                            <Link to="login" type="button" className="btn btn-warning d-grid gap-2 col-6 mx-auto mt-3 ">{props.btn}</Link>

                        </div>
                               
                    </div>
                </div>
            </div >
        </>
    )
}
