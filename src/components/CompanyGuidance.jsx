import React, { useState } from "react";

function CompanyGuidance() {
  const [resources, setResources] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResources([...resources, { name: file.name, url: URL.createObjectURL(file) }]);
    }
  };

  return (
    <div className="p-4">
      <h2>Company Resources</h2>
      <input type="file" onChange={handleUpload} className="form-control mb-3" />
      <ul className="list-group">
        {resources.map((res, idx) => (
          <li key={idx} className="list-group-item">
            <a href={res.url} target="_blank" rel="noreferrer">
              {res.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CompanyGuidance;