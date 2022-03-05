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
            <div className='container-fulid' style={{backgroundImage: "url(/img/kites.jpg)", backgroundRepeat: "no-repeat", }}>
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













// import React from "react";
// import { Link } from "react-router-dom";

// function SignIn() {
//   return (
//     <>

//       <div className="vh-100"  style={{backgroundImage:"url(img/ring.jpg)", backgroundRepeat:"no-repeat", backgroundSize: "cover"}}>
//           <div className="container "> 
//            <div className="text-center text-md-center mb-4 mt-md-0">
//                     <h1 className="mb-0 h3">Sign in to our platform</h1>
//                   </div>
//           <div className="row">
//           <div className="col-lg-4  d-flex align-items-center justify-content-center">
//                 <div className="signin-inner my-3 my-lg-0  p-4 p-lg-5 w-100 fmxw-500">
                 
//                   <form className="mt-4">
//                     <div className="form-group mb-4">
//                       <label for="email">Your Email</label>
//                       <div className="input-group">
//                         <span className="input-group-text" id="basic-addon1">
//                           <span className="fas fa-envelope"></span>
//                         </span>
//                         <input
//                           type="email"
//                           className="form-control"
//                           placeholder="example@company.com"
//                           id="email"
//                           name="email"
//                           autofocus
//                           required
//                         />
//                       </div>
//                     </div>

//                     <div className="form-group">
//                       <div className="form-group mb-4">
//                         <label for="password">Your Password</label>
//                         <div className="input-group">
//                           <span className="input-group-text" id="basic-addon2">
//                             <span className="fas fa-unlock-alt"></span>
//                           </span>
//                           <input
//                             type="password"
//                             placeholder="Password"
//                             className="form-control"
//                             id="password"
//                             name="password"
//                             required
//                           />
//                         </div>
//                       </div>

//                       <div className="d-flex justify-content-between align-items-center mb-4">
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="checkbox"
//                             value=""
//                             id="defaultCheck5"
//                             name="rememberme"
//                           />
//                           <label
//                             className="form-check-label"
//                             for="defaultCheck5"
//                           >
//                             Remember me
//                           </label>
//                         </div>
//                         <div>
//                           <Link
//                             to="/forgot-password"
//                             className="small text-right"
//                           >
//                             Lost password?
//                           </Link>
//                         </div>
//                       </div>
//                     </div>
//                     <button type="submit" className="btn btn-block btn-primary">
//                       Sign in
//                     </button>
//                   </form>
//                   <div className="mt-3 mb-4 text-center">
//                     <span className="font-weight-normal">or login with</span>
//                   </div>
//                   <div className="btn-wrapper my-4 text-center">
//                     <button
//                       className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2"
//                       type="button"
//                       aria-label="facebook button"
//                       title="facebook button"
//                     >
//                       <span
//                         aria-hidden="true"
//                         className="fab fa-facebook-f"
//                       ></span>
//                     </button>
//                     <button
//                       className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2"
//                       type="button"
//                       aria-label="twitter button"
//                       title="twitter button"
//                     >
//                       <span
//                         aria-hidden="true"
//                         className="fab fa-twitter"
//                       ></span>
//                     </button>
//                     <button
//                       className="btn btn-icon-only btn-pill btn-outline-light text-facebook"
//                       type="button"
//                       aria-label="github button"
//                       title="github button"
//                     >
//                       <span aria-hidden="true" className="fab fa-github"></span>
//                     </button>
//                   </div>
//                   <div className="d-flex justify-content-center align-items-center mt-4">
//                     <span className="font-weight-normal">
//                       Not registered?
//                       <Link to="/signup" className="font-weight-bold">
//                         Create account
//                       </Link>
//                     </span>
//                   </div>
//                 </div>
//           </div>
//           <div className="col-lg-8">

//           </div>
//           </div>
//           </div>
//       </div>
//     </>
//   );
// }

// export default SignIn;
