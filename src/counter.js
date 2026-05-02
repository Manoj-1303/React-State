import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);
    const [checkSt, setCheckSt] = useState(false);

    const increment = () => {
        setCount(count + 1);
        setCheckSt(true);
    };

    const decrement = () => {
        setCount(count > 0 ? count - 1 : 0);
        setCheckSt(true);
    };

    const reset = () => {
        setCount(0);
        setCheckSt(false);
    };
    return (
        <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
            <h1 style={{ fontSize: "48px" }}>Counter number: {count}</h1>

            <div style={{ gap: "10px", display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <button style={{ padding: "10px 20px", cursor: "pointer" }} onClick={increment}>INCREASE</button>
                <button style={{ padding: "10px 20px", cursor: "pointer" }} onClick={decrement}>DECREASE</button>
                <button style={{ padding: "10px 20px", cursor: "pointer" }} onClick={reset}>RESET</button>
            </div>
            {checkSt && count === 0 ? (<p style={{ color: "red", fontWeight: "bold" }}>Minimum limit reached!!! The counter cannot go below 0</p>) : null}
        </div>
    )
}

export default Counter;