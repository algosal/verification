import React from "react";
import "./VerificationForm.css";
import { handleVerify } from "./VerificationFormLogic.js"; // logic

const VerificationForm = ({ onVerify }) => {
  return (
    <form
      className="verification-form"
      onSubmit={(e) => {
        e.preventDefault();
        const code = e.target.elements.code.value.trim();
        if (code) handleVerify(code, onVerify);
      }}
    >
      <h2>Letter Verification</h2>
      <input type="text" name="code" placeholder="Enter Verification Number" />
      <button type="submit">Verify</button>
    </form>
  );
};

export default VerificationForm; // ✅ THIS IS REQUIRED
