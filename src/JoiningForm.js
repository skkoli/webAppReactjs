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
    nomineeDob: "",
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
    <title>Adarsh Enterprises Form</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .border, .border-b {
            border-color: black;
        }
    </style>
</head>
<body class="bg-white p-8">
<button onclick="window.print()">Print</button>
    <div class="border border-black p-4">
        <header class="flex justify-between items-center mb-4">
            <div class="w-32 h-40 border border-black flex items-center justify-center">
                <span>Passport Size Photo</span>
            </div>
            <div class="text-center">
                <h1 class="font-bold text-xl">ADARSH ENTERPRISES</h1>
                <p>MANPOWER, LABOUR SUPPLIER & GARDEN MAINTAINACE</p>
                <p>AT/POST : PIRANGUT , TAL. MULSHI , DIST. PUNE - 412115</p>
                <p>Prop. Vikas Gunware , MBL NO : 9921483129</p>
            </div>
            <img src="https://placehold.co/100x100" alt="Adarsh Enterprises Logo" class="w-24 h-24">
        </header>

        <div class="mb-4">
            <div class="flex justify-between mb-2">
                <div class="flex-1">
                    <span>POST:</span>
                </div>
                <div class="flex-1 flex justify-end">
                    <span>DATE OF JOINING :<span> &emsp; &emsp; / &emsp; /</span></span>
                </div>
            </div>
        </div>

        <section class="border-t border-b border-black py-2 mb-4">
            <h2 class="text-center font-bold">PERSONAL DETAILS (वैयक्तिक माहिती)</h2>
        </section>

        <section class="mb-4">
            <div class="flex mb-2">
                <div class="row">
                    <label class="block font-semibold">FULL NAME (पूर्ण नाव) :${formData.fullName}</label>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">FATHER / HUSBAND NAME :${formData.fatherName}</label>
                    <span>(वडील / पतीचे नाव)</span>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">DOB (जन्मतारीख) :${formData.dob}</label>
                </div>
                <div class="w-1/2 pl-4">
                    <label class="block font-semibold">GENDER (लिंग) :${formData.gender}</label>
                    <div class="flex items-center">
                        <input type="checkbox" class="mr-2">
                        <span>MALE (पुरुष)</span>
                        <input type="checkbox" class="ml-4 mr-2">
                        <span>FEMALE (स्त्री)</span>
                    </div>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">AADHAR NUMBER (आधार क्रमांक):${formData.aadharNumber}</label>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">PANCARD NO.(प परळ्द नं.):${formData.pancardNumber}</label>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">MOBILE NO. (मोबाईल क्र.):${formData.mobileNumber}</label>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">PRESENT ADDRESS (सध्याचा पत्ता) :${formData.presentAddress}</label>
                </div>
            </div>

            <div class="flex mb-2">
                <div class="w-1/2 pr-4">
                    <label class="block font-semibold">PERMANENT ADDRESS(कायमचा पत्ता) :${formData.permanentAddress}</label>
                </div>
            </div>
        </section>

        <section class="border-t border-black py-2 mb-4">
            <h2 class="text-center font-bold">FAMILY DETAILS (कौटुंबिक तपशील)</h2>
        </section>

        <table class="w-full border border-black">
            <thead>
                <tr class="bg-gray-100">
                    <th class="border border-black px-4 py-2">SR NO</th>
                    <th class="border border-black px-4 py-2">NAME</th>
                    <th class="border border-black px-4 py-2">REALATION</th>
                    <th class="border border-black px-4 py-2">OCCUPATION</th>
                </tr>
            </thead>
            <tbody>
            ${formData.familyDetails
              .map(
                (item, index) => `
                <tr>
                    <td class="border border-black px-4 py-2 text-center">${index + 1}</td>
                    <td class="border border-black px-4 py-2">${item.name}</td>
                    <td class="border border-black px-4 py-2">${item.relation}</td>
                    <td class="border border-black px-4 py-2">${item.occupation}</td>
                </tr>
                 `
              )
              .join("")}
               
            </tbody>
        </table>
        
    </div>
    <!-- Nominee Details Section -->
    <div class="border-2 border-black p-4 mb-6">
        <h2 class="text-lg font-bold mb-4">NOMINEE DETAILS (वारसदार तपशील)</h2>
        <div class="mb-4">
            <label>NOMINEE NAME (वारसदार नाव) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
        <div class="mb-4">
            <label>NOMINEE ADDRESS (वारसदार पत्ता) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
        <div class="mb-4">
            <label>NOMINEE MBL NO.(वारसदार मो. क्र.) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
        <div class="flex space-x-10">
            <div>
                <label>RELATION (नाते) :</label>
                <div class="border-b-2 border-black w-64"></div>
            </div>
            <div>
                <label>DOB (जन्मतारीख) :</label>
                <div class="border-b-2 border-black w-64"></div>
            </div>
        </div>
    </div>

    <!-- Account Details Section -->
    <div class="border-2 border-black p-4 mb-6">
        <h2 class="text-lg font-bold mb-4">ACCOUNT DETAILS (खाते तपशील)</h2>
        <div class="mb-4">
            <label>BANK ACCOUNT NUMBER (बँक खाते क्रमांक) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
        <div class="mb-4">
            <label>BANK IFSC CODE (बँक IFSC कोड) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
        <div class="mb-4">
            <label>BANK NAME (बँकेचे नाव) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
        <div class="mb-4">
            <label>BANK BRANCH ( बँके शाखा) :</label>
            <div class="border-b-2 border-black"></div>
        </div>
    </div>

    <!-- Terms and Conditions Section -->
    <div class="border-2 border-black p-4 mb-6">
        <h2 class="text-lg font-bold mb-4">TERMS AND CONDITIONS (नियम आणि अटी)</h2>
        <ol class="list-decimal list-inside">
            <li>I am willing to do temporary work.</li>
            <li>I agree to deduction of my salary if I am absent without permission or notice.</li>
            <li>I am ready to do whatever the supervisor asks.</li>
            <li>Company reserves the right to dismiss me for any misbehavior / rudeness / irresponsibility without assigning any reason and I will have no complaint about it.</li>
            <li>I will be held responsible if the information given in the application form as well as the attached documents prove to be false.</li>
            <li>I agree to all the above conditions and have voluntarily signed this.</li>
        </ol>
    </div>

    <!-- Signature Section -->
    <div class="border-2 border-black p-6 mt-12 inline-block">
        <h2 class="text-lg font-bold">SIGNATURE OF EMPLOYEE</h2>
        <p class="text-center">(कर्मचाऱ्याची स्वाक्षरी)</p>
    </div>

