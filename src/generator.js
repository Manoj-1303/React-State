import { useState } from "react";

const Generator = () => {
    const [randomNumber, setRandomNumber] = useState(null);

    const generateNumber = () => {
        setRandomNumber(Math.floor(Math.random() * 100) + 1);
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
            maxWidth: "500px"
        }}>
            <h1 style={{ fontSize: "36px", color: "#222", marginTop: "0", marginBottom: "20px" }}>
                Random Number Generator
            </h1>

            <div style={{
                minHeight: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "30px",
                backgroundColor: "white",
                borderRadius: "12px",
                border: "1px solid #eaeaea"
            }}>
                {randomNumber === null ? (
                    <p style={{ fontStyle: "italic", color: "#888", margin: "0", fontSize: "18px" }}>
                        No number generated yet
                    </p>
                ) : (
                    <h1 style={{ fontSize: "4.5rem", margin: "0", color: "#007BFF" }}>
                        {randomNumber}
                    </h1>
                )}
            </div>

            <button
                style={{
                    padding: "14px 28px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#007BFF",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 12px rgba(0, 123, 255, 0.3)"
                }}
                onClick={generateNumber}
            >
                Generate Random Number
            </button>
        </div>
    );
};

export default Generator;