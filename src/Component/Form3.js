import React, { useState } from "react";

const Form3=()=>{
let [name,setName]=useState("")

function reset()
{
    setName("")
}
    return (
        <div>
            <input type="text"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            placeholder="Enter Your Nmae"/>
            <button type="button" onClick={reset}>Reset</button>

            <h3>name:{name}</h3>
        </div>


    )
}
export default Form3;