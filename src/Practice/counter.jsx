import { useState } from "react";
let click = false;

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        console.log(click)
        if (click) {
            console.log('inside', click)
            return
        }
        else {
            console.log('else', click)
            click = true;
            setCount(count => count + 1);
            setTimeout(() => {
                click = false;
            }, 1000)
        }

    }
    return <>
        <button onClick={increment}>Increment: {count}</button>
    </>
}
export default Counter;