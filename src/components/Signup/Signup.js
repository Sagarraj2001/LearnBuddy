import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div>
       <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong mb-5" >
                                <div className="card-body ">

                                    <h2 className="mb-3 text-center">Create An Account</h2>

                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typeNameX-2">Your Name</label>
                                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" required/>
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typeMobileX-2">Mobile No.</label>
                                        <input type="text" id="typePasswordX-2" className="form-control form-control-lg" maxLength={10} required/>
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typeEmailX-2">Your Email</label>
                                        <input type="email" id="typePasswordX-2" className="form-control form-control-lg" required />
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typePasswordX-2">Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" required/>
                                    </div>
                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typePasswordCX-2">Confirm Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" required/>
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" for="form1Example3"> I agree all statements in <Link className="text-primary text-decoration-underline" to="/">Terms of service</Link> </label>
                                    </div>

                                    <div class="d-grid gap-2 col-8 mx-auto mb-3">
                                        <button class="btn btn-warning" type="button">Register</button>
                                    </div>
                                        <div className=' mt-3 text-center'>
                                            <p>Already have an account? <Link className='text-primary text-decoration-underline' to="/signup/login">Login Here</Link></p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}
