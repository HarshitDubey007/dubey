import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFormData } from '../../helpers/helpers';
import { login } from '../../redux/User';
import api from '../../utils/api';
import "./style.css";

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    function authenticateUser(e) {
        e.preventDefault();
        const formData = getFormData(e.target);
        const signinRes = api.post("/signin", formData);
        toast
            .promise(signinRes, {
                loading: "Authenticating member.",
                success: (data) => {
                    return `Congratulations, you have successfully logged in.`;
                },
                error: (err) => {
                    return (
                        err?.response?.data?.errors ??
                        err?.response?.data?.message ??
                        err?.message ??
                        "OOPs something went wrong."
                    );
                },
            })
            .then((data) => {
                dispatch(login({ isLoggedIn: true, userInfo: data.data }));
                navigate("../dashboard", { replace: true });
            });
    }
  return (
    <>
         <div className='container-fulid'>
                <div className="row">
                <div className="col">
                         {/* <img className='mt-3' src="/img/togather.jpg" style={{height: "400px", width: "auto"}} alt="" /> */}
                    </div>
                    <div className="col">
                            <div className="col-lg mt-5">
                                <div className="wrapper">
                                    <div className="logo"> <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png" alt="" /> </div>
                                    <div className="text-center mt-4 name"> Sign Up </div>
                                    <form class="p-3 mt-3" onSubmit={(e) => {
                                        authenticateUser(e);
                                    }}>
                                        <div className="form-field d-flex align-items-center"> <span class="far fa-user"></span>
                                            <input type="text" name="email" id="userName" placeholder="email" />
                                        </div>
                                        <div className="form-field d-flex align-items-center"> <span class="fas fa-key"></span>
                                            <input type="password" name="password" id="pwd" placeholder="Password" />
                                        </div>
                                        <div className="form-field d-flex align-items-center"> <span class="fas fa-key"></span>
                                            <input type="password" name="cpassword" id="pwd" placeholder="confirm Password" />
                                        </div>
                                        <div className="form-field d-flex align-items-center"> <span class="fas fa-key"></span>
                                            <input type="text" name="mobile" id="pwd" placeholder="mobile" />
                                        </div>
                                        <button class="btn mt-3">signup</button>
                                    </form>
                                    <div className="text-center fs-6"> <Link to="#">Forget password?</Link> or <Link to="/signin">LogIn</Link> </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
    
          {/* <section className="vh-lg-100 d-flex align-items-center">
            <div className="container">
                <div className="row justify-content-center form-bg-image" data-background-lg="/theme_files/assets/img/illustrations/signin.svg">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div className="text-center text-md-center mb-4 mt-md-0">
                                <h1 className="mb-0 h3">Create an account</h1>
                            </div>
                            <form action="#">
                               
                                <div className="form-group mb-4">
                                    <label for="email">Your Email</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon3"><span className="fas fa-envelope"></span></span>
                                        <input type="email" className="form-control" placeholder="example@company.com" id="email" autofocus required/>
                                    </div>  
                                </div>
                               
                                <div className="form-group">
                                   
                                    <div className="form-group mb-4">
                                        <label for="password">Your Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon4"><span className="fas fa-unlock-alt"></span></span>
                                            <input type="password" placeholder="Password" className="form-control" id="password" required/>
                                        </div>  
                                    </div>
                                   
                                    <div className="form-group mb-4">
                                        <label for="confirm_password">Confirm Password</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addon5"><span className="fas fa-unlock-alt"></span></span>
                                            <input type="password" placeholder="Confirm Password" className="form-control" id="confirm_password" required/>
                                        </div>  
                                    </div>
                                   
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="terms" required/>
                                        <label className="form-check-label" for="terms">
                                            I agree to the <a href="#">terms and conditions</a>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-block btn-primary">Sign in</button>
                            </form>
                            <div className="mt-3 mb-4 text-center">
                                <span className="font-weight-normal">or</span>
                            </div>
                            <div className="btn-wrapper my-4 text-center">
                                <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                                    <span aria-hidden="true" className="fab fa-facebook-f"></span>
                                </button>
                                <button className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button">
                                    <span aria-hidden="true" className="fab fa-twitter"></span>
                                </button>
                                <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button">
                                    <span aria-hidden="true" className="fab fa-github"></span>
                                </button>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <span className="font-weight-normal">
                                    Already have an account? 
                                    <Link to="/signin" className="font-weight-bold">Login here</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
    </>
  )
}

export default Signup