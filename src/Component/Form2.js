import React, { useState } from "react";

const Form2 = () => {
    let [name, setName] = useState("")
    let [email, setEmail] = useState("")
    let [error, setError]=useState("")
    let [password,setPassword]=useState("");
    let [cpassword,setcPassword]=useState("");


    function checkValidation(e) {
        e.preventDefault()
        console.log(name)

        if (name.trim()==="") {
            // alert("Enter name")
            setError("Enter name")
        }else if(email.trim()==="")
        {
            // alert("Enter email")
            setError("Enter email")
        }else if(password.trim()==="")
        {
            setError("Enter Password")
        }
        else if(cpassword.trim()==="")
        {
            setError("Enter Password")
        }
        else{
            setError("successful")
        }
    }
    return (
        <div>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Full name" />
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                <input type="password" onChange={(e) => setcPassword(e.target.value)} placeholder="Enter password" />


                <button type="submit" onClick={checkValidation}>submit</button>
            </form>

            <p>
                name:{name} , Email:{email},Password:{password}
            </p>

            {
               error && (
                <p >{error}</p>
               ) 
            }
        </div>
    )
}
export default Form2;