import React, { useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";
import API from "../utils/API";
import "./title.css";
import Torches from "../components/Torches";
import Navbar from "../components/Navbar";
import Music from "../components/Music";

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
            if(user.userName || user.age === '') {
                alert("Invalid Input")
                return
            } 
            if (user.age < 13) {
                alert('Please get your parents permission and try again');
                return;
            }
            // create a cookie that is like username = userName
            document.cookie = `username=${userName};`
            API.registerUser(user).then(res => {
                console.log(res)
                console.log("this works");
                document.location.href = "/title";
            })
      

    };
    return (
        <div>
             <div>
            
            </div>
            <div id="torch_more">
                <Torches />
            </div>
            <Navbar />
            <div id="caption">
                <h3>Must be 13 or older to play</h3>
            </div>
            <Container>
                <div id="box">
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
                         
                    </form>
                </div>
                <form method="get" action="/title">
                    <button  type="submit" id="reg" onClick={handleFormSubmit}>ENTER</button> 
                    </form>
           

            </Container >
            <div id="torches_more">
                <Torches />
            </div>
        </div>
    )
}

export default Signup;