import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./title.css";

function Signup() {
    //This is where set and state is, ya'll
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "userName") {
            setuserName(value)
        }
        if (name === "password") {
            setpassword(value);
          }   
    };

    const handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        let user = {
            username: userName,
            password: password
        }
        API.registerUser(user).then(res => {
            console.log(res)
        })
    };
    return (
        <Container>
            <form id="reg-form">
                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="User Name"
                />
                <input
                    value={password}
                    name="password"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Password"
                />
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
            <Link
                to="/title"
                id="reg-form"
                className={window.location.pathname === "/title" ? "nav-link active" : "nav-link"}
            >
                Sign up!
            </Link>
        </Container>
    )
}

export default Signup;