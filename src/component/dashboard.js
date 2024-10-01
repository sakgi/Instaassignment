import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2 for alerts
import "./dashboard.css"; // Custom styles for the component

const UpiPinInput = () => {
  const [pin, setPin] = useState(["", "", "", ""]);

  // Handle input change for each box
  const handleChange = (value, index) => {
    if (/^\d*$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);

      // Automatically focus the next input box if the value is filled
      if (value && index < 3) {
        document.getElementById(`pin-input-${index + 1}`).focus();
      }
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const pinCode = pin.join(""); // Concatenate the 4-digit pin
    if (pinCode.length === 4) {
      // Show the SweetAlert
      Swal.fire({
        title: "UPI PIN Submitted",
        text: `Your bank account amount is: xxxx`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Invalid PIN",
        text: "Please enter a 4-digit UPI PIN.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="upi-container">
      <form className="upi-form" onSubmit={handleSubmit}>
        <h2>Enter Your UPI PIN</h2>
        <div className="pin-inputs">
          {pin.map((value, index) => (
            <input
              key={index}
              type="tel" // Restrict to numeric input
              inputMode="numeric" // Optimized for mobile devices
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              id={`pin-input-${index}`}
              className="pin-box"
            />
          ))}
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default UpiPinInput;
