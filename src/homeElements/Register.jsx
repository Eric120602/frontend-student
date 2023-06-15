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
                    window.location.replace('http://localhost:3000/login');
                }
                catch (e) {
                    console.log("verification failed", e)
                    alert("Incorrect otp entered");
                }



                /*const otp= sendEmail({username: username, firstname: firstnm})
                console.log(otp);
                console.log("otp send");
                let val=Number(window.prompt("Enter the OTP: "));
                
                if(val===otp){
                
                alert("Successfully registered...please login");
                window.location.replace('http://localhost:3000/login');
                //const navigate = useNavigate();
                //navigate('/login', { replace: true });
                //<Redirect to='/login' />
                }
                else{
                    alert("Invalid otp entered...");
                    try{
                    const rem= removeUser({
                        username: username
                    })
                    console.log("removed",rem)
                }
                catch(e){
                    console.log(e,"delete failed")
                }
                }*/
            }
            catch (exception) {
                console.log("register user req failed")
                alert("username already taken");
            }
        }
        else
            alert("password does not match");
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