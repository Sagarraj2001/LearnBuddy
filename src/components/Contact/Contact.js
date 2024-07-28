import React from 'react'
import './Contact.css'
import TopCard from '../Common/TopCard'
import Footer from '../Footer/Footer'


export default function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8d12b7d1-0756-4e58-86d9-2bf1a7860aad");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Thanks for Contacting We will reply you soon", res);
    }
  };

  return (
    <>
      <TopCard title="Contact-Us" />
      <div className="card mb-3 mt-5 mx-3" >
        <div className="row g-0">
          <div className="col-md-6">
          <iframe className="rounded" style={{ height: "100%", objectFit: "cover", width: "100%" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30767295.116023116!2d60.94602768401769!3d19.72227226514474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab1b4b5fbf37f7%3A0x3d124175939bfb91!2sDhanalakshmi%20Srinivasan%20Engineering%20College!5e0!3m2!1sen!2sin!4v1714742017633!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <h1 className='text-center text-warning'>Contact Form</h1>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">Name</label>
                  <input type="text" name='name' className="form-control" required />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">Email</label>
                  <input type="email" name='email' className="form-control" id="exampleInputPassword1" required/>
                </div>
                <div classname="form-floating">
                  <textarea rows={5} className="form-control" name='message' placeholder="Leave a comment here" id="floatingTextarea" required ></textarea>
                </div>
                <div className="mt-3">
                <button type="submit" className='btn btn-warning'>Submit Form</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
