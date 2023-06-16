import React from "react";
import States1 from "./Component/States1"
import Counter from "./Component/Counter";
import States2 from "./Component/States2";
import Form1 from "./Component/Form1";
import Form2 from "./Component/Form2"
import States3 from "./Component/States3"
import Form3 from "./Component/Form3";
import Form4 from "./Component/Form4";
import LazyStates from "./Component/LazyState"


//import other component form Component folder

const App=()=>{
    return (
        <div>
            {/* <h1>Hello world</h1> */}
            {/* <States1/> */}
            {/* <Counter/> */}
            {/* <States2/> */}
            {/* <Form1/> */}
            {/* <Form2/> */}
            {/* <States3/> */}
            {/* <Form3/> */}
            {/* <Form4/> */}
            <LazyStates/>

        </div>
    )

}

export default App
