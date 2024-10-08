import React, { useState, useEffect } from "react";

function Form({ onEdit, onsubmit, data, onCancel }) {
  const [inputData, setInputData] = useState({
    name: '',
    description: '',
    price: ''
  });

  const [error, setError] = useState({
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    if (data) {
      setInputData({
        name: data.name || '',
        description: data.description || '',
        price: data.price || ''
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value
    }));

    setError((prev) => ({
      ...prev,
      [name]: ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!inputData.name) {
      newErrors.name = 'Please enter a valid service name.';
    }
    if (!inputData.description) {
      newErrors.description = 'Please enter a valid description.';
    }
    if (!inputData.price) {
      newErrors.price = 'Please enter a valid price.';
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      onsubmit(e, inputData, data?.id);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="serviceName">Service Name:</label>
      <input
        type="text"
        id="serviceName"
        name="name"
        onChange={handleChange}
        value={inputData.name}
      />
      {error.name && <span style={{ color: 'red' }}>{error.name}</span>}
      <br /><br />

      <label htmlFor="serviceDescription">Service Description:</label>
      <textarea
        id="serviceDescription"
        name="description"
        rows="4"
        cols="50"
        onChange={handleChange}
        value={inputData.description}
      ></textarea>
      {error.description && <span style={{ color: 'red' }}>{error.description}</span>}
      <br /><br />

      <label htmlFor="servicePrice">Service Price:</label>
      <input
        type="number"
        id="servicePrice"
        name="price"
        step="0.01"
        onChange={handleChange}
        value={inputData.price}
      />
      {error.price && <span style={{ color: 'red' }}>{error.price}</span>}
      <br /><br />

      <div className="form-control-container">
        <button type="submit" className="List-button">Submit</button>
        <button
          type="button"
          className="List-button cancel"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
