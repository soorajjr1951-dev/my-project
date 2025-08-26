import React from "react";

function AddCompany() {
  return (
    <div>
      <h2>Add Company</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Requirements</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddCompany;
