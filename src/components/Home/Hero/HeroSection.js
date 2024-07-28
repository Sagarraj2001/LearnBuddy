import React from 'react'
import {Link} from 'react-router-dom'

export default function HeroSection() {
    return (
        <div>
            <div className="container" id="home">
                <div className="row">

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10 text-center">

                            <img
                                src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-business-achievement_516790-653.jpg"
                                alt="" className="img-fluid ck-rounded mt-6 mx-100" />
                        </div>
                    </div>

                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8 text-center">
                        <div className="">
                            <h1 className="display-5 fw-bolder mt-2">Improve your coding skills with <span
                                className="highlighter- wd_highlight1">Our Platform</span>
                            </h1>
                            <p className="fs-5">
                                We Are Here To Make Your Career Bright.
                            </p>
                            <Link to="/" className="btn ck-bt btn-warning btn-lg rounded-pil fw-light px-4 fs-5 text-capitalize  text-dark">Start
                                learning for free</Link>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
