import React from 'react'
import { Link } from "react-router-dom";
import Hcard from './Hcard'

export default function HcourseCard() {
    return (
        <div>
            <div id="courses">
                <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
                    <h3 style={{ color: "orange", textDecoration: "underline" }}>Our Courses</h3>
                    <h1>Explore Our Popular Online Courses</h1>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4" style={{ margin: "10px" }}>
                    <Hcard
                        src="https://slajobs.com/wp-content/uploads/2019/05/wordpress-training-in-chennai.jpg"
                        href="https://learn.wordpress.org/tutorial/introduction-to-wordpress/"
                        title="Introducing to Programming with WordPress"
                        time="3 weeks"
                        price="FREE"
                        a="star"
                        b="star"
                        c="star"
                        d="star"
                        e="star-half"
                    />
                    <Hcard
                        src="https://www.snhu.edu/-/media/images/social/og/how-to-become-software-engineer-og.ashx"
                        href="https://www.freecodecamp.org/news/learn-the-fundamentals-of-software-engineering/"
                        title="Basic Fundamentals for Software Engineering"
                        time="4 weeks"
                        price="FREE"
                       a="star"
                       b="star"
                       c="star"
                       d="star-half"
                       e="star-outline"
                    />

                    <Hcard
                        src="https://media.licdn.com/dms/image/D5612AQF98axVlLMdbA/article-cover_image-shrink_600_2000/0/1688490371833?e=2147483647&v=beta&t=hFVGHR9i7BiyjcK7DjMzHZ9uKzW2sG-QI3MgBpW27zw"
                        href="https://www.javatpoint.com/machine-learning"
                        title="Introduction to Machine Learning with Python"
                        time="2 weeks"
                        price="FREE"
                        a="star"
                        b="star"
                        c="star"
                        d="star"
                        e="star-outline"
                    />
                </div>
                <div >
                    <Link to="course" className="btn btn-warning d-grid gap-2 col-4 mx-auto border-0"
                        style={{ margin: "20px" }}>More....</Link>
                </div>

            </div>
        </div>
    )
}
