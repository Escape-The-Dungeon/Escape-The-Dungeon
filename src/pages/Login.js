import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import "./title.css"

function Login() {
const form = document.getElementById('reg-form')
form.addEventListener('submit', registerUser)

function registerUser(event) {
    event.preventDefault()
    const username = document.getElementById('username')
    const password = document.getElementById('password')
}

    return (
        <Container>
            <form id="reg-form">
                <input type="text" id="username" placeholder="Username" />
                <input type="password" id="password" placeholder="Password" />
            </form>
            {/* <section className="authentication">
                <div className="login-wrapper">
                    <h1>Please Log In</h1>
                    <form>
                        <label>
                            <p>Username</p>
                            <input type="text" />
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" />
                        </label>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div> */}
                <Link
                    to="/title"
                    className={window.location.pathname === "/title" ? "nav-link active" : "nav-link"}
                >
                    Sign up!
            </Link>
            {/* </section> */}
        </Container>


    )
}

export default Login;