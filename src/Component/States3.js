import React,{useState} from "react";

const States3=()=>{
let [favFruit,setfavFruit]=useState(["Apple","Mango","Banana"])
let [newFriut,setnewFriut]=useState("")

function addFriut()
{
    
    setfavFruit([...favFruit, newFriut])
}
console.log(favFruit,newFriut)
    return (
        <div>
            <input type="text"
            onChange={(e)=>setnewFriut(e.target.value)}
            />
            <button type="button"
            onClick={addFriut}
            >add to Favrate Fruit</button><br/>

            <h3>Faverate Fruit: {favFruit.join(" , ")}</h3>
            <h3>{newFriut}</h3>

        </div>


        
    )
}

export default States3;