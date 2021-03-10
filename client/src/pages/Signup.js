import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./title.css";
import Torches from "../components/Torches";

function Signup() {
    //This is where set and state is, ya'll
    const [userName, setuserName] = useState("");
    const [age, setage] = useState("");

    const handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

        if (name === "userName") {
            setuserName(value)
        }
        if (name === "age") {
            setage(value);
        }
    };

    const handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        let user = {
            username: userName,
            age: age
        }
        // create a cookie that is like username = userName
        document.cookie = `username=${userName};`
        API.registerUser(user).then(res => {
            console.log(res)
        })
    };
    return (
        <div>
            <div id="torch_more">
                <Torches />
            </div>
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
                    value={age}
                    name="age"
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Age"
                />
                <button onClick={handleFormSubmit}>Save</button>
            </form>
            <Link
                to="/title"
                id="reg-form"
                className={window.location.pathname === "/title" ? "nav-link active" : "nav-link"}
               
            >
               Enter!
            </Link >
            
        </Container >
        <div id="torches_more">
        <Torches />
        </div>
        </div>
    )
}

export default Signup;