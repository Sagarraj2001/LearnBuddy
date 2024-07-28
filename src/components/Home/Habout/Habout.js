import React from 'react'

export default function Habout() {
  return (
    <div>
      <div className="card mb-3 mt-5 border-0" id="about" style={{ maxWidth: "100%", height: "100%", margin: "15px" }}>
        <div className="row g-0">
          <div className="col-md-6">
            <img src="https://img.freepik.com/free-photo/teenagers-thinking-about-answers_1098-2918.jpg" className="img-fluid rounded-start" alt="..."  style={{ height: "100%", objectFit: "cover", width: "100%" }} />
          </div>
          <div className="col-md-4" >
            <div className="card-body" style={{ marginLeft: "20px" }}>
              <h2 className="card-title" style={{ color: "orange", textDecoration: "underline" }}>About Us</h2>
              <h4 className="card-text">Online Courses</h4>
              <p className="card-text"><small className="text-body-secondary">Unlock your potential with diverse online courses, available on our platforms. Explore topics from coding to designing, and learn at your own pace, anytime, anywhere.</small></p>
              <h4 className="card-text">Earn A Certificates</h4>
              <p className="card-text"><small className="text-body-secondary">Unlock new Courses! Earn certificates on any platform to showcase your skills and boost your career. Expand your knowledge and stand out in your field.</small></p>
              <h4 className="card-text">Learn with Expert</h4>
              <p className="card-text"><small className="text-body-secondary">Unlock your potential with Learn with Expert! Our platform connects you with skilled instructors, offering immersive courses tailored to your interests. From photography to programming, dive into interactive learning experiences and master new skills. Join us today and start your journey!</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
