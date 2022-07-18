import React from "react";
import DopplerImportButton from "@doppler/import-button-react";
import "./App.css";

const secrets = [
  {
    name: "STRIPE_API_KEY",
    value: "sk_test_123456789",
  },
  {
    name: "GITHUB_API_KEY",
    value: "gh_test_123456789",
  },
];

function App() {
  return (
    <div>
      {secrets.map((secret) => (
        <div style={{ display: "flex", gap: "5px", marginTop: "10px", marginLeft: "10px" }} key={secret.name}>
          <input readOnly value={secret.name} />
          <input readOnly type="password" value={secret.value} />
          <DopplerImportButton secretName={secret.name} secretValue={secret.value} />
        </div>
      ))}
    </div>
  );
}

export default App;
