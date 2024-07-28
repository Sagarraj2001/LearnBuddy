import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
  return (
    <div>
       <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong mb-5" >
                                <div className="card-body ">

                                    <h2 className="mb-3 text-center">Forgot Password</h2>

                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typeEmailX-2">Enter Your Email</label>
                                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" required/>
                                    </div>
                                    <div class="d-grid gap-2 col-8 mx-auto mb-3">
                                        <button class="btn btn-warning" type="button">Reset Password</button>
                                    </div>
                                        <div className=' mt-3 text-center'>
                                            <p>or <Link className='text-primary' to="/signup/login">Login</Link></p>
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
