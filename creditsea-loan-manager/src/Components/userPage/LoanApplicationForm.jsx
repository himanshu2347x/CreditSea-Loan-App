import axios from "axios";
import React, { useState } from "react";

const LoanApplicationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    loanAmount: "",
    loanTenure: "",
    reason: "",
    employmentStatus: "",
    employmentAddress: "",
    personalInfoConsent: false,
    creditInfoConsent: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.personalInfoConsent || !formData.creditInfoConsent) {
      setErrorMessage("You must agree to the terms and conditions.");
      return;
    }

    try {
      // Make API call to submit loan application
      const response = await axios.post("http://localhost:5000/api/loans/apply", {
        fullName: formData.fullName,
        amount: formData.loanAmount,
        tenure: formData.loanTenure,
        reason: formData.reason,
        employmentStatus: formData.employmentStatus,
        employmentAddress: formData.employmentAddress,
      });

      // Handle success
        setSuccessMessage(response.data.message);
      setErrorMessage("");
      setFormData({
        fullName: "",
        loanAmount: "",
        loanTenure: "",
        reason: "",
        employmentStatus: "",
        employmentAddress: "",
        personalInfoConsent: false,
        creditInfoConsent: false,
      });
    } catch (error) {
      // Handle error
      setErrorMessage(
        error.response?.data?.error || "An error occurred while submitting the application."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-left">APPLY FOR A LOAN</h1>

            {/* Success and Error Messages */}
            {successMessage && (
              <div className="mb-4 text-green-700 bg-green-100 p-3 rounded">
                {successMessage}
              </div>
            )}
            {errorMessage && (
              <div className="mb-4 text-red-700 bg-red-100 p-3 rounded">
                {errorMessage}
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Full name as it appears on bank account
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full name as it appears on bank account"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Loan Amount */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  How much do you need?
                </label>
                <input
                  type="number"
                  name="loanAmount"
                  value={formData.loanAmount}
                  onChange={handleInputChange}
                  placeholder="How much do you need?"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Loan Tenure */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Loan tenure (in months)
                </label>
                <input
                  type="number"
                  name="loanTenure"
                  value={formData.loanTenure}
                  onChange={handleInputChange}
                  placeholder="Loan tenure (in months)"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Employment Status */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Employment status
                </label>
                <input
                  type="text"
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleInputChange}
                  placeholder="Employment status"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Reason for Loan */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Reason for loan
                </label>
                <input
                  type="text"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  placeholder="Reason for loan"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>

              {/* Employment Address */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Employment address
                </label>
                <input
                  type="text"
                  name="employmentAddress"
                  value={formData.employmentAddress}
                  onChange={handleInputChange}
                  placeholder="Employment address"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
            </div>

            {/* Consent Checkboxes */}
            <div className="mb-4 flex justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="personalInfoConsent"
                  checked={formData.personalInfoConsent}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">
                  I have read the important information and accept that by completing the application I will be bound by the terms
                </span>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="creditInfoConsent"
                  checked={formData.creditInfoConsent}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <span className="text-sm text-gray-700">
                  Any personal and credit information obtained may be disclosed from time to time to other lenders, credit bureaus or other credit reporting agencies.
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoanApplicationForm;