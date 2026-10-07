import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    return (
        <div className="login-page">

            <div className="login-box">

                <h1>Login</h1>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />

                <button
                    onClick={() => {
                        fetch("http://localhost:5000/api/auth/login", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                email: email,
                                password: password
                            })
                        })
                            .then((res) => {
                                if (!res.ok) {
                                    throw new Error("User not Found");
                                }
                                return res.json();
                            })
                            .then((data) => {
                                localStorage.setItem("token", data.token);
                                localStorage.setItem(
                                    "user",
                                    JSON.stringify(data.user)
                                );

                                setMessage("User login Successfully");
                                setError('');

                                console.log(data);
                                navigate("/dashboard");
                            })
                            .catch((err) => {
                                console.log(err.message);
                                setError("Login Failed");
                                setMessage('');
                            });
                    }}
                >
                    Login
                </button>

                {error ? <p className="error">{error}</p> : <p className="success">{message}</p>}

                <p className="signup-text">
                    Don't have an account?{" "}
                    <Link to="/signup">Signup</Link>
                </p>

            </div>

        </div>
    );
};

export default Login;