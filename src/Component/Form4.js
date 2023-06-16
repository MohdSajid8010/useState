import React, { useState } from "react";

const Form4=()=>{
let [name,setName]=useState("")
let [final_name,setfinal_name]=useState("")

function show_name()
{
    console.log(final_name,name)
    setfinal_name(name)
    console.log(final_name)

}
    return (
        <div>
            <input type="text"
            onChange={(e)=>setName(e.target.value)}
            value={name}
            placeholder="Enter Your Nmae"/>

            <button type="button" onClick={show_name}>show name</button>

            <h3>name:{final_name}</h3>
        </div>


    )
}
export default Form4;