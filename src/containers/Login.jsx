import '../App.css';
import { useState } from 'react';
import { loginUser } from '../api/users';
import { Link } from 'react-router-dom';
import { setLogin } from '../session/session';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState("");
    const login = async (e) => {
        try {
            e.preventDefault();
            const response = await loginUser({
                username: username,
                password: password,
            })
            if (response) {
                localStorage.setItem("trainee-auth-token", response.token)
                setLogin("1")
                setStatus("success");//"login user req success"
                window.location.replace("/home")
            }

        }
        catch (exception) {
            console.log("failed", exception)
            setStatus("invalid username or password");
        }
    };

    return (
        <div className="App">
            <div className="hed">
                <h3>Easy Clutch</h3>
            </div>
            <section>
                <div className="fbox">
                    <form >
                        <h2>Login</h2>
                        <div className="inbx">
                            <input type="email" required name='username'
                                onChange={(e) => {
                                    setUsername(e.target.value);
                                }} />
                            <label>Email</label>
                            <ion-icon name="mail-outline"></ion-icon>
                        </div>
                        <div className="inbx">
                            <input type="password" required onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                            <label>Password</label>
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </div>
                        <button onClick={login}>login</button>
                        <br />
                        <Link to='/forgotPassword' className="reg">Forget password</Link>
                        <br />
                        <Link to='/register' className="reg">sign up</Link>
                        <p>{status}</p>
                    </form>
                </div>
            </section>
        </div>
    );
}


export default Login;