import React, { useState } from "react";

const Form1 = () => {
    let [name, setName] = useState("")
    // function handleChange(e) {
    //     console.log("HI", e.target, e.target.value)
    //     setName(e.target.value)
    // }

    return (
        <div>
            {/* <input type="text" onChange={handleChange} placeholder="Enter your name"/> */}
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />

            <p>{name}</p>
        </div>
    )
}
export default Form1;