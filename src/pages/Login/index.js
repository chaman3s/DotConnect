import React, { useState, useEffect } from 'react';
import bgImage from "./../../assets/images/background.jpg";
import bgImagemob from "../../assets/images/backgroundmb.jpg";
import "boxicons";
import "./backgroundimage.css";

const LoginPage = () => {
  const [backgroundImage, setBackgroundImage] = useState(bgImage);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setBackgroundImage(bgImagemob);
      } else {
        setBackgroundImage(bgImage);
      }
    };

    // Call the function immediately to set the initial background
    handleResize();

    // Attach the event listener to window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div style={{ backgroundImage: `url(${backgroundImage})` }} 
      className="w-full h-screen bg-no-repeat bg-cover bg-center blur-[10px]"></div>
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className="absolute w-3/4 sm:w-[306px] sm:h-[87%] h-[550px] bg-no-repeat bg-cover bg-center  top-[47%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[10px] mt-5">
     <div className="absolute top-0 left-0 w-1/2 h-full sm:w-full sm:h-1/2  p-20 sm:p-[10px] bg-transparent   text-[#e4e4e4] flex justify-between  sm:justify-start  flex-col rounded-[10px] mt-5">
            <h2 className="text-[30px] sm:text-[20px]"><i className='bx bxl-firebase'></i>DotConnect</h2>
            <div className="text-2xl sm:text-sm">
              <h2>Welcome!<br/><span>To Our New Website.</span></h2>
                <p className='text-base my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, unde.</p>
                <div >
                    <a  className="hover:scale-125" href="#"><i className="text-[22px] text-[#e4e4e4] mr-[10px] transition duration-500 ease-in-out bx bxl-linkedin"></i></a>
                    <a  className="hover:scale-125" href="#"><i className="text-[22px] text-[#e4e4e4] mr-[10px] transition duration-500 ease-in-out bx bxl-facebook"></i></a>
                    <a  className="hover:scale-125" href="#"><i className="text-[22px] text-[#e4e4e4] mr-[10px] transition duration-500 ease-in-out bx bxl-instagram"></i></a>
                    <a  className="hover:scale-125"href="#"><i className="text-[22px] text-[#e4e4e4] mr-[10px] transition duration-500 ease-in-out bx bxl-twitter"></i></a>
                </div>
            </div>
        </div>
        <div className='absolute top-0 right-0 w-[calc(100%-58%)] h-full overflow-hidden'>
        
          <div className={`absolute flex justify-center items-center w-full h-full bg-transparent  backdrop-blur-[20px] rounded-tr-[10px] rounded-br-[10px] text-[#e4e4e4] transition-transform duration-[600ms] ease-in-out delay-[700ms] transform ${isActive ? 'translate-x-0' : 'translate-x-[430px]'}`}>
            <form action="#">
                <h2 className='text-[32px] text-center'>Sign In</h2>
        
                <div className="input-box">
                    <span className="input-box-icon"><i className='bx bxs-user'></i></span>
                    <input className="input-box-input bg-transparent peer" type="text" required/>
                    <label className="input-box-label input-box-label-focuised">Username</label>
                </div>
        
                <div className="input-box">
                    <span className="input-box-icon"><i className='bx bxs-lock-alt'></i></span>
                    <input className="input-box-input bg-transparent  peer" type="password" required/>
                    <label className="input-box-label input-box-label-focuised">Password</label>
                </div>
                <div className="remember-forgot">
                  <a className='remember-forgot-link' href="#" id="forgetuser" onclick="activeElement('Forget_UserName')">Username password?</a>
                  <a className='remember-forgot-link' href="#"  id="forgetpasswd" onclick="activeElement('Forget_passwd')">Forgot password?</a>
                </div>
                <button type="submit" className="btn">Sign in</button>
                <div className="login-register">
                  <p>Don't have an account?<a href="#" className="login-register-link" onclick="ActiveElement('register')">Sign up </a></p>
                </div>

            </form>
        </div>
      </div>
        {/*  
        <div className="form-box register">
          <form action="#">
              <h2>Sign Up</h2>
              <div className="input-box">
                <span className="icon"><i className='bx bxs-user'></i></span>
                <input type="text" required>
                <label>Username</label>
            </div>
              <div className="input-box">
                  <span className="icon"><i className='bx bxs-envelope'></i></span>
                  <input type="email" required>
                  <label>Email</label>
              </div>
      
              <div className="input-box">
                  <span className="icon"><i className='bx bxs-lock-alt'></i></span>
                  <input type="password" required>
                  <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label><input type="checkbox">I agree to the terms & conditions</label>
              </div>
              <button type="submit" className="btn">Sign Up</button>
              <div className="login-register">
                <p>Already have an account?<a href="#" className="login-link" onclick="activeElement('login')">Sign in</a></p>
              </div>

          </form>
      </div>
      <div className="form-box Forget_passwd">
        <form action="#">
            <h2>Forget Password</h2>
    
            <div className="input-box">
                <span className="icon"><i className='bx bxs-user'></i></span>
                <input type="text" required>
                <label>Username</label>
            </div>
            <div className="remember-forgot">
              <a href="#" id="forgetuseranme" onclick="activeElement('Forget_UserName')">Forgot Username?</a>
            </div>
            <button type="submit" className="btn" id="forGetPassWd" onclick="activeElement('Verify_Otp')">Submit</button>
            <div className="login-forgettosignup">
              <p>Don't have an account?<a href="#" className="register-link" onclick="activeElement('register')">Sign up </a></p>
            </div>

        </form>
    </div>
    <div className="form-box Forget_UserName">
      <form action="#">
          <h2>Forget Username</h2>
  
          <div className="input-box">
              <span className="icon"><i className='bx bxs-envelope'></i></span>
              <input type="email" required>
              <label>Email</label>
          </div>
          <button type="submit" className="btn">Search</button>
          <div className="login-forgettosignup">
            <p>Don't have an account?<a href="#" className="register-link" onclick="activeElement('register')">Sign up </a></p>
          </div>

      </form>
  </div>
  <div className="form-box  Verify_Otp">
    <form action="#">
        <h2>Verify Otp</h2>

        <div className="input-box Otpfield">
            <span className="icon"><i className='bx bxs-user-check'></i></span>
            <input type="number"  required>
            <input type="number" required>
            <input type="number" required>
            <input type="number" required>
            <label>Otp</label>
        </div>
        <button type="submit" id="verifyOtp" className="btn" onclick="activeElement('CretePasswd')">Verify Otp</button>
        <div className="login-forgettosignup">
          <p>Don't recive Otp?<a href="#" className="resend-link">resend</a></p>
        </div>

    </form>
</div>
<div className="form-box CretePasswd">
  <form action="#">
      <h2>Create Password</h2>

      <div className="input-box">
        <span className="icon"><i className='bx bxs-lock-alt'></i></span>
        <input type="password" required>
        <label>Password</label>
    </div>
    <div className="input-box">
      <span className="icon"><i className='bx bxs-lock-alt'></i></span>
      <input type="password" required>
      <label>Confirm Password</label>
    </div>
      <button type="submit" id="createsPassWd" className="btn" onclick="activeElement('login')">Create Password</button>
      

  </form>
</div>

        </div> */}
    </div>
    </>
  );
};

export default LoginPage;
