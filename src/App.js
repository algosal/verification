import React, { useState } from "react";
import "./App.css";
// import VerificationForm from "./components/VerificationForm/VerificationFormLogic";
import VerificationResult from "./components/VerificationResult/VerificationResult";
import VerificationForm from "./components/VerificationForm/VerificationForm";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="app-container">
      <VerificationForm onVerify={setResult} />
      <VerificationResult data={result} />
    </div>
  );
}

export default App;
