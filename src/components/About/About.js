import React from 'react'
import Footer from '../Footer/Footer'
import Sidecard from './Sidecard'
import TopCard from '../Common/TopCard'

export default function About() {
  return (
    <>
      <TopCard title="About-Us" />
      <div className="card mb-3 mt-5 border-0" id="about" style={{ maxWidth: "100%", height: "100%", margin: "15px" }}>
        <div className="row g-0">
          <div className="col-md-6">
         
            <img src="./Images/AboutImage.jpg" className="img-fluid rounded-start" alt="..." style={{ height: "100%", objectFit: "cover", width: "100%" }} />
          </div>
          <div className="col-md-4" >
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <h2 className="card-title" style={{ color: "orange", textDecoration: "underline" }}>Learn Anything</h2>
              <h1>Benefits About Online Learning Expertise</h1>
              <Sidecard src="https://cdn-icons-png.flaticon.com/512/2000/2000887.png" title="Online Courses" text="Unlock your potential with diverse online courses, available on our platforms. Explore topics from coding to designing, and learn at your own pace, anytime, anywhere." />


              <Sidecard src="https://cdn-icons-png.flaticon.com/512/3000/3000745.png" title="Earn A Certificates" text="Unlock new Courses! Earn certificates on any platform to showcase your skills and boost your career. Expand your knowledge and stand out in your field." />


              <Sidecard src="https://png.pngtree.com/png-vector/20230407/ourmid/pngtree-experts-line-icon-vector-png-image_6691211.png" title="Learn with Expert" text="Unlock your potential with Learn with Expert! Our platform connects you with skilled instructors, offering immersive courses tailored to your interests. From photography to programming, dive into interactive learning experiences and master new skills. Join us today and start your journey!" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
