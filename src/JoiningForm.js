import React, { useState } from "react";

const JoiningForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    dob: "",
    gender: "male",
    aadharNumber: "",
    pancardNumber: "",
    mobileNumber: "",
    presentAddress: "",
    permanentAddress: "",
    familyDetails: Array(5).fill({ name: "", relation: "", occupation: "" }),
    nomineeName: "",
    nomineeAddress: "",
    nomineeMobile: "",
    nomineeRelation: "",
    bankAccountNumber: "",
    bankIfscCode: "",
    bankName: "",
    bankBranch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFamilyChange = (index, field, value) => {
    const updatedFamily = formData.familyDetails.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setFormData({ ...formData, familyDetails: updatedFamily });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const printContent = `
      <html>
        <head>
          <title>Print Preview</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            h1, h2 {
              text-align: center;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ccc;
              padding: 8px;
              text-align: left;
            }
            .section-title {
              background-color: #f0f0f0;
              font-weight: bold;
            }
          </style>
        </head>
        <body>
          <h1>Adarsh Enterprises - Joining Form</h1>
          <table>
            <tr>
              <td>Full Name</td><td>${formData.fullName}</td>
            </tr>
            <tr>
              <td>Father/Husband Name</td><td>${formData.fatherName}</td>
            </tr>
            <tr>
              <td>Date of Birth</td><td>${formData.dob}</td>
            </tr>
            <tr>
              <td>Gender</td><td>${formData.gender}</td>
            </tr>
            <tr>
              <td>Aadhar Number</td><td>${formData.aadharNumber}</td>
            </tr>
            <tr>
              <td>PAN Card Number</td><td>${formData.pancardNumber}</td>
            </tr>
            <tr>
              <td>Mobile Number</td><td>${formData.mobileNumber}</td>
            </tr>
            <tr>
              <td>Present Address</td><td>${formData.presentAddress}</td>
            </tr>
            <tr>
              <td>Permanent Address</td><td>${formData.permanentAddress}</td>
            </tr>
          </table>
          <h2>Family Details</h2>
          <table>
            <tr class="section-title">
              <th>SR NO</th><th>Name</th><th>Relation</th><th>Occupation</th>
            </tr>
            ${formData.familyDetails
              .map(
                (item, index) => `
                  <tr>
                    <td>${index + 1}</td>
                    <td>${item.name}</td>
                    <td>${item.relation}</td>
                    <td>${item.occupation}</td>
                  </tr>
                `
              )
              .join("")}
          </table>
          <h2>Nominee Details</h2>
          <table>
            <tr>
              <td>Nominee Name</td><td>${formData.nomineeName}</td>
            </tr>
            <tr>
              <td>Nominee Address</td><td>${formData.nomineeAddress}</td>
            </tr>
            <tr>
              <td>Nominee Mobile</td><td>${formData.nomineeMobile}</td>
            </tr>
            <tr>
              <td>Nominee Relation</td><td>${formData.nomineeRelation}</td>
            </tr>
          </table>
          <h2>Bank Details</h2>
          <table>
            <tr>
              <td>Bank Account Number</td><td>${formData.bankAccountNumber}</td>
            </tr>
            <tr>
              <td>Bank IFSC Code</td><td>${formData.bankIfscCode}</td>
            </tr>
            <tr>
              <td>Bank Name</td><td>${formData.bankName}</td>
            </tr>
            <tr>
              <td>Bank Branch</td><td>${formData.bankBranch}</td>
            </tr>
          </table>
          <button onclick="window.print()">Print</button>
        </body>
      </html>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px", fontFamily: "Arial" }}>
      <h1>Adarsh Enterprises - Joining Form</h1>
      <table>
        <tbody>
          <tr>
            <td>Full Name:</td>
            <td>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Father/Husband Name:</td>
            <td>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Date of Birth:</td>
            <td>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Gender:</td>
            <td>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>Aadhar Number:</td>
            <td>
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          {/* Add more fields as needed */}
        </tbody>
      </table>
      <button type="submit">Submit & Print</button>
    </form>
  );
};

export default JoiningForm;
