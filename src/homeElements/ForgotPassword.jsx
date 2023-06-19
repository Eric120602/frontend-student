import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { requestForgotpassword, updatePassword } from '../api/users';

function ForgotPassword() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [status, setStatus] = useState("");
    const [pstatus, setPstatus] = useState("");

    const forgotPass = async (e) => {
        e.preventDefault();
        if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(username)) {
            alert("Enter a valid email.")
        }
        else if (password.length < 8) {
            alert("Your password must be at least 8 characters.")
        }
        else if (!/[A-Z]/.test(password)) {
            alert("Your password must contain an uppercase letter.")
        }
        else if (!/[a-z]/.test(password)) {
            alert("Your password must contain a lowercase letter.")
        }
        else if (!/[0-9]/.test(password)) {
            alert("Your password must contain a number.")
        }
        else if (!/[^a-zA-Z0-9]/.test(password)) {
            alert("Your password must contain a special characters.")
        }

        else {
            if (password === confirmpassword) {

                try {
                    e.preventDefault();
                    const userId = await requestForgotpassword({
                        username: username
                    })
                    let val = Number(window.prompt("Enter the OTP: "));
                    console.log(userId)
                    try {

                        console.log("enter")
                        const response = await updatePassword({
                            id: userId.id,
                            otp: val,
                            password: password,
                        })
                        console.log("entered", response)
                        if (response) {
                            alert("Password reset successfull...please login");
                            window.location.replace('/login');
                        }

                    }
                    catch (exception) {
                        console.log("failed")
                        setStatus("invalid");
                        alert("Incorrect otp entered");
                    }
                }
                catch (e) {
                    console.log("failed")
                    setStatus("invalid");
                }
            }
            else
                alert("password does not match");
        }
    };




    return (

        <div className="all">

            <div className="hed">
                <h3>Easy Clutch</h3>
            </div>

            <section className='sect'>

                <div className="fboxfp">
                    <form >

                        <h2 className='logintitle'>Forgot password</h2>

                        <div className="inbx">
                            <input type="email" required name='username'
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            <label>Email</label>
                        </div>

                        <div className="inbx">
                            <input type="password" required onChange={(e) => {
                                setPassword(e.target.value); checkEssentials(e)
                            }} />
                            <label>Password</label>

                        </div>

                        <div className="inbx">
                            <input type="password" required onChange={(e) => {
                                setConfirmpassword(e.target.value);
                            }} />
                            <label>Confirm Password</label>
                        </div>

                        <button className='btn' onClick={forgotPass}>Reset</button>
                        <br />
                        <Link to='/register' className="reg">sign up</Link>
                        <p>{status}</p>

                    </form>
                </div>
            </section>
        </div>

    );
}

export default ForgotPassword;