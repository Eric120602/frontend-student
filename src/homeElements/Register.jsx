import React, { useState } from 'react';
import { registerUser, verifyOtp } from '../api/users';
import { Link } from 'react-router-dom';



function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");
    const [firstname, setFirstnm] = useState("");
    const [lastname, setLastnm] = useState("");
    const register = async (e) => {

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
                    await registerUser({
                        username: username,
                        password: password,
                        firstName: firstname,
                        lastName: lastname,
                    })

                    console.log("register user req success")
                    let val = Number(window.prompt("Enter the OTP: "));
                    try {
                        await verifyOtp({
                            username: username,
                            otp: val,
                        })
                        console.log("verified")
                        alert("Successfully Registered...please login");
                        window.location.replace('/login');
                    }
                    catch (e) {
                        console.log("verification failed", e)
                        alert("Incorrect otp entered");
                    }

                }
                catch (exception) {
                    console.log("register user req failed")
                    alert("username already taken");
                }
            }
            else
                alert("password does not match");
        }
    };



    return (

        <div className="App">

            <div className="hed">
                <h3>Easy Clutch</h3>
            </div>

            <section className='sect'>
                <div className="fmbox">
                    <form>

                        <h2 className='logintitle'>Register</h2>
                        <div className="inbx">
                            <input type="name" required
                                onChange={(e) => {
                                    setFirstnm(e.target.value);
                                }} />
                            <label>First Name</label>
                        </div>
                        <div className="inbx">
                            <input type="name" required
                                onChange={(e) => {
                                    setLastnm(e.target.value);
                                }} />
                            <label>Last Name</label>
                        </div>
                        <div className="inbx">
                            <input type="email" required id="em"
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            <label>Email</label>
                        </div>

                        <div className="inbx">
                            <input type="password" required id="pass"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                            <label>Password</label>
                        </div>
                        <div className="inbx">
                            <input type="password" required
                                onChange={(e) => {
                                    setConfirmpassword(e.target.value);
                                }}
                            />
                            <label>Confirm Password</label>
                        </div>

                        <button className='btn' onClick={register}>Register</button>
                        <br />
                        <Link to='/login' className="reg">Already have an account?</Link>

                    </form>
                </div>
            </section>

        </div>


    );
}


export default Register;