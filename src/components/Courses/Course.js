import React from 'react'
import './Course.css'
import CourseCard from './CourseCard'
import TopCard from '../Common/TopCard'
import Footer from '../Footer/Footer'

export default function Course() {
    return (
        <>
        <TopCard title="Our Courses"/>
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3 mx-3 mb-3">

                <CourseCard
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

                <CourseCard
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

                <CourseCard
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
                <CourseCard
                    src="https://blog.greencloudvps.com/wp-content/uploads/2024/03/database-management-system-3.jpg"
                    href="https://www.javatpoint.com/dbms-tutorial"
                    title="Basic concept about DataBase Management System."
                    time="3 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star-outline"
                    e="star-outline"
                />
                <CourseCard
                    src="https://img.thecdn.in/298146/1681632001856_SKU-0003_0.png?"
                    href="https://www.javatpoint.com/data-structure-tutorial"
                    title="Data structure and algorithm"
                    time="6 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star"
                    e="star-half"
                />
                 <CourseCard
                    src="https://miro.medium.com/v2/resize:fit:1400/1*5eV1xmJs2-sJ4DdejfdnQA.png"
                    href="https://www.w3schools.com/js/"
                    title="Introduction to JavaScript."
                    time="5 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star"
                    e="star-half"
                />
                 <CourseCard
                    src="https://digitalfloats.com/wp-content/uploads/2023/08/Python-for-data-analysis.jpg"
                    href="https://www.geeksforgeeks.org/data-analysis-with-python/"
                    title="Data Analytics using Python"
                    time="5 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star"
                    e="star-half"
                />
                 <CourseCard
                    src="https://i.imgur.com/c6INXWH.png"
                    href="https://www.w3schools.com/html/"
                    title="Introduction to HTML5"
                    time="2 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star"
                    e="star-half"
                />
                 <CourseCard
                    src="https://ik.imagekit.io/edtechdigit/usaii/content/images/machine-learning-algorithms-for-beginners-with-popular-python-codes.jpeg"
                    href="https://www.javatpoint.com/role-of-python-in-artificial-intelligence"
                    title="AI and Machine Learning Algorithms Using Python"
                    time="5 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star"
                    e="star-half"
                />
                 <CourseCard
                    src="https://asapkerala.gov.in/wp-content/uploads/2022/02/Unity-Certified-User-%E2%80%93-Artist.jpg"
                    href="https://www.freecodecamp.org/news/what-is-game-development/"
                    title="Introduction of Game Development"
                    time="6 weeks"
                    price="FREE"
                    a="star"
                    b="star"
                    c="star"
                    d="star"
                    e="star-half"
                />
            </div>
            <Footer/>
        </>
    )
}
