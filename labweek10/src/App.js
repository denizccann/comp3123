import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h1>Data Entry Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Enter email" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Address</label>
          <input type="text" name="address" placeholder="1234 Main St" onChange={handleChange} required />
        </div>

        <div className="form-group full-width">
          <label>Address 2</label>
          <input type="text" name="address2" placeholder="Apartment, studio, or floor" onChange={handleChange} />
        </div>

        <div className="row three-cols">
          <div className="form-group">
            <label>City</label>
            <input type="text" name="city" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Province</label>
            <select name="province" onChange={handleChange} defaultValue="" required>
              <option value="" disabled>Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="form-group">
            <label>Postal Code</label>
            <input type="text" name="postalCode" onChange={handleChange} required />
          </div>
        </div>

        <div className="checkbox-group">
          <input type="checkbox" name="agree" id="agree" onChange={handleChange} required />
          <label htmlFor="agree">Agree Terms & Condition?</label>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-details">
          <div className="detail-row">
            <span className="label">Email:</span>
            <span className="value">{submittedData.email}</span>
          </div>
          <div className="detail-row">
            <span className="label">Full Name:</span>
            <span className="value">{submittedData.name}</span>
          </div>
          <div className="detail-row">
            <span className="label">Address:</span>
            <span className="value">{submittedData.address} {submittedData.address2}</span>
          </div>
          <div className="detail-row">
            <span className="label">City:</span>
            <span className="value">{submittedData.city}</span>
          </div>
          <div className="detail-row">
            <span className="label">Province:</span>
            <span className="value">{submittedData.province}</span>
          </div>
          <div className="detail-row">
            <span className="label">Postal Code:</span>
            <span className="value">{submittedData.postalCode}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;