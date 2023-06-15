import React, { useState } from "react";

export default function quoter() {
  const [val, setVal] = useState("");

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setVal(e.target.value);
    }
  };

  return (
    <div>
      <input
        placeholder="Age"
        type="number"
        value={val}
        onChange={handleChange}
      />
    </div>
  );
}