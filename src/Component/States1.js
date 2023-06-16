import React,{useState} from "react";

// let a=0;
const States1=()=>{
let [count , setCount]=useState(0);

let a=0;

    function increase1()
    {
        a++;
        console.log(a);
    }

    function increase2()
    {
        setCount(count +1)
    }
return (
    <div>
        <h1>Normal variable={a}</h1>
        <button onClick={increase1}>Increase</button>

        <h1>useState variable ={count}</h1>
        <button onClick={increase2}>Increase</button>
    </div>
)
}
export default States1;