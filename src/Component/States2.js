import React, { useState } from "react";

const States2 = () => {
    let [countObj, setcountObj] = useState({ gold: 0, silver: 0, bronze: 0 })

    console.log(countObj)
    function incrementGold() {
        setcountObj({ ...countObj, gold: countObj.gold + 1 })
    }
    return (
        <div>
            <h1>gold:{countObj.gold},silver:{countObj.silver},bronze:{countObj.bronze}</h1>
            <button onClick={() => incrementGold()}>gold</button>
            <button onClick={()=> setcountObj({...countObj ,silver:countObj.silver+1})}>silver</button>
            <button onClick={()=> setcountObj({...countObj, bronze:countObj.bronze+1})}>bronze</button>

        </div>
    )
}

export default States2;