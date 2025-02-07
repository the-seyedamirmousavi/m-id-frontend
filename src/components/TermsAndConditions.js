import { useState } from 'react';

export default function TermsAndConditions() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <TextParagraph
        title="Terms and Conditions"
        paragraph="To become an official representative of M-ID, you must accept the following terms and conditions. By agreeing to these terms, you confirm that you understand the company's policies regarding security, responsibilities, and legal obligations. The company reserves the right to update these terms at any time. Failure to adhere to the terms may result in termination of your representation contract."
      />
      
      <div className="d-flex align-items-center mt-3">
        <input
          type="checkbox"
          id="terms"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="terms" className="ms-2">
          I agree to the Terms and Conditions
        </label>
      </div>

      <button
        className="btn btn-primary mt-3"
        disabled={!isChecked}
      >
        Submit
      </button>
    </div>
  );
}
