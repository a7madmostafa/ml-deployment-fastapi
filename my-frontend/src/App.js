import React, { useState } from "react";

export default function App() {
  const [formData, setFormData] = useState({
    gender: "Female",
    seniorcitizen: 0,
    partner: "Yes",
    dependents: "No",
    phoneservice: "Yes",
    multiplelines: "No",
    internetservice: "DSL",
    onlinesecurity: "No",
    onlinebackup: "No",
    deviceprotection: "No",
    techsupport: "No",
    streamingtv: "No",
    streamingmovies: "No",
    contract: "Month-to-month",
    paperlessbilling: "Yes",
    paymentmethod: "Electronic check",
    tenure: 12,
    monthlycharges: 70,
    totalcharges: 840,
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "seniorcitizen" ? Number(value) : value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        "https://ml-deployment-fastapi-production.up.railway.app/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult("Error: " + error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Telco Churn Prediction</h1>

      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl bg-white p-6 rounded-2xl shadow">
        {/* Gender */}
        <div>
          <label className="block mb-1">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>

        {/* Senior Citizen */}
        <div>
          <label className="block mb-1">Senior Citizen</label>
          <select
            name="seniorcitizen"
            value={formData.seniorcitizen}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Partner */}
        <div>
          <label className="block mb-1">Partner</label>
          <select
            name="partner"
            value={formData.partner}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Dependents */}
        <div>
          <label className="block mb-1">Dependents</label>
          <select
            name="dependents"
            value={formData.dependents}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Phone Service */}
        <div>
          <label className="block mb-1">Phone Service</label>
          <select
            name="phoneservice"
            value={formData.phoneservice}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Multiple Lines */}
        <div>
          <label className="block mb-1">Multiple Lines</label>
          <select
            name="multiplelines"
            value={formData.multiplelines}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No phone service</option>
          </select>
        </div>

        {/* Internet Service */}
        <div>
          <label className="block mb-1">Internet Service</label>
          <select
            name="internetservice"
            value={formData.internetservice}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>DSL</option>
            <option>Fiber optic</option>
            <option>No</option>
          </select>
        </div>

        {/* Online Security */}
        <div>
          <label className="block mb-1">Online Security</label>
          <select
            name="onlinesecurity"
            value={formData.onlinesecurity}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No internet service</option>
          </select>
        </div>

        {/* Online Backup */}
        <div>
          <label className="block mb-1">Online Backup</label>
          <select
            name="onlinebackup"
            value={formData.onlinebackup}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No internet service</option>
          </select>
        </div>

        {/* Device Protection */}
        <div>
          <label className="block mb-1">Device Protection</label>
          <select
            name="deviceprotection"
            value={formData.deviceprotection}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No internet service</option>
          </select>
        </div>

        {/* Tech Support */}
        <div>
          <label className="block mb-1">Tech Support</label>
          <select
            name="techsupport"
            value={formData.techsupport}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No internet service</option>
          </select>
        </div>

        {/* Streaming TV */}
        <div>
          <label className="block mb-1">Streaming TV</label>
          <select
            name="streamingtv"
            value={formData.streamingtv}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No internet service</option>
          </select>
        </div>

        {/* Streaming Movies */}
        <div>
          <label className="block mb-1">Streaming Movies</label>
          <select
            name="streamingmovies"
            value={formData.streamingmovies}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>No</option>
            <option>Yes</option>
            <option>No internet service</option>
          </select>
        </div>

        {/* Contract */}
        <div>
          <label className="block mb-1">Contract</label>
          <select
            name="contract"
            value={formData.contract}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Month-to-month</option>
            <option>One year</option>
            <option>Two year</option>
          </select>
        </div>

        {/* Paperless Billing */}
        <div>
          <label className="block mb-1">Paperless Billing</label>
          <select
            name="paperlessbilling"
            value={formData.paperlessbilling}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>

        {/* Payment Method */}
        <div>
          <label className="block mb-1">Payment Method</label>
          <select
            name="paymentmethod"
            value={formData.paymentmethod}
            onChange={handleChange}
            className="w-full border rounded p-2"
          >
            <option>Electronic check</option>
            <option>Mailed check</option>
            <option>Bank transfer (automatic)</option>
            <option>Credit card (automatic)</option>
          </select>
        </div>

        {/* Tenure */}
        <div>
          <label className="block mb-1">Tenure (months)</label>
          <input
            type="number"
            name="tenure"
            value={formData.tenure}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Monthly Charges */}
        <div>
          <label className="block mb-1">Monthly Charges</label>
          <input
            type="number"
            name="monthlycharges"
            value={formData.monthlycharges}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Total Charges */}
        <div>
          <label className="block mb-1">Total Charges</label>
          <input
            type="number"
            name="totalcharges"
            value={formData.totalcharges}
            onChange={handleChange}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow"
      >
        Predict
      </button>

      {result && (
        <div className="mt-6 w-full max-w-2xl bg-gray-800 text-green-300 p-4 rounded-lg font-mono text-sm">
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}
