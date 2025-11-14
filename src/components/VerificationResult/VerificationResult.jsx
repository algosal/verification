import React from "react";
import "./VerificationResult.css"; // separate CSS for result card

const VerificationResult = ({ data }) => {
  if (!data) return null;

  if (data.status === "not_found") {
    return <p className="result-error">❌ Verification number not found.</p>;
  }

  return (
    <div className="result-card">
      <h3 className="result-title">Verification Result</h3>

      <p>
        <strong>Status:</strong> {data.status}
      </p>
      <p>
        <strong>Verification #:</strong> {data.verification_number}
      </p>
      <p>
        <strong>Recipient:</strong> {data.recipient_name}
      </p>
      <p>
        <strong>Title:</strong> {data.recipient_title}
      </p>
      <p>
        <strong>Subject:</strong> {data.subject}
      </p>
      <p>
        <strong>Date Sent:</strong> {data.date_sent}
      </p>

      {data.file_url && (
        <p>
          <a
            href={data.file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="result-link"
          >
            View Letter
          </a>
        </p>
      )}
    </div>
  );
};

export default VerificationResult;
