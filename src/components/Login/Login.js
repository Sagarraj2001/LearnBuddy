import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card shadow-2-strong mb-5" >
                                <div className="card-body ">

                                    <h2 className="mb-3 text-center">Login</h2>

                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typeEmailX-2">Email</label>
                                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" />
                                    </div>

                                    <div data-mdb-input-init className="form-outline mb-2">
                                        <label className="form-label" for="typePasswordX-2">Password</label>
                                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" />
                                    </div>

                                    <div className="form-check d-flex justify-content-start mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                                        <label className="form-check-label" for="form1Example3"> Remember password </label>
                                    </div>

                                    <div class="d-grid gap-2 col-8 mx-auto mb-3">
                                        <button class="btn btn-warning" type="button">Login</button>
                                    </div>
                                        <Link className="text-primary text-decoration-underline" to="/login/forgotpassword">Forgot password?</Link>
                                        <div className=' mt-3 text-center '>
                                            <p>don't have an account? <Link className='text-primary text-decoration-underline' to="/login/signup">Register here</Link></p>
                                        </div>
                                   
                                    <p className='mt-3 text-center'>Or</p>
                                    <hr className="my-4 mt-2" />

                                    <div class="d-grid gap-2 col-8 mx-auto">
                                        <button class="btn btn-danger" type="button"><ion-icon name="logo-Google"></ion-icon> Sign with Google</button>
                                        <button class="btn btn-primary" type="button"><ion-icon name="logo-facebook"></ion-icon> Sign with Facebook</button>
                                        <button class="btn btn-dark" type="button"><ion-icon name="logo-apple"></ion-icon> Sign with Apple</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
