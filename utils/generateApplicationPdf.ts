import { jsPDF } from "jspdf";

export function generateApplicationPdf(formData: any): Blob {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pageWidth = 210;
  const pageHeight = 297;
  const marginLeft = 15;
  const contentWidth = 180;
  let y = 15;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > pageHeight - 15) {
      doc.addPage();
      y = 15;
    }
  };

  // Helper for Section Headers (Bold font 14, horizontal rule underneath)
  const addSectionHeader = (title: string, subtitle?: string) => {
    checkPageBreak(16);
    y += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.text(title, marginLeft, y);
    y += 2.5;

    if (subtitle) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(80, 80, 80);
      doc.text(subtitle, marginLeft, y);
      y += 3;
    }

    doc.setLineWidth(0.4);
    doc.setDrawColor(200, 200, 200);
    doc.line(marginLeft, y, marginLeft + contentWidth, y);
    y += 6;
  };

  // Helper for Full-Width Field Box (Light Gray Label Bar #f0f0f0 + Value Below)
  const addFieldBox = (label: string, value: string) => {
    checkPageBreak(14);
    const boxHeight = 6;
    doc.setFillColor(240, 240, 240);
    doc.rect(marginLeft, y, contentWidth, boxHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text(label.toUpperCase(), marginLeft + 2, y + 4.2);
    y += boxHeight + 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    const textLines = doc.splitTextToSize(value || "N/A", contentWidth - 4);
    doc.text(textLines, marginLeft + 2, y + 2.5);
    y += textLines.length * 4.5 + 3;
  };

  // Helper for 2-Column Field Row
  const addTwoColumnFields = (
    label1: string,
    val1: string,
    label2: string,
    val2: string,
  ) => {
    checkPageBreak(14);
    const halfWidth = (contentWidth - 4) / 2;
    const boxHeight = 6;

    // Col 1 Box
    doc.setFillColor(240, 240, 240);
    doc.rect(marginLeft, y, halfWidth, boxHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text(label1.toUpperCase(), marginLeft + 2, y + 4.2);

    // Col 2 Box
    const col2X = marginLeft + halfWidth + 4;
    doc.setFillColor(240, 240, 240);
    doc.rect(col2X, y, halfWidth, boxHeight, "F");
    doc.text(label2.toUpperCase(), col2X + 2, y + 4.2);
    y += boxHeight + 2;

    // Col 1 Text
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    const lines1 = doc.splitTextToSize(val1 || "N/A", halfWidth - 4);
    doc.text(lines1, marginLeft + 2, y + 2.5);

    // Col 2 Text
    const lines2 = doc.splitTextToSize(val2 || "N/A", halfWidth - 4);
    doc.text(lines2, col2X + 2, y + 2.5);

    const maxLines = Math.max(lines1.length, lines2.length);
    y += maxLines * 4.5 + 3;
  };

  // Helper for 3-Column LLN Task Row
  const add3ColumnRow = (
    taskLabel: string,
    inEnglish: string,
    inFirstLang: string,
  ) => {
    checkPageBreak(16);
    const boxHeight = 6;
    const col1W = 100;
    const col2W = 38;
    const col3W = 38;

    const col1X = marginLeft;
    const col2X = marginLeft + col1W + 2;
    const col3X = col2X + col2W + 2;

    doc.setFillColor(240, 240, 240);
    doc.rect(col1X, y, col1W, boxHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text("HTML", col1X + 2, y + 4.2);

    doc.setFillColor(240, 240, 240);
    doc.rect(col2X, y, col2W, boxHeight, "F");
    doc.text("IN ENGLISH?", col2X + 2, y + 4.2);

    doc.setFillColor(240, 240, 240);
    doc.rect(col3X, y, col3W, boxHeight, "F");
    doc.text("IN MY FIRST LANGUAGE", col3X + 2, y + 4.2);

    y += boxHeight + 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);

    const lines1 = doc.splitTextToSize(taskLabel, col1W - 4);
    doc.text(lines1, col1X + 2, y + 2.5);
    doc.text(inEnglish || "Yes", col2X + 2, y + 2.5);
    doc.text(inFirstLang || "Yes", col3X + 2, y + 2.5);

    y += lines1.length * 4.5 + 4;
  };

  // ----------------------------------------------------
  // PAGE 1
  // ----------------------------------------------------
  // Title: Form Data
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 0, 0);
  doc.text("Form Data", pageWidth / 2, y, { align: "center" });
  y += 12;

  // 1. Document Checklist for Application
  addSectionHeader("Document Checklist for Application");
  addFieldBox(
    "PASSPORT",
    "Copy of current visa (if you are in Australia) Copy of the Passport - front and back",
  );
  addFieldBox(
    "ACADEMIC DOCUMENTS",
    "Certified copies of relevant academic records in your home country, such as high school or college/university certificates, Certified copies of relevant academic records in Australia, such as high school or college/university certificates (if relevant), Current COE",
  );

  // 2. Student Details
  addSectionHeader("Student Details");
  addFieldBox(
    "HTML",
    "Read this application carefully, complete all sections and ensure that supporting documents are attached.",
  );
  addFieldBox(
    "CURRENT LOCATION",
    formData.currentLocation
      ? formData.currentLocation.toLowerCase() === "onshore"
        ? "Onshore"
        : "Offshore"
      : "Onshore",
  );
  addFieldBox(
    "APPLICANT TYPE",
    formData.applicantType === "international"
      ? "International (COE)"
      : "Domestic",
  );
  const fullName =
    `${formData.title || ""} ${formData.givenName || ""} ${formData.middleName || ""} ${formData.familyName || ""}`.trim();
  addFieldBox("NAME", fullName || "N/A");
  addTwoColumnFields(
    "DATE OF BIRTH",
    formData.dateOfBirth || "",
    "EMAIL ADDRESS",
    formData.email || "",
  );
  const mobileStr =
    `${formData.mobileCode || "+61"} ${formData.mobile || ""}`.trim();
  addFieldBox("MOBILE", mobileStr);
  const fullAddress =
    `${formData.streetNumber || ""} ${formData.streetName || ""} ${formData.city || ""} ${formData.stateProvince || ""} ${formData.postalCode || ""} ${formData.country || ""}`.trim();
  addFieldBox("ADDRESS", fullAddress || "N/A");

  // 3. CRICOS Related Details
  addSectionHeader("CRICOS Related Details");
  addTwoColumnFields(
    "COUNTRY OF CITIZENSHIP",
    formData.countryOfCitizenship || "",
    "PASSPORT NUMBER",
    formData.passportNumber || "",
  );
  addFieldBox("VISA NUMBER", formData.visaNumber || "");

  // ----------------------------------------------------
  // PAGE 2
  // ----------------------------------------------------
  checkPageBreak(30);
  // 4. English Language Proficiency
  addSectionHeader("English Language Proficiency");
  addFieldBox(
    "HTML",
    "*Please note that the Australian Sovereign College may require you to undertake a Language Literacy and Numeracy (LLN) test prior to your enrolment being processed and/or accepted. If this is the case the Australian Sovereign College will contact you after you have made application to organize a suitable time with you to undertake the LLN test.",
  );

  // 5. VET Related Details
  addSectionHeader("VET Related Details");
  addFieldBox(
    "GENDER",
    formData.vetGender
      ? formData.vetGender.charAt(0).toUpperCase() + formData.vetGender.slice(1)
      : "Male",
  );
  addFieldBox("COUNTRY OF BIRTH", formData.countryOfBirth || "");
  addFieldBox("CITY OF BIRTH", formData.cityOfBirth || "");
  addFieldBox(
    "AUST. CITIZENSHIP STATUS",
    formData.austCitizenshipStatus || "Student Visa",
  );
  addFieldBox(
    "ABORIGINAL OR TORRES STRAIT ISLANDER ORIGIN:",
    formData.aboriginalTorresStrait
      ? formData.aboriginalTorresStrait === "yes"
        ? "Yes"
        : "No"
      : "No",
  );
  addFieldBox(
    "EMPLOYMENT STATUS",
    formData.employmentStatus || "Not employed - not seeking employment",
  );
  addFieldBox(
    "DO YOU SPEAK A LANGUAGE OTHER THAN ENGLISH AT HOME?",
    formData.languageOtherThanEnglish === "no" ? "No, English only" : "Yes",
  );
  addFieldBox(
    "DO YOU REQUIRE ENGLISH ASSISTANCE",
    formData.requireEnglishAssistance === "yes" ? "Yes" : "No",
  );
  addTwoColumnFields(
    "HIGHEST COMPLETED SCHOOL LEVEL",
    formData.highestCompletedLevel || "Year 12 or equivalent",
    "YEAR COMPLETED",
    formData.yearCompleted || "2024",
  );
  addFieldBox("DISABILITIES", formData.disabilities || "No");
  addFieldBox("PRIOR EDUCATION", formData.priorEducation || "No");

  // 6. Unique Student Identifier
  addSectionHeader("Unique Student Identifier");
  addFieldBox(
    "HTML",
    "All students studying nationally recognised training in Australia are required to have a Unique Student Identifier",
  );
  addFieldBox(
    "HTML",
    "If you do not have a USI, you can apply at www.usi.gov.au. If you need help in applying for a USI then please speak with someone from administration.",
  );

  // ----------------------------------------------------
  // PAGE 3
  // ----------------------------------------------------
  checkPageBreak(30);
  // 7. Emergency Contact Information
  addSectionHeader("Emergency Contact information");
  addFieldBox("NAME", formData.emergencyName || "N/A");
  addFieldBox("RELATIONSHIP", formData.emergencyRelationship || "N/A");
  const emergencyPhoneStr =
    `${formData.emergencyPhoneCode || "+61"} ${formData.emergencyPhone || ""}`.trim();
  addFieldBox("PHONE NUMBER", emergencyPhoneStr || "N/A");
  addFieldBox("COMMENTS", formData.emergencyComments || "None");

  // 8. Qualification Programs
  addSectionHeader("Qualification Programs");
  addFieldBox(
    "HTML",
    "Select the qualification for which you are filling the form",
  );
  const intakeStr =
    formData.intakeDay && formData.intakeMonth && formData.intakeYear
      ? `${formData.intakeDay}-${formData.intakeMonth}-${formData.intakeYear}`
      : "01-11-2026";

  const locationName = formData.qualificationLocation
    ? formData.qualificationLocation.charAt(0).toUpperCase() +
      formData.qualificationLocation.slice(1)
    : "Melbourne";

  addTwoColumnFields(
    "QUALIFICATION LOCATION",
    locationName,
    "INTAKE DATE",
    intakeStr,
  );

  const selectedDepts =
    formData.selectedDepartments && formData.selectedDepartments.length > 0
      ? formData.selectedDepartments.join(", ")
      : "Building Trades";

  addFieldBox("SELECT DEPARTMENT", selectedDepts);

  if (formData.selectedCourses && formData.selectedCourses.length > 0) {
    const mainDept = formData.selectedDepartments?.[0] || "Building Trades";
    const formattedCourses = formData.selectedCourses
      .map((c: string) => `• ${mainDept}\n${c}`)
      .join("\n");
    addFieldBox(
      `SELECT COURSE / PACKAGE FOR ${mainDept.toUpperCase()}`,
      formattedCourses,
    );
  } else {
    addFieldBox(
      "SELECT COURSE / PACKAGE FOR BUILDING TRADES",
      "• Building Trades\nCPC30220 - Certificate III in Carpentry - Duration (weeks up to 52)\n• Building Trades\nCPC50220 - Diploma of Building and Construction (Building) - Duration (weeks up to 52)",
    );
  }

  // 9. RPL and Credit Transfer (CT)
  addSectionHeader("RPL and Credit Transfer (CT)");
  addFieldBox(
    "ARE YOU APPLYING FOR CREDIT TRANSFER FOR THE UNITS SUCCESSFULLY COMPLETED AT ANOTHER PROVIDER?",
    formData.creditTransfer === "yes" ? "Yes" : "No",
  );
  addFieldBox(
    "HTML",
    "Your are require to fill in the Credit Transfer Request Form",
  );
  addFieldBox(
    "ARE YOU APPLYING FOR RECOGNITION OF PRIOR LEARNING(RPL)",
    formData.rplRecognition === "yes" ? "Yes" : "No",
  );

  // ----------------------------------------------------
  // PAGE 4
  // ----------------------------------------------------
  checkPageBreak(30);
  // 10. Overseas Student Health Cover (OSHC)
  addSectionHeader(
    "Overseas Student Health Cover (OSHC)",
    "If you want Australian Sovereign College to arrange OSHC on your behalf, please advise the following details:",
  );
  addFieldBox(
    "HTML",
    "It is an Australian Governments requirement that all international students on a student visa must be covered by Overseas Student Health Cover (OSHC). Payment of OSHC needs to occur when you accept your offer. If you are accompanied by family and children, you require the compuisory family policy for OSHC. AuSC can arrange visa-length cover with our preferred OSHC provider, upon request.\n\nAs part of your enrolment process, we would like to confirm your Overseas Student Health Cover (OSHC) arrangements. Please review the options below and respond accordingly:",
  );
  addFieldBox(
    "WOULD YOU LIKE AUSC TO ARRANGE OSHC ON YOUR BEHALF?",
    formData.arrangeOSHC ? formData.arrangeOSHC.toUpperCase() : "No",
  );
  addFieldBox(
    "HTML",
    "If No, please provide your current OSHC details as below:",
  );
  addFieldBox("HTML", "If yes, please indicate the type of OSHC you require:");
  addFieldBox(
    "HTML",
    "Also, if you currently have any OSHC, kindly provide your existing policy details (if available):",
  );
  addFieldBox(
    "HTML",
    "Special Note:\nAUSC will make every effort to find the most suitable OSHC provider for you. However, we cannot guarantee a specific provider of your choice.\nPlease note that this policy comes with an associated cost.",
  );

  // 11. Are you ready to complete the course?
  addSectionHeader("Are you ready to complete the course?");
  addFieldBox(
    "HTML",
    "The Australian Sovereign College has developed the following checklist to see if you are ready to start your course. This checklist may identify any English language, literacy and numeracy (LLN) needs you may have.Please complete the following suitability checklist:Rate yourself on the following tasks: Answer: Yes (I can do this myself) or No (I need help to do this)\n\nI can...",
  );

  // ----------------------------------------------------
  // PAGE 5
  // ----------------------------------------------------
  checkPageBreak(30);
  const llnTasks = [
    { label: "Read the time on a clock (analogue and digital)" },
    { label: "Add up prices of things in my head" },
    {
      label:
        "Work out how much change I should give (without help from the register)",
    },
    { label: "Look up a phone number in a telephone book or on the internet" },
    { label: "Take a phone message and write it down accurately" },
    { label: "Fill in a form (e.g. a timesheet for work)" },
    { label: "Follow spoken instructions for a task" },
  ];

  llnTasks.forEach((task) => {
    add3ColumnRow(task.label, "Yes", "Yes");
  });

  addFieldBox(
    "HTML",
    "The Australian Sovereign College will review your answers to this checklist and if needed arrange further assessments. We will then let you know if there are any gaps in your LLN skills and determine if you require additional assistance to successfully complete your training course. This assistance will be provided by our trainers, other training providers or LLN specialists. Students are encouraged to discuss any LLN concerns with the Administration Officer or their Trainer prior to enrolment.",
  );
  addFieldBox(
    "DO YOU REQUIRE LANGUAGE, LITERACY AND/OR NUMERACY SUPPORT TO COMPLETE YOUR STUDIES AT THE AUSTRALIAN SOVEREIGN COLLEGE?",
    formData.llnSupport ? formData.llnSupport.toUpperCase() : "No",
  );

  // 12. Learning Materials
  addSectionHeader(
    "Learning Materials",
    "All required materials will be supplied by the Australian Sovereign College unless otherwise stated in the course information.",
  );

  // 13. Quality Assurance
  addSectionHeader("Quality Assurance");
  addFieldBox(
    "HTML",
    "The Australian Sovereign College is externally audited at regular intervals to ensure it can maintain its accreditation as a Registered Training Organisation and/or CRICOS provider. A part of this process involves an auditor contacting some of the School's past and current students.",
  );
  addFieldBox(
    "PLEASE TICK THE BOX THAT REFLECTS YOUR PARTICIPATION AGREEMENT OR OTHERWISE.",
    "I agree to be contacted",
  );

  // ----------------------------------------------------
  // PAGE 6 & 7: Declaration
  // ----------------------------------------------------
  checkPageBreak(30);
  addSectionHeader("Declaration");

  const declarationText = `• I have read, understood and completed the above information correctly
• I understand that the payment I provide applies to the course I have chosen, and I will be provided further information from the Australian Sovereign College to finalise my enrolment
• I acknowledge that providing false information and/or failing to disclose any information relevant to my application for enrolment and /or failure to complete an application for enrolment form may result in the withdrawal of any offer
• I understand that it is my responsibility to provide all relevant and required documentation as specified in either the domestic and/or the International Student flyer or Prospectus – Please visit ausc.edu.au for student prospectus.
• I confirm I am not currently enrolled with another RTO unless allowed to do so.
• I can view current policies and procedures and I can contact the Australian Sovereign College to request a copy to be sent to me at any time
• Payment of fees will be included in the student enrolment agreement letter once my application has been accepted
• I acknowledge I have read, understand and agree to the Australian Sovereign College student refund policy - Please visit ausc.edu.au for Student Fees and Refund Policy.
• I acknowledge that I have read and understand the Australian Sovereign College complaints and appeals policy - Please visit ausc.edu.au for Complaints and Appeals Policy.
• I understand that fees may be subject to change at any time and I will be responsible for paying the amended amount - Please visit ausc.edu.au for Student Fees and Refund Policy.
• I understand that if the Australian Sovereign College rejects my application before providing a student enrolment agreement the application fee will not be refunded
• I understand that satisfactory course progression and attendance is mandatory. For students on International Student visas this may result with disciplinary action involving the Department of Home Affairs - Please visit ausc.edu.au for Attendance and Course Progress Policy.
• I will abide by the policies, procedures and any other rules of the Australian Sovereign College whilst I am studying. Please visit ausc.edu.au for Student Code of Conduct Policy.
• I understand that plagiarism of someone elses work is against the Australian Sovereign College policy and if found to have occurred will result in disciplinary action
• I have the financial capacity to meet tuition fees, and agree to pay fees as they become due
• The Australian Sovereign College is required, under s19 of the ESOS Act to report to the Secretary of the Department of Education about changes to student's enrolment; and any breach by students of student visa conditions relating to attendance or course progress
• I agree that the Australian Sovereign College may provide my educational records or information to a sponsoring agency or any other educational institution to which I apply
• I acknowledge and accept that during the course of my study or during activity programs, I may be photographed, videotaped or audio taped and I hereby grant the Australian Sovereign College unrestricted and non-expiring permission and all rights to use or license such media for any advertising or promotional purposes that the Australian Sovereign College may deem appropriate, without any compensation whatsoever
• I declare that I will disclose to the Australian Sovereign College any contagious medical condition that I might contract prior to or during my stay at the Australian Sovereign College and I agree to disclose any pre-existing medical or health condition that may require ongoing or intermittent medical attention or that may affect my ability to fully participate in either classroom or activity programs. I hereby authorise any doctor or medical facility to provide treatment to me if I am injured or ill whether or not I am able to provide consent.
• I agree and acknowledge that the Australian Sovereign College may collect and retain personal information including medical information as a result of this application and/or my time at the Australian Sovereign College and acknowledge that this information will only be used in the course of the provision of educational, ancillary and medical services either directly or indirectly and for no other purposes
• I have read and understood the 2019 VET Data Policy1 Privacy Notice and Student Declaration. Please visit ausc.edu.au for Privacy Notice and Student Declaration.
• For International students I understand that Information is collected on this form and during my enrolment in order to meet the Australian Sovereign College obligations under the ESOS Act 2000 and the National Code 2018; to ensure my compliance with the conditions of my visa and my obligations under Australian immigration laws generally. The authority to collect this information is contained in the Education Services for Overseas Students Act 2000, the Education Services for Overseas Students Regulations 2019 and the National Code of Practice for Registration Authorities and Providers of Education and Training to Overseas Students 2018. I understand that information collected about me on this form and during my enrolment can be provided, in certain circumstances, to the Australian Government and designated authorities and, if relevant, the Tuition Protection Scheme. In other instances, information collected on this form or during my enrolment can be disclosed without my consent where authorised or required by law.`;

  addFieldBox("HTML", declarationText);

  // Sign-off
  addFieldBox(
    "CHECKBOX",
    "I DECLARE I HAVE READ AND UNDERSTOOD THE ABOVE TERMS AND CONDITIONS AND FULLY UNDERSTAND MY OBLIGATIONS AND THE OBLIGATIONS OF MY TRAINING ORGANISATION.",
  );
  addFieldBox("FULL NAME", formData.fullName || fullName || "Cheah Kah Seng");

  // Signature Drawing Image
  const canvasEl =
    typeof document !== "undefined"
      ? (document.getElementById("signatureCanvas") as HTMLCanvasElement)
      : null;
  if (canvasEl) {
    try {
      const sigDataUrl = canvasEl.toDataURL("image/png");
      if (sigDataUrl && sigDataUrl.length > 500) {
        checkPageBreak(35);
        doc.setFillColor(240, 240, 240);
        doc.rect(marginLeft, y, contentWidth, 6, "F");
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor(60, 60, 60);
        doc.text("SIGNATURE", marginLeft + 2, y + 4.2);
        y += 8;

        doc.addImage(sigDataUrl, "PNG", marginLeft + 2, y, 60, 20);
        y += 24;
      }
    } catch (e) {
      console.warn("Could not add signature image to PDF:", e);
    }
  } else if (formData.signature) {
    checkPageBreak(35);
    doc.setFillColor(240, 240, 240);
    doc.rect(marginLeft, y, contentWidth, 6, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text("SIGNATURE", marginLeft + 2, y + 4.2);
    y += 8;

    try {
      doc.addImage(formData.signature, "PNG", marginLeft + 2, y, 60, 20);
      y += 24;
    } catch (e) {
      y += 4;
    }
  }

  const currentDate = new Date().toLocaleDateString("en-GB"); // DD/MM/YYYY
  addFieldBox("DATE", currentDate);

  // ----------------------------------------------------
  // PAGE 8 & 9: Application Information & Upload
  // ----------------------------------------------------
  checkPageBreak(30);
  addSectionHeader("Application Information");
  const isAgent = (formData.representedByAgent || "").toLowerCase() === "yes";
  addFieldBox("ARE YOU REPRESENTED BY AN AGENT?", isAgent ? "Yes" : "No");
  if (isAgent) {
    addFieldBox("AGENT EMAIL", formData.agentEmail || "");
    addFieldBox("AGENTS NAME", formData.agentName || "");
    addFieldBox("BUSINESS NAME", formData.businessName || "");
  }
  addFieldBox("STUDENT TYPE", formData.studentType || "Onshore (Australia)");

  addSectionHeader("Upload");
  addFieldBox(
    "PASSPORT",
    formData.passportFile
      ? (formData.passportFile as File).name
      : "nv463wjsgTxu-Passport_c.pdf",
  );
  addFieldBox(
    "ACADEMIC TRANSCRIPTS/CERTIFICATE",
    formData.academicTranscriptFile
      ? (formData.academicTranscriptFile as File).name
      : "rz0oVGKmDkbe-Year-10-transcript-in-VN-translated_compressed_compressed.pdf\naWMbKU0ZNreU-Year-11-transcript.pdf",
  );
  addFieldBox(
    "EVIDENCE OF ENGLISH LANGUAGE",
    formData.englishLanguageFile
      ? (formData.englishLanguageFile as File).name
      : "ZLTxeo6bQmHO-Year-12.pdf",
  );
  addFieldBox(
    "OTHER",
    formData.otherFile
      ? (formData.otherFile as File).name
      : "G6dDfTZetYE8-Visa-500.pdf\ngaS5H97QU3l8-94073_frm_Ecoe_21-Sep-2023-142251.103-PM.pdf",
  );

  addFieldBox(
    "EFT PAYMENT DETAILS",
    `Bank Name: Westpac\nBSB: 037001 Account number: 774656\nAccount name: Australian Sovereign College PTY LTD\nSwift Code: WPACAU2S\n\nPayment may be made by cash, credit card or bank transfer. Payment must be made in full prior to commencement of course.`,
  );

  addFieldBox(
    "HTML",
    `Under the Data Provision Requirements 2012, Australian Sovereign College is required to collect personal information about you and to disclose that personal information to the National Centre for Vocational Education Research Ltd (NCVER). Your personal information (including the personal information contained on this enrolment form), may be used or disclosed by Australian Sovereign College for statistical, administrative, regulatory and research purposes. Australian Sovereign College may disclose your personal information for these purposes to:\n• Commonwealth and State or Territory government departments and authorised agencies; and\n• NCVER.\n• Personal information that has been disclosed to NCVER may be used or disclosed by NCVER for the following purposes:\n• Populating authenticated VET transcripts;\n• Facilitating statistics and research relating to education, including surveys and data linkage;\n• Pre-populating RTO student enrolment forms;\n• Understanding how the VET market operates, for policy, workforce planning and consumer information; and\n• Administering VET, including program administration, regulation, monitoring and evaluation.\nYou may receive a student survey which may be administered by a government department or NCVER employee, agent or third- party contractor or other authorised agencies. Please note you may opt out of the survey at the time of being contacted.\nNCVER will collect, hold, use and disclose your personal information in accordance with the Privacy Act 1988 (Cth), the National VET Data Policy and all NCVER policies and protocols (including those published on NCVER's website at www.ncver.edu.au).`,
  );

  // ----------------------------------------------------
  // PAGE 10: PRIVACY NOTICE
  // ----------------------------------------------------
  checkPageBreak(30);
  addFieldBox(
    "PRIVACY NOTICE",
    `Under the Data Provision Requirements 2012, Australian Sovereign College is required to collect personal information about you and to disclose that personal information to the National Centre for Vocational Education Research Ltd (NCVER).
Your personal information (including the personal information contained on this enrolment form), may be used or disclosed by Australian Sovereign College for statistical, administrative, regulatory and research purposes.
Australian Sovereign College may disclose your personal information for these purposes to:
• Commonwealth and State or Territory government departments and authorised agencies; and
• NCVER.
• Personal information that has been disclosed to NCVER may be used or disclosed by NCVER for the following purposes:
• populating authenticated VET transcripts;
• facilitating statistics and research relating to education, including surveys and data linkage;
• pre-populating RTO student enrolment forms;
• understanding how the VET market operates, for policy, workforce planning and consumer information; and
• administering VET, including program administration, regulation, monitoring and evaluation.
You may receive a student survey which may be administered by a government department or NCVER employee, agent or third- party contractor or other authorised agencies. Please note you may opt out of the survey at the time of being contacted.
NCVER will collect, hold, use and disclose your personal information in accordance with the Privacy Act 1988 (Cth), the National VET Data Policy and all NCVER policies and protocols (including those published on NCVER's website at www.ncver.edu.au).

The Privacy Notice also makes it clear that the Notice is in addition to any other specific requirements RTOs are obligated to provide to their students, for example, under state or territory privacy laws. The following is minimum mandatory content for inclusion in a Privacy Notice.`,
  );

  const arrayBuffer = doc.output("arraybuffer");
  return new Blob([arrayBuffer], { type: "application/pdf" });
}
