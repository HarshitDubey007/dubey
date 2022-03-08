import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFormData } from '../../helpers/helpers';
import { login } from '../../redux/User';
import api from '../../utils/api';
import "./style.css";

export default function SignIn() {

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
                                    <div className="text-center mt-4 name"> Login </div>
                                    <form class="p-3 mt-3" onSubmit={(e) => {
                                        authenticateUser(e);
                                    }}>
                                        <div className="form-field d-flex align-items-center"> <span class="far fa-user"></span>
                                            <input type="text" name="email" id="userName" placeholder="email" />
                                        </div>
                                        <div className="form-field d-flex align-items-center"> <span class="fas fa-key"></span>
                                            <input type="password" name="password" id="pwd" placeholder="Password" />
                                        </div>
                                        <button class="btn mt-3">Login</button>
                                    </form>
                                    <div className="text-center fs-6"> <Link to="#">Forget password?</Link> or <Link to="/signup">Sign up</Link> </div>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}










