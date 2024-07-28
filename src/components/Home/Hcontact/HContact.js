import React from 'react'
import HConCard from './HConCard'

export default function HContact() {
  return (
    <>
    <div id="contact" style={{ textAlign: "center", marginTop: "60px", marginBottom: "40px" }}>
                <h3 style={{ color: "orange", textDecoration: "underline" }}>Contact Details</h3>
                <h1>Reach Out to Us</h1>
                </div>
    <div style={{textAlign:"center",margin:"15px"}}>
       <div className="row row-cols-1 row-cols-md-3 g-4">
        <HConCard
          src="call-outline"
          title="Contact No"
          details="+91 9693XXXXXX"
        />
        <HConCard
          src="mail-outline"
          title="Email"
          details="XYZ123@gmail.com"
        />
        <HConCard
          src="globe-outline"
          title="Website"
          details="www.learnbuddy.com"
        />
       </div>
    </div>
    </>
  )
}
