import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updatePassword } from '../api/users'; 

function ForgotPassword() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const[confirmpassword, setConfirmpassword] = useState("");
    const[status, setStatus] = useState("");
    const forgotPass = async (e) => {

    
    if(password===confirmpassword) 
    {
        try {
            e.preventDefault();
            console.log("enter")
            const response = await updatePassword({
                username: username,
                password: password,
            })
            console.log("entered",response)
            if(response){
            setStatus("success");//"login user req success"
            }
            
        }
        catch (exception) {
            console.log("failed")
            setStatus("invalid");
        }
    }
    };


    return (



        <div className="all">

            <div className="hed">
                <h3>Easy Clutch</h3>
            </div>



            <section>


                <div className="fboxfp">
                    <form >

                        <h2>Forgot password</h2>

                        <div className="inbx">
                            <input type="email" required name='username'
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            <label>Email</label>

                            
                        </div>

                        <div className="inbx">
                            <input type="password" required onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <label>Password</label>
                            
                        </div>

                        <div className="inbx">
                            <input type="password" required onChange={(e) => {
                                setConfirmpassword(e.target.value);
                            }} />
                            <label>Confirm Password</label>
                            
                        </div>

                        <button onClick={forgotPass}>reset</button>
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