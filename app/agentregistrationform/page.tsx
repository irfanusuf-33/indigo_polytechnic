"use client";

import React, { useState } from "react";
import { apiUrl } from "@/utils/api";
import { generateAgentApplicationPdf } from "@/utils/generateAgentApplicationPdf";

const AGENT_REGISTRATION_API_URL = apiUrl("/applications/agent-registration");

export default function AgentsForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    businessType: "sole-proprietor",
    legalName: "",
    tradingName: "",
    ownerName: "",
    placeOfRegistration: "",
    dateOfRegistration: "",
    australianBusinessNumber: "",
    maraNo: "",
    qeacNo: "",
    representingCountries: "",
    ceoName: "",
    ceoEmail: "",
    ceoMobile: "",
    ceoLandline: "",
    contactPersonName: "",
    contactPersonEmail: "",
    contactPersonMobile: "",
    contactPersonLandline: "",
    headOfficeAddress: "",
    website: "",
    numberOfBranches: "",
    locationOfBranches: "",
    courseTypes: [] as string[],
    professionalBodyName: "",
    yearsOfMembership: "",
    institutions: [{ name: "", years: "", students: "" }],
    studentsToRecruit: "",
    studentSupport: "",
    prospectiveFees: "",
    otherInformation: "",
    complianceExplanation: "",
    pierAccreditation: "",
    esosUnderstanding: "",
    studentVisaRequirement: "",
    auscMarketing: "",
    auscMaterialUsage: "",
    ref1Name: "",
    ref1Contact: "",
    ref1Organisation: "",
    ref1Position: "",
    ref1Email: "",
    ref2Name: "",
    ref2Contact: "",
    ref2Organisation: "",
    ref2Position: "",
    ref2Email: "",
    authorisedPersonName: "",
    authorisedPersonPosition: "",
    signature: "",
    businessProfileFile: null as File | null,
    businessRegistrationFile: null as File | null,
    maraQaecFile: null as File | null,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep === 7) {
      const canvas = document.getElementById(
        "signatureCanvas",
      ) as HTMLCanvasElement;
      if (canvas) {
        setFormData((prev) => ({ ...prev, signature: canvas.toDataURL() }));
      }
    }
    if (currentStep < 8) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      courseTypes: prev.courseTypes.includes(value)
        ? prev.courseTypes.filter((v) => v !== value)
        : [...prev.courseTypes, value],
    }));
  };

  const addInstitution = () => {
    setFormData((prev) => ({
      ...prev,
      institutions: [
        ...prev.institutions,
        { name: "", years: "", students: "" },
      ],
    }));
  };

  const updateInstitution = (index: number, field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      institutions: prev.institutions.map((inst, i) =>
        i === index ? { ...inst, [field]: value } : inst,
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Create FormData object
      const submitData = new FormData();

      // Map form fields to backend expected names
      submitData.append("businessType", formData.businessType);
      submitData.append("legalName", formData.legalName);
      submitData.append("tradingName", formData.tradingName);
      submitData.append("ownerName", formData.ownerName);
      submitData.append("placeOfRegistration", formData.placeOfRegistration);
      submitData.append("dateOfRegistration", formData.dateOfRegistration);
      submitData.append("businessNumber", formData.australianBusinessNumber);
      submitData.append("maraNo", formData.maraNo);
      submitData.append("qeacNo", formData.qeacNo);
      submitData.append(
        "representingCountries",
        formData.representingCountries,
      );
      submitData.append("ceoName", formData.ceoName);
      submitData.append("email", formData.ceoEmail);
      submitData.append("mobile", formData.ceoMobile);
      submitData.append("landline", formData.ceoLandline);
      submitData.append("contactPerson", formData.contactPersonName);
      submitData.append("contactPersonEmail", formData.contactPersonEmail);
      submitData.append("contactPersonMobile", formData.contactPersonMobile);
      submitData.append(
        "contactPersonLandline",
        formData.contactPersonLandline,
      );
      submitData.append("headOfficeAddress", formData.headOfficeAddress);
      submitData.append("website", formData.website);
      submitData.append("numberOfBranches", formData.numberOfBranches);
      submitData.append("locationOfBranches", formData.locationOfBranches);
      submitData.append(
        "coursesInterrestedIn",
        formData.courseTypes.join(", "),
      );
      submitData.append("nameOfIndustrialBody", formData.professionalBodyName);
      submitData.append("yearOfMembership", formData.yearsOfMembership);
      submitData.append(
        "institutionName",
        formData.institutions.map((i) => i.name).join(", "),
      );
      submitData.append(
        "yearOfAffiliation",
        formData.institutions.map((i) => i.years).join(", "),
      );
      submitData.append(
        "numberOfStudents",
        formData.institutions.map((i) => i.students).join(", "),
      );
      submitData.append("firstYearIntakes", formData.studentsToRecruit);
      submitData.append("sudentSupportType", formData.studentSupport);
      submitData.append("feesChargeDescription", formData.prospectiveFees);
      submitData.append(
        "additionalInformationMarketing",
        formData.otherInformation,
      );
      submitData.append(
        "standardFourCompliance",
        formData.complianceExplanation,
      );
      submitData.append("pierAccreditation", formData.pierAccreditation);
      submitData.append("EsosAct", formData.esosUnderstanding);
      submitData.append(
        "studentOnBoardingPurpose",
        formData.studentVisaRequirement,
      );
      submitData.append("auscMarketingCompliance", formData.auscMarketing);
      submitData.append("auscMarketingMaterial", formData.auscMaterialUsage);
      submitData.append("refereeOne", formData.ref1Name);
      submitData.append("refereeContactNumber", formData.ref1Contact);
      submitData.append("organization", formData.ref1Organisation);
      submitData.append("position", formData.ref1Position);
      submitData.append("refereeEmailAddress", formData.ref1Email);
      submitData.append("refereeTwo", formData.ref2Name);
      submitData.append("refereeTwoContactNumber", formData.ref2Contact);
      submitData.append("refereeTwoOrganization", formData.ref2Organisation);
      submitData.append("refereeTwoPosition", formData.ref2Position);
      submitData.append("refereeTwoEmailAddress", formData.ref2Email);
      // Get signature from state
      submitData.append("signature", formData.signature || "");
      submitData.append("authorizedPersonName", formData.authorisedPersonName);
      submitData.append(
        "authorizedPersonPosition",
        formData.authorisedPersonPosition,
      );

      // Append files
      if (formData.businessProfileFile) {
        submitData.append("businessProfileFile", formData.businessProfileFile);
      }
      if (formData.businessRegistrationFile) {
        submitData.append(
          "registrationCertificate",
          formData.businessRegistrationFile,
        );
      }
      if (formData.maraQaecFile) {
        submitData.append("maraQeacCertificate", formData.maraQaecFile);
      }

      // Attach Form Data PDF document under dedicated 'formData' field
      try {
        const pdfBlob = generateAgentApplicationPdf(formData);
        const pdfFile = new File([pdfBlob], "Agent_Application_Form_Data.pdf", {
          type: "application/pdf",
        });
        submitData.append("formData", pdfFile);
      } catch (pdfErr) {
        console.warn("PDF generation error:", pdfErr);
      }

      let response: Response | null = null;
      let result: any = {};

      response = await fetch(AGENT_REGISTRATION_API_URL, {
        method: "POST",
        body: submitData,
      });
      result = await response.json().catch(() => ({}));

      console.log("Agent form response:", response.status, result);

      if (
        response &&
        response.ok &&
        (result.error === undefined || result.success !== false)
      ) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Reset form after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setError(
          result?.error || result?.message || "Failed to submit application",
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError(
        "Network error. Please check your connection and try again. " +
          String(err),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Agent Registration Form
          </h1>
          <p className="text-gray-600 text-lg">
            To become an authorised agent of Australian Sovereign College,
            complete this form.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6 mb-6 animate-fade-in">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-green-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-green-800">
                    Application Submitted Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for your application. We'll review it and contact
                    you soon.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 mb-6 animate-fade-in">
              <div className="flex items-center">
                <svg
                  className="w-8 h-8 text-red-500 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-red-800">
                    Submission Failed
                  </h3>
                  <p className="text-red-700">{error}</p>
                </div>
              </div>
            </div>
          )}

          {currentStep === 1 && (
            <>
              {/* Agency Details Section */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">🏢</span>
                    Agency Details
                  </h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">
                    To become an authorised agent of Australian Sovereign
                    College, complete this form.
                  </p>

                  {/* Type of Business */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Type of Business <span className="text-red-600">*</span>
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="businessType"
                          value="sole-proprietor"
                          checked={formData.businessType === "sole-proprietor"}
                          onChange={(e) =>
                            handleInputChange("businessType", e.target.value)
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Sole Proprietor</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="businessType"
                          value="partnership"
                          checked={formData.businessType === "partnership"}
                          onChange={(e) =>
                            handleInputChange("businessType", e.target.value)
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Partnership</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="businessType"
                          value="incorporated-company"
                          checked={
                            formData.businessType === "incorporated-company"
                          }
                          onChange={(e) =>
                            handleInputChange("businessType", e.target.value)
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">
                          Incorporated company
                        </span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="businessType"
                          value="trust"
                          checked={formData.businessType === "trust"}
                          onChange={(e) =>
                            handleInputChange("businessType", e.target.value)
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Trust</span>
                      </label>
                    </div>
                  </div>

                  {/* Legal Name of Entity */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Legal Name of Entity{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.legalName}
                      onChange={(e) =>
                        handleInputChange("legalName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter legal name of entity"
                      required
                    />
                  </div>

                  {/* Trading Name */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Trading Name (if applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.tradingName}
                      onChange={(e) =>
                        handleInputChange("tradingName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter trading name"
                    />
                  </div>

                  {/* Name of Owner */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Name of Owner (s) <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.ownerName}
                      onChange={(e) =>
                        handleInputChange("ownerName", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter name of owner(s)"
                      required
                    />
                  </div>

                  {/* Place and Date of Registration */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Place of Registration{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.placeOfRegistration}
                        onChange={(e) =>
                          handleInputChange(
                            "placeOfRegistration",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter place of registration"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Date of Registration{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="date"
                        value={formData.dateOfRegistration}
                        onChange={(e) =>
                          handleInputChange(
                            "dateOfRegistration",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="20/02/2026"
                        required
                      />
                    </div>
                  </div>

                  {/* Australian Business Number */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Australian Business Number{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.australianBusinessNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "australianBusinessNumber",
                          e.target.value,
                        )
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="(ABN) or any equivalent"
                      required
                    />
                  </div>

                  {/* MARA No. */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      MARA No.
                    </label>
                    <input
                      type="text"
                      value={formData.maraNo}
                      onChange={(e) =>
                        handleInputChange("maraNo", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter MARA number"
                    />
                  </div>

                  {/* QEAC No. */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      QEAC No.
                    </label>
                    <input
                      type="text"
                      value={formData.qeacNo}
                      onChange={(e) =>
                        handleInputChange("qeacNo", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter QEAC number"
                    />
                  </div>

                  {/* Representing Countries */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Representing Countries{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.representingCountries}
                      onChange={(e) =>
                        handleInputChange(
                          "representingCountries",
                          e.target.value,
                        )
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter representing countries"
                      required
                    />
                  </div>

                  {/* Next Button */}
                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              {/* Contact Details Section */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">📞</span>
                    Contact Details
                  </h2>
                </div>

                <div className="p-6">
                  {/* CEO Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Name of CEO <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ceoName}
                        onChange={(e) =>
                          handleInputChange("ceoName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter CEO name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.ceoEmail}
                        onChange={(e) =>
                          handleInputChange("ceoEmail", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Mobile <span className="text-red-600">*</span>
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-24">
                          <select className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all bg-white text-gray-900 font-semibold">
                            <option
                              value="+61"
                              className="text-gray-900 bg-white"
                            >
                              🇦🇺 +61
                            </option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          value={formData.ceoMobile}
                          onChange={(e) =>
                            handleInputChange("ceoMobile", e.target.value)
                          }
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all"
                          placeholder="Enter mobile number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Landline
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-24">
                          <select className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all bg-white text-gray-900 font-semibold">
                            <option
                              value="+61"
                              className="text-gray-900 bg-white"
                            >
                              🇦🇺 +61
                            </option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          value={formData.ceoLandline}
                          onChange={(e) =>
                            handleInputChange("ceoLandline", e.target.value)
                          }
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all"
                          placeholder="Enter landline number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Authorised Contact Person */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Name of authorised Contact Person{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactPersonName}
                        onChange={(e) =>
                          handleInputChange("contactPersonName", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter contact person name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Email Address <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.contactPersonEmail}
                        onChange={(e) =>
                          handleInputChange(
                            "contactPersonEmail",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter email address"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Mobile <span className="text-red-600">*</span>
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-24">
                          <select className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all bg-white text-gray-900 font-semibold">
                            <option
                              value="+61"
                              className="text-gray-900 bg-white"
                            >
                              🇦🇺 +61
                            </option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          value={formData.contactPersonMobile}
                          onChange={(e) =>
                            handleInputChange(
                              "contactPersonMobile",
                              e.target.value,
                            )
                          }
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all"
                          placeholder="Enter mobile number"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Landline
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-24">
                          <select className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all bg-white text-gray-900 font-semibold">
                            <option
                              value="+61"
                              className="text-gray-900 bg-white"
                            >
                              🇦🇺 +61
                            </option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          value={formData.contactPersonLandline}
                          onChange={(e) =>
                            handleInputChange(
                              "contactPersonLandline",
                              e.target.value,
                            )
                          }
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all"
                          placeholder="Enter landline number"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Head Office Address */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Head Office Address{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.headOfficeAddress}
                      onChange={(e) =>
                        handleInputChange("headOfficeAddress", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter head office address"
                      required
                    />
                  </div>

                  {/* Website */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Website
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) =>
                        handleInputChange("website", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter website URL"
                    />
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(1);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">📊</span>
                    Agency Profile
                  </h2>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Number of Branches{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.numberOfBranches}
                        onChange={(e) =>
                          handleInputChange("numberOfBranches", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter number of branches"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Location of Branches{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.locationOfBranches}
                        onChange={(e) =>
                          handleInputChange(
                            "locationOfBranches",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter location of branches"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Type of courses your clients are interested in{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-3">
                      {[
                        "General English",
                        "Academic English",
                        "Vocational Education",
                        "Under Graduate",
                        "Post Graduate",
                        "Other",
                      ].map((course) => (
                        <label
                          key={course}
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={formData.courseTypes.includes(course)}
                            onChange={() => handleCheckboxChange(course)}
                            className="w-5 h-5 text-[#4A5BA6] border-gray-300 rounded focus:ring-[#4A5BA6] focus:ring-2 transition-all cursor-pointer"
                          />
                          <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                            {course}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                      Industrial / Professional Membership
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Name of Industrial / Professional Body ( e.g. ISEAA)
                        </label>
                        <input
                          type="text"
                          value={formData.professionalBodyName}
                          onChange={(e) =>
                            handleInputChange(
                              "professionalBodyName",
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                          placeholder="Enter professional body name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm text-gray-700 mb-2">
                          Years of Membership
                        </label>
                        <input
                          type="text"
                          value={formData.yearsOfMembership}
                          onChange={(e) =>
                            handleInputChange(
                              "yearsOfMembership",
                              e.target.value,
                            )
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                          placeholder="Enter years of membership"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-gray-800 mb-3">
                      Representing Australian Educational Institutes
                    </h3>
                    {formData.institutions.map((inst, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4"
                      >
                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            Name of Institution
                          </label>
                          <input
                            type="text"
                            value={inst.name}
                            onChange={(e) =>
                              updateInstitution(index, "name", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                            placeholder="Enter institution name"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            Years of affiliation
                          </label>
                          <input
                            type="text"
                            value={inst.years}
                            onChange={(e) =>
                              updateInstitution(index, "years", e.target.value)
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                            placeholder="Enter years"
                          />
                        </div>

                        <div>
                          <label className="block text-sm text-gray-700 mb-2">
                            Number of Students
                          </label>
                          <input
                            type="text"
                            value={inst.students}
                            onChange={(e) =>
                              updateInstitution(
                                index,
                                "students",
                                e.target.value,
                              )
                            }
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                            placeholder="Enter number"
                          />
                        </div>
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addInstitution}
                      className="text-[#4A5BA6] hover:text-[#3d4a8a] font-semibold flex items-center transition-colors"
                    >
                      <span className="mr-2">+</span> Add Line
                    </button>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(2);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">📈</span>
                    Performance
                  </h2>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      How many students you aim to recruit for Australian
                      Sovereign College if appointed as an Agent in first year{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.studentsToRecruit}
                      onChange={(e) =>
                        handleInputChange("studentsToRecruit", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter number of students"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      What kind of student support you can offer to students:{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.studentSupport}
                      onChange={(e) =>
                        handleInputChange("studentSupport", e.target.value)
                      }
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all resize-none hover:border-[#4A5BA6]"
                      placeholder="Enter student support details"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Do you charge any fee to prospective students? If Yes
                      please provide details of fees you charge.{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.prospectiveFees}
                      onChange={(e) =>
                        handleInputChange("prospectiveFees", e.target.value)
                      }
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all resize-none hover:border-[#4A5BA6]"
                      placeholder="Enter fee details"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Please provide any other information which you believe is
                      important from student and marketing prospective
                    </label>
                    <textarea
                      value={formData.otherInformation}
                      onChange={(e) =>
                        handleInputChange("otherInformation", e.target.value)
                      }
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all resize-none hover:border-[#4A5BA6]"
                      placeholder="Enter additional information"
                    />
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(3);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 5 && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">✅</span>
                    Compliance Requirement
                  </h2>
                </div>

                <div className="p-6">
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Please provide explanation, how you comply with Standard 4
                      of National Code 2018 on Education Agents. Please provide
                      your response in with reference to your responsibilities
                      as an education agent. For more detail on standard please
                      click on following link (Standard 4 of The National Codes
                      2018) <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      value={formData.complianceExplanation}
                      onChange={(e) =>
                        handleInputChange(
                          "complianceExplanation",
                          e.target.value,
                        )
                      }
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all resize-none hover:border-[#4A5BA6]"
                      placeholder="Enter your explanation"
                      required
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Attach a separate sheet if you need to provide more
                      information
                    </p>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Do you have PIER accreditation?{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pierAccreditation"
                          value="yes"
                          checked={formData.pierAccreditation === "yes"}
                          onChange={(e) =>
                            handleInputChange(
                              "pierAccreditation",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pierAccreditation"
                          value="no"
                          checked={formData.pierAccreditation === "no"}
                          onChange={(e) =>
                            handleInputChange(
                              "pierAccreditation",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Do you have understanding of the ESOS Act 2000 and
                      National Code 2018?{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="esosUnderstanding"
                          value="yes"
                          checked={formData.esosUnderstanding === "yes"}
                          onChange={(e) =>
                            handleInputChange(
                              "esosUnderstanding",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="esosUnderstanding"
                          value="no"
                          checked={formData.esosUnderstanding === "no"}
                          onChange={(e) =>
                            handleInputChange(
                              "esosUnderstanding",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Do you brief students coming to Australia on student visa
                      requirement to have a primary purpose of Studying and must
                      study full time? <span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="studentVisaRequirement"
                          value="yes"
                          checked={formData.studentVisaRequirement === "yes"}
                          onChange={(e) =>
                            handleInputChange(
                              "studentVisaRequirement",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="studentVisaRequirement"
                          value="no"
                          checked={formData.studentVisaRequirement === "no"}
                          onChange={(e) =>
                            handleInputChange(
                              "studentVisaRequirement",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      AuSC requires agents to comply with AuSC marketing and
                      advertising requirements, course materials and application
                      procedures, and provide accurate information to students.
                      Do you agree with that{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="auscMarketing"
                          value="yes"
                          checked={formData.auscMarketing === "yes"}
                          onChange={(e) =>
                            handleInputChange("auscMarketing", e.target.value)
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="auscMarketing"
                          value="no"
                          checked={formData.auscMarketing === "no"}
                          onChange={(e) =>
                            handleInputChange("auscMarketing", e.target.value)
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-3">
                      Are you going to use AuSC marketing material to promote
                      courses offered by AuSC?{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="auscMaterialUsage"
                          value="yes"
                          checked={formData.auscMaterialUsage === "yes"}
                          onChange={(e) =>
                            handleInputChange(
                              "auscMaterialUsage",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">Yes</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="auscMaterialUsage"
                          value="no"
                          checked={formData.auscMaterialUsage === "no"}
                          onChange={(e) =>
                            handleInputChange(
                              "auscMaterialUsage",
                              e.target.value,
                            )
                          }
                          className="w-5 h-5 text-[#4A5BA6] border-gray-300 focus:ring-[#4A5BA6] focus:ring-2"
                        />
                        <span className="text-gray-700">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(4);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 6 && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">📝</span>
                    References
                  </h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6 font-semibold">
                    You must provide atleast two (2) references (1 reference
                    should be an Australian Education Provider)
                  </p>

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Reference 1
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Name of Referee 1{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ref1Name}
                        onChange={(e) =>
                          handleInputChange("ref1Name", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter referee name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Contact Number <span className="text-red-600">*</span>
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-24">
                          <select className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all bg-white">
                            <option value="+61">🇦🇺 +61</option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          value={formData.ref1Contact}
                          onChange={(e) =>
                            handleInputChange("ref1Contact", e.target.value)
                          }
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all"
                          placeholder="Enter contact number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Organisation <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ref1Organisation}
                        onChange={(e) =>
                          handleInputChange("ref1Organisation", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter organisation"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Position <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ref1Position}
                        onChange={(e) =>
                          handleInputChange("ref1Position", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter position"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.ref1Email}
                      onChange={(e) =>
                        handleInputChange("ref1Email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <hr className="my-8 border-gray-300" />

                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Reference 2
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Name of Referee 2{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ref2Name}
                        onChange={(e) =>
                          handleInputChange("ref2Name", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter referee name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Contact Number <span className="text-red-600">*</span>
                      </label>
                      <div className="flex space-x-2">
                        <div className="w-24">
                          <select className="w-full px-2 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all bg-white">
                            <option value="+61">🇦🇺 +61</option>
                          </select>
                        </div>
                        <input
                          type="tel"
                          value={formData.ref2Contact}
                          onChange={(e) =>
                            handleInputChange("ref2Contact", e.target.value)
                          }
                          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all"
                          placeholder="Enter contact number"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Organisation <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ref2Organisation}
                        onChange={(e) =>
                          handleInputChange("ref2Organisation", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter organisation"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Position <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.ref2Position}
                        onChange={(e) =>
                          handleInputChange("ref2Position", e.target.value)
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter position"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Email Address <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.ref2Email}
                      onChange={(e) =>
                        handleInputChange("ref2Email", e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                      placeholder="Enter email address"
                      required
                    />
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(5);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 7 && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">✍️</span>
                    Declaration
                  </h2>
                </div>

                <div className="p-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg mb-6">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      I confirm that the information provided on this
                      application is true and accurate to the best of my
                      knowledge. I also authorise AuSC to approach my referees.
                      I acknowledge that approval of my application is
                      conditional on my company signing an Agent Agreement with
                      AuSC in accordance with National Code 2018 and VET Quality
                      Framework (VQF) including standards for NVR. I will be
                      representing AuSC as an education agent and I agree to do
                      work along with AuSC in honest and professional manner.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Name of Authorised Person{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.authorisedPersonName}
                        onChange={(e) =>
                          handleInputChange(
                            "authorisedPersonName",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter authorised person name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-800 mb-2">
                        Position <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.authorisedPersonPosition}
                        onChange={(e) =>
                          handleInputChange(
                            "authorisedPersonPosition",
                            e.target.value,
                          )
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A5BA6] focus:border-transparent transition-all hover:border-[#4A5BA6]"
                        placeholder="Enter position"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Signature <span className="text-red-600">*</span>
                    </label>
                    <div className="relative">
                      <div className="w-full h-48 border-2 border-gray-300 rounded-lg bg-gray-50 hover:border-[#4A5BA6] transition-all">
                        <canvas
                          id="signatureCanvas"
                          className="w-full h-full rounded-lg cursor-crosshair"
                          onMouseDown={(e) => {
                            const canvas = e.currentTarget;
                            const rect = canvas.getBoundingClientRect();
                            const ctx = canvas.getContext("2d");
                            if (ctx) {
                              ctx.strokeStyle = "#000";
                              ctx.lineWidth = 2;
                              ctx.lineCap = "round";
                              ctx.beginPath();
                              ctx.moveTo(
                                e.clientX - rect.left,
                                e.clientY - rect.top,
                              );

                              const draw = (e: MouseEvent) => {
                                ctx.lineTo(
                                  e.clientX - rect.left,
                                  e.clientY - rect.top,
                                );
                                ctx.stroke();
                              };

                              const stopDrawing = () => {
                                canvas.removeEventListener("mousemove", draw);
                                canvas.removeEventListener(
                                  "mouseup",
                                  stopDrawing,
                                );
                                canvas.removeEventListener(
                                  "mouseleave",
                                  stopDrawing,
                                );
                              };

                              canvas.addEventListener("mousemove", draw);
                              canvas.addEventListener("mouseup", stopDrawing);
                              canvas.addEventListener(
                                "mouseleave",
                                stopDrawing,
                              );
                            }
                          }}
                          onTouchStart={(e) => {
                            const canvas = e.currentTarget;
                            const rect = canvas.getBoundingClientRect();
                            const ctx = canvas.getContext("2d");
                            const touch = e.touches[0];
                            if (ctx && touch) {
                              ctx.strokeStyle = "#000";
                              ctx.lineWidth = 2;
                              ctx.lineCap = "round";
                              ctx.beginPath();
                              ctx.moveTo(
                                touch.clientX - rect.left,
                                touch.clientY - rect.top,
                              );

                              const draw = (e: TouchEvent) => {
                                const touch = e.touches[0];
                                if (touch) {
                                  ctx.lineTo(
                                    touch.clientX - rect.left,
                                    touch.clientY - rect.top,
                                  );
                                  ctx.stroke();
                                }
                              };

                              const stopDrawing = () => {
                                canvas.removeEventListener("touchmove", draw);
                                canvas.removeEventListener(
                                  "touchend",
                                  stopDrawing,
                                );
                              };

                              canvas.addEventListener("touchmove", draw);
                              canvas.addEventListener("touchend", stopDrawing);
                            }
                          }}
                        />
                        <div className="absolute top-3 left-3 text-gray-400 text-sm pointer-events-none">
                          Start signing your signature here
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const canvas = document.getElementById(
                            "signatureCanvas",
                          ) as HTMLCanvasElement;
                          const ctx = canvas?.getContext("2d");
                          if (ctx) {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                          }
                        }}
                        className="absolute top-3 right-3 p-2 text-gray-500 hover:text-[#4A5BA6] transition-colors"
                        title="Clear signature"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(6);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      className="group relative px-12 py-4 bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        Next
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#3d4a8a] to-[#4a5ba6] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {currentStep === 8 && (
            <>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up">
                <div className="bg-gradient-to-r from-[#4A5BA6] to-[#5d6ec4] px-6 py-5">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">📄</span>
                    Document Checklist
                  </h2>
                </div>

                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Business Profile
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4A5BA6] transition-all bg-gray-50 hover:bg-blue-50">
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileUpload(
                            "businessProfileFile",
                            e.target.files?.[0] || null,
                          )
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-12 h-12 text-gray-400 mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-gray-600 mb-1">
                          Drag and Drop (or){" "}
                          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                            Choose Files
                          </span>
                        </p>
                        {formData.businessProfileFile && (
                          <p className="text-sm text-green-600 mt-2 font-medium">
                            ✓ {formData.businessProfileFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      Business Registration Certificate{" "}
                      <span className="text-red-600">*</span>
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4A5BA6] transition-all bg-gray-50 hover:bg-blue-50">
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileUpload(
                            "businessRegistrationFile",
                            e.target.files?.[0] || null,
                          )
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        required
                      />
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-12 h-12 text-gray-400 mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-gray-600 mb-1">
                          Drag and Drop (or){" "}
                          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                            Choose Files
                          </span>
                        </p>
                        {formData.businessRegistrationFile && (
                          <p className="text-sm text-green-600 mt-2 font-medium">
                            ✓ {formData.businessRegistrationFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-800 mb-2">
                      MARA / QAEC Certificate
                    </label>
                    <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#4A5BA6] transition-all bg-gray-50 hover:bg-blue-50">
                      <input
                        type="file"
                        onChange={(e) =>
                          handleFileUpload(
                            "maraQaecFile",
                            e.target.files?.[0] || null,
                          )
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                      <div className="flex flex-col items-center">
                        <svg
                          className="w-12 h-12 text-gray-400 mb-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                          />
                        </svg>
                        <p className="text-gray-600 mb-1">
                          Drag and Drop (or){" "}
                          <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                            Choose Files
                          </span>
                        </p>
                        {formData.maraQaecFile && (
                          <p className="text-sm text-green-600 mt-2 font-medium">
                            ✓ {formData.maraQaecFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(7);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className="group px-8 py-3 border-2 border-[#4A5BA6] text-[#4A5BA6] rounded-lg font-semibold hover:bg-[#4A5BA6] hover:text-white transition-all duration-300 flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                      Previous
                    </button>
                    <button
                      type="submit"
                      disabled={loading}
                      className="group relative px-12 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      <span className="relative z-10 flex items-center">
                        {loading ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit
                            <svg
                              className="w-5 h-5 ml-2"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-green-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
