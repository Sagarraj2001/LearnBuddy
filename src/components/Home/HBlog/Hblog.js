import React from 'react'
import BCard from './BCard'
import { Link } from 'react-router-dom'

export default function Hblog() {
  return (
    <div>
            <div style={{ textAlign: "center", marginTop: "60px", marginBottom: "40px" }}>
                <h3 style={{ color: "orange", textDecoration: "underline" }}>Our Blog</h3>
                <h1>Recent From Blog</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      <BCard
          src="https://blog.codingblocks.com/content/images/size/w2000/2024/04/How-to-manage-dsa-and-development-together_Banner.png"
          href="https://blog.codingblocks.com/2024/how-to-manage-both-dsa-and-development-together/"
          title="How to Manage Both DSA and Development Together?"
          description="In today's tech-driven world, mastering Data Structures and Algorithms (DSA) is fundamental for every aspiring developer."
          author="SANYA WADHWANI"
          date="09/04/2024"
        />
        <BCard 
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/07/DataScience.jpg"
          href="https://blog.codingblocks.com/2020/what-is-data-science-machine-learning-ai-deep-learning-and-big-data-and-whats-the-difference/"
          title="What are Data Science, Machine Learning, AI, Deep Learning, and Big Data?"
          description="With the internet boom and the exponential rise of various businesses in the form of start-ups; Data has become an inextricable part of business growth."
          author="MUSKAN"
          date="28/07/2020"
        />
        <BCard 
          src="https://blog.codingblocks.com/content/images/size/w2000/2020/04/Artboard-1-copy-2a.jpg"
          href="https://blog.codingblocks.com/2020/social-distancing-unleashing-the-productivity-of-coders/"
          title="Social Distancing: Unleashing the Productivity of Coders"
          description="Social Distancing can expose you to many unpredictable fears that can tamper with your mental peace. Everything coming to a standstill is explicitly affecting the movement of the education of the students."
          author="ANUSHKA BAHUGUNA"
          date="07/04/2020"
        />

      </div>
            <div>
            <Link to="blog" type="button" className="btn btn-warning d-grid gap-2 col-4 mx-auto mt-3">More Blogs....</Link>
            </div>

    </div>
  )
}
