import React, { useState, useEffect } from 'react';

const Multiplier = () => {
  const [sqft1, setSqft1] = useState('');
  const [sqft2, setSqft2] = useState('');
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const multiplied1 = parseFloat(sqft1) * 0.16;
    const multiplied2 = parseFloat(sqft2) * 0.18;
    const totalValue = (multiplied1 + multiplied2);

    setResult1(isNaN(multiplied1) ? 0 : multiplied1.toFixed(2));
    setResult2(isNaN(multiplied2) ? 0 : multiplied2.toFixed(2));
    setTotal(isNaN(totalValue) ? 0 : totalValue.toFixed(2));
  }, [sqft1, sqft2]);

  const handleInputChange1 = (event) => {
    setSqft1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setSqft2(event.target.value);
  };

  return (
    <div style={containerStyle}>
    <p className="text-center font-metBold text-2xl uppercase md:hidden">try our pricing calculator!</p>
      <div style={sectionStyle}>
        <h2>House Square Footage ($0.16/sqft)</h2>
        <input
          type="number"
          value={sqft1}
          onChange={handleInputChange1}
          placeholder="Ex. 2300"
          style={inputStyle}
        />
        <div style={resultContainerStyle}>
          <h3>House Estimate: </h3>
          <p style={resultStyle}>${result1}</p>
        </div>
      </div>
      <div style={sectionStyle}>
        <h2>Driveway/Path Square Footage ($0.18/sqft)</h2>
        <input
          type="number"
          value={sqft2}
          onChange={handleInputChange2}
          placeholder="Ex. 800"
          style={inputStyle}
        />
        <div style={resultContainerStyle}>
          <h3>Driveway/Path Estimate:</h3>
          <p style={resultStyle}>${result2}</p>
        </div>
      </div>
      <div style={totalSectionStyle}>
        <h2>Total Estimate: </h2>
        <p style={resultStyle}>${total}</p>
      </div>
    </div>
  );
};

// Styling
const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };
  
  const sectionStyle = {
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    margin: '10px',
    width: '100%',
    maxWidth: '400px',
  };
  
  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
  };
  
  const resultContainerStyle = {
    marginTop: '20px',
  };
  
  const totalSectionStyle = {
    marginTop: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '400px',
  };
  
  const resultStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333333',
  };
  
  export default Multiplier;