import React from 'react'
import TopCard from '../Common/TopCard'
import Accordion from './Accordion'
import Footer from '../Footer/Footer'
import Pricecard from './Pricecard'
export default function Price() {
    return (
        <>
            <TopCard title="Our Price" />
            <>
                <div id="contact" style={{ textAlign: "center", marginTop: "60px", marginBottom: "40px" }}>
                    <h3 style={{ color: "orange", textDecoration: "underline" }}>OUR PRICING</h3>
                    <h1>Pricing & Packages</h1>
                </div>
                <div style={{ textAlign: "center", margin: "15px" }}>
                    <div className="row row-cols-1 row-cols-md-3 g-2">

                        <Pricecard
                            title="BASIC PLAN"
                            amount="Rs. 0"
                            detail="Always free"
                            benefit="Start learning something new with basic access"

                            line1="card-text"
                            line2="card-text"
                            line3="card-text"
                            line4="card-text text-decoration-line-through"
                            line5="card-text text-decoration-line-through"
                            line6="card-text text-decoration-line-through"
                            line7="card-text text-decoration-line-through"
                            line8="card-text text-decoration-line-through"
                            line9="card-text text-decoration-line-through"
                            line10="card-text text-decoration-line-through"
                            icon1="checkmark-circle-outline"
                            icon2="checkmark-circle-outline"
                            icon3="checkmark-circle-outline"
                            icon4="close-circle-outline"
                            icon5="close-circle-outline"
                            icon6="close-circle-outline"
                            icon7="close-circle-outline"
                            icon8="close-circle-outline"
                            icon9="close-circle-outline"
                            icon10="close-circle-outline"

                            benefit1="Basic access to free courses"
                            benefit2="Community support"
                            benefit3="Learning resources"
                            benefit4="Certificates of completion"
                            benefit5="Real-world projects"
                            benefit6="Professional certifications"
                            benefit7="All courses"
                            benefit8="Career services"
                            benefit9="Technical interview prep"
                            benefit10="Code challenges"

                            btn="Get free account"
                        />

                        <Pricecard
                            title="PLUS PLAN"
                            amount="Rs. 750"
                            detail="Per month, paid annually or ₹1,500 paid monthly"
                            benefit="Build in-demand technical skills Basic and more"

                            line1="card-text"
                            line2="card-text"
                            line3="card-text"
                            line4="card-text"
                            line5="card-text"
                            line6="card-text"
                            line7="card-text text-decoration-line-through"
                            line8="card-text text-decoration-line-through"
                            line9="card-text text-decoration-line-through"
                            line10="card-text text-decoration-line-through"

                            icon1="checkmark-circle-outline"
                            icon2="checkmark-circle-outline"
                            icon3="checkmark-circle-outline"
                            icon4="checkmark-circle-outline"
                            icon5="checkmark-circle-outline"
                            icon6="checkmark-circle-outline"
                            icon7="close-circle-outline"
                            icon8="close-circle-outline"
                            icon9="close-circle-outline"
                            icon10="close-circle-outline"

                            benefit1="Basic access to free courses"
                            benefit2="Community support"
                            benefit3="Learning resources"
                            benefit4="Certificates of completion"
                            benefit5="Real-world projects"
                            benefit7="All courses"
                            benefit6="Professional certifications"
                            benefit8="Career services"
                            benefit9="Technical interview prep"
                            benefit10="Code challenges"

                            btn="Join Plus"
                        />

                        <Pricecard
                            title="PRO PLAN"
                            amount="Rs. 1,250"
                            detail="Per month, paid annually or ₹2,500 paid monthly"
                            benefit="Develop the skills with Plus and More"

                            line1="card-text"
                            line2="card-text"
                            line3="card-text"
                            line4="card-text"
                            line5="card-text"
                            line6="card-text"
                            line7="card-text"
                            line8="card-text"
                            line9="card-text"
                            line10="card-text"

                            icon1="checkmark-circle-outline"
                            icon2="checkmark-circle-outline"
                            icon3="checkmark-circle-outline"
                            icon4="checkmark-circle-outline"
                            icon5="checkmark-circle-outline"
                            icon6="checkmark-circle-outline"
                            icon7="checkmark-circle-outline"
                            icon8="checkmark-circle-outline"
                            icon9="checkmark-circle-outline"
                            icon10="checkmark-circle-outline"

                            benefit1="Basic access to free courses"
                            benefit2="Community support"
                            benefit3="Learning resources"
                            benefit4="Certificates of completion"
                            benefit5="Real-world projects"
                            benefit6="Professional certifications"
                            benefit7="All courses"
                            benefit8="Career services"
                            benefit9="Technical interview prep"
                            benefit10="Code challenges"

                            btn="Join Pro"
                        />
                    </div>
                </div>
            </>
            <div className="text-center mt-5 font-weight-bold ">
                <h5 className='text-warning'>FAQS</h5>
                <h2>Frequesntly Ask Question</h2>
            </div>
            <Accordion
                header="How to Enroll This Online Courses?"
                description="Go to our Course Section and Enroll what do you want to learn or else search the Courses then complete the modules."
                target="#flush-collapseOne"
                targetId="flush-collapseOne"
                close="collapseOne"
            />
            <Accordion
                header="How is Plus and Pro is different from Basic Plan?"
                description="With Pro Plan and Plus plan, your learning opportunities are endless. You’ll gain monthly access to our top-rated courses, coding exercises, and practice tests in a variety of professional and personal development categories. You can learn one skill or multiple skills at once. Alternatively, if you buy courses one at a time, you’ll get lifetime access to those courses only. while in Basic plan you are having only limited no of courses "
                target="#flush-collapseTwo"
                targetId="flush-collapseTwo"
                close="collapseTwo"
            />
            <Accordion
                header="What Languages does Courses have?"
                description="All plan having collection of original-language content in Hindi,Tamil,Telugu,English,Malaylam."
                target="#flush-collapseThree"
                targetId="flush-collapseThree"
                close="collapseThree"
            />
            <div className="mt-5">
                <Footer />
            </div>

        </>
    )
}
