import React, { useState } from "react";

const LazyStates = () => {

    function hello() {
        console.log("hello");
        return 0;
    }

    // let [count,setCount]=useState(hello());
    // let [count,setCount]=useState(()=>{
    //     console.log("hello");
    //     return 0;
    // });
    let [count, setCount] = useState(() => hello());

    return (
        <div>
            <h1>count:{count}</h1>
            <button type="button" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default LazyStates;