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
        <div style={{ 
            textAlign: "center", 
            margin: "50px auto", 
            padding: "40px",
            fontFamily: "sans-serif",
            backgroundColor: "#f9f9f9",
            borderRadius: "16px",
            boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
            maxWidth: "600px"
        }}>
            <h1 style={{ fontSize: "48px", color: "#222", marginTop: "0" }}>
                Counter number: {count}
            </h1>

            <div style={{ gap: "15px", display: "flex", justifyContent: "center", marginBottom: "25px" }}>
                <button 
                    style={{ padding: "12px 24px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold" }} 
                    onClick={increment}
                >
                    INCREASE
                </button>
                <button 
                    style={{ padding: "12px 24px", cursor: "pointer", backgroundColor: "#FF9800", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold" }} 
                    onClick={decrement}
                >
                    DECREASE
                </button>
                <button 
                    style={{ padding: "12px 24px", cursor: "pointer", backgroundColor: "#F44336", color: "white", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold" }} 
                    onClick={reset}
                >
                    RESET
                </button>
            </div>
            
            {/* Added a minHeight wrapper so the layout doesn't jump when the text appears */}
            <div style={{ minHeight: "50px" }}>
                {checkSt && count === 0 ? (
                    <p style={{ 
                        color: "#D8000C", 
                        backgroundColor: "#FFD2D2", 
                        padding: "12px 24px", 
                        borderRadius: "8px", 
                        fontWeight: "bold",
                        display: "inline-block",
                        margin: "0"
                    }}>
                        Minimum limit reached!!! The counter cannot go below 0
                    </p>
                ) : null}
            </div>
        </div>
    )
}

export default Counter;