</body>
</html>
    `;
    const printWindow = window.open("", "_blank");
    printWindow.document.open();
    printWindow.document.write(printContent);
    printWindow.document.close();

    
  };
  const addFamilyRow = () => {
    setFormData((prev) => ({
      ...prev,
      familyDetails: [...prev.familyDetails, { name: "", relation: "", occupation: "" }],
    }));
  };

  // Remove a specific row from family details
  const removeFamilyRow = (index) => {
    const updatedFamilyDetails = formData.familyDetails.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, familyDetails: updatedFamilyDetails }));
  };
  return (
    
    <form onSubmit={handleSubmit}
    style={{
      margin: "20px auto",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "800px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Adarsh Enterprises - Joining Form</h1>
      <table  style={{ width: "100%", borderCollapse: "collapse" }}>
        <tbody>
          {/* Other form fields */}
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }} >FULL NAME ( पुर्ण नाव  ):</td>
            <td style={{ padding: "10px" }}>
              <input
               type="text"
               name="fullName"
               value={formData.fullName}
               onChange={handleChange}
               required
               style={{
                 width: "100%",
                 padding: "8px",
                 borderRadius: "4px",
                 border: "1px solid #ccc",
               }}
              />
            </td>
          </tr>
          <tr>
          <td style={{ padding: "10px", textAlign: "right" }}>
          Father/Husband Name (वडिल/पतीचे नाव):
        </td>
        <td style={{ padding: "10px" }}>
          <input
            type="text"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
            </td>
          </tr>
          <tr>
          <td style={{ padding: "10px", textAlign: "right" }}>DOB ( जन्मतारीख ):</td>
        <td style={{ padding: "10px" }}>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
            </td>
          </tr>
          <tr>
          <td style={{ padding: "10px", textAlign: "right" }}>GENDER ( लिंग ):</td>
        <td style={{ padding: "10px" }}>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>AADHAR NUMBER ( आधार क्रमांक  ):
            </td >
            <td  style={{ padding: "10px" }}>
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>MOBILE NO. ( मोबाईल क्र.) : </td>
            <td  style={{ padding: "10px" }}>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>PANCARD NO.( पॅनकार्ड क्र.):</td>
            <td  style={{ padding: "10px" }}>
              <input
                type="text"
                name="pancardNumber"
                value={formData.pancardNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>PRESENT ADDRESS (सद्याचा पत्ता  ) :</td>
            <td  style={{ padding: "10px" }}>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>PERMANENT ADDRESS( कायमचा पत्ता ):</td>
            <td  style={{ padding: "10px" }}>
              <input
                type="text"
                name="permanentAddress"
                value={formData.permanentAddress}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          {/* Add family details dynamically */}
          <tr>
            <td colSpan={2}>
              <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }} >FAMILY DETAILS (कौटुंबीक  तपशील)</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", margin: "20px 0" }} >
                <thead>
                  <tr>
                  <th style={{ backgroundColor: "#f4f4f4", fontWeight: "bold", padding: "10px 15px", border: "1px solid #ddd" }}>Name</th>
                  <th style={{ backgroundColor: "#f4f4f4", fontWeight: "bold", padding: "10px 15px", border: "1px solid #ddd" }}>Relation</th>
                  <th style={{ backgroundColor: "#f4f4f4", fontWeight: "bold", padding: "10px 15px", border: "1px solid #ddd" }}>Occupation</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.familyDetails.map((detail, index) => (
                    <tr key={index}>
                      <td>
                        <input
                          type="text"
                          value={detail.name}
                          onChange={(e) =>
                            handleFamilyChange(index, "name", e.target.value)
                            
                          }
                          style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={detail.relation}
                          onChange={(e) =>
                            handleFamilyChange(index, "relation", e.target.value)
                          }
                          style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={detail.occupation}
                          onChange={(e) =>
                            handleFamilyChange(index, "occupation", e.target.value)
                          }
                          style={{
                            width: "100%",
                            padding: "8px",
                            borderRadius: "4px",
                            border: "1px solid #ccc",
                          }}
                        />
                      </td>
                      <td>
                        <button
                          type="button"hidden
                          onClick={() => removeFamilyRow(index)}
                          disabled={formData.familyDetails.length === 1}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          
              <button hidden type="button" onClick={addFamilyRow}>
                Add Row
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>NOMINEE DETAILS ( वारसदार तपशील )</h3>
              <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>NOMINEE NAME ( वारसदार नाव):</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="nomineeName"
                value={formData.nomineeName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>NOMINEE ADDRESS (वारसदार पत्ता ):</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="nomineeAddress"
                value={formData.nomineeAddress}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }} 
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }} >NOMINEE MBL NO.(वारसदार मोबाईल क्र.) :</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="nomineeMobile"
                value={formData.nomineeMobile}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>RELATION (नाते) :</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="nomineeRelation"
                value={formData.nomineeRelation}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }} 
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>DOB (जन्मतारीख ) :
            </td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="nomineeDob"
                value={formData.nomineeDob}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
              </td>
              </tr>
              <tr>
            <td colSpan={2}>
              <h3 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>ACCOUNT DETAILS ( खाते तपशील )</h3>
              <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>BANK ACCOUNT NUMBER (बँक खाते क्रमांक) :</td>
            <td style={{ padding: "10px" }} >
              <input
                type="text"
                name="bankAccountNumber"
                value={formData.bankAccountNumber}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }} 
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>BANK IFSC CODE ( बँक IFSC कोड ) :</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="bankIfscCode"
                value={formData.bankIfscCode}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }} 
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>BANK NAME ( बँके चे नाव ) :</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }} 
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: "10px", textAlign: "right" }}>BANK BRANCH ( बँक शाखा ) :</td>
            <td style={{ padding: "10px" }}>
              <input
                type="text"
                name="bankBranch"
                value={formData.bankBranch}
                onChange={handleChange}
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              />
            </td>
          </tr>
          
              </td>
              </tr>
        </tbody>
      </table>
      <button
      type="submit"
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        borderRadius: "4px",
        border: "none",
        backgroundColor: "#007bff",
        color: "#fff",
        cursor: "pointer",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
        textAlign: "center"
      }}
    >
      Submit & Print
    </button>
    <div
    style={{
      textAlign: "center",
      marginTop: "20px",
    }}
  ></div>
    </form>
  );
};

export default JoiningForm;
