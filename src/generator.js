import { useState } from "react";

const Generator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "48px" }}>Random Number Generator</h1>
      <div style={{ minHeight: "80px", marginBottom: "20px" }}>
        {randomNumber === null ? (
          <p style={{ fontStyle: "italic", color: "gray" }}>No number generated yet</p>
        ) : (
          <h1 style={{ fontSize: "3rem", margin: "0" }}>{randomNumber}</h1>
        )}
      </div>

      <button style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }} onClick={generateNumber}>
        Generate Random Number
      </button>
    </div>
  );
};
export default Generator;