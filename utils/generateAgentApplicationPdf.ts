import { jsPDF } from "jspdf";

export function generateAgentApplicationPdf(formData: any): Blob {
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

  const addTwoColumnFields = (
    label1: string,
    val1: string,
    label2: string,
    val2: string,
  ) => {
    checkPageBreak(14);
    const halfWidth = (contentWidth - 4) / 2;
    const boxHeight = 6;

    doc.setFillColor(240, 240, 240);
    doc.rect(marginLeft, y, halfWidth, boxHeight, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.setTextColor(60, 60, 60);
    doc.text(label1.toUpperCase(), marginLeft + 2, y + 4.2);

    const col2X = marginLeft + halfWidth + 4;
    doc.setFillColor(240, 240, 240);
    doc.rect(col2X, y, halfWidth, boxHeight, "F");
    doc.text(label2.toUpperCase(), col2X + 2, y + 4.2);
    y += boxHeight + 2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(20, 20, 20);
    const lines1 = doc.splitTextToSize(val1 || "N/A", halfWidth - 4);
    doc.text(lines1, marginLeft + 2, y + 2.5);

    const lines2 = doc.splitTextToSize(val2 || "N/A", halfWidth - 4);
    doc.text(lines2, col2X + 2, y + 2.5);

    const maxLines = Math.max(lines1.length, lines2.length);
    y += maxLines * 4.5 + 3;
  };

  // Header Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(0, 51, 102); // Dark Blue Theme
  doc.text("AGENT REGISTRATION FORM", pageWidth / 2, y, { align: "center" });
  y += 12;

  // 1. Agency Details
  addSectionHeader("Agency Details");
  addTwoColumnFields(
    "Business Type",
    formData.businessType,
    "Legal Name of Entity",
    formData.legalName,
  );
  addTwoColumnFields(
    "Trading Name",
    formData.tradingName,
    "Name of Owner(s)",
    formData.ownerName,
  );
  addTwoColumnFields(
    "Place of Registration",
    formData.placeOfRegistration,
    "Date of Registration",
    formData.dateOfRegistration,
  );
  addTwoColumnFields(
    "Australian Business Number (ABN)",
    formData.australianBusinessNumber,
    "MARA No.",
    formData.maraNo,
  );
  addTwoColumnFields(
    "QEAC No.",
    formData.qeacNo,
    "Representing Countries",
    formData.representingCountries,
  );

  // 2. Director / CEO Details
  addSectionHeader("Director / CEO Details");
  addTwoColumnFields(
    "CEO Name",
    formData.ceoName,
    "CEO Email",
    formData.ceoEmail,
  );
  addTwoColumnFields(
    "CEO Mobile",
    formData.ceoMobile,
    "CEO Landline",
    formData.ceoLandline,
  );

  // 3. Contact Person Details
  addSectionHeader("Contact Person Details");
  addTwoColumnFields(
    "Contact Name",
    formData.contactPersonName,
    "Contact Email",
    formData.contactPersonEmail,
  );
  addTwoColumnFields(
    "Contact Mobile",
    formData.contactPersonMobile,
    "Contact Landline",
    formData.contactPersonLandline,
  );

  // 4. Head Office Address
  addSectionHeader("Head Office & Web Details");
  addFieldBox("Head Office Address", formData.headOfficeAddress);
  addTwoColumnFields(
    "Website",
    formData.website,
    "Number of Branches",
    formData.numberOfBranches,
  );
  if (formData.locationOfBranches) {
    addFieldBox("Location of Branches", formData.locationOfBranches);
  }

  // 5. Course Interest & Professional Body
  addSectionHeader("Course Interest & Professional Membership");
  addFieldBox(
    "Courses Interested In",
    Array.isArray(formData.courseTypes)
      ? formData.courseTypes.join(", ")
      : formData.courseTypes,
  );
  addTwoColumnFields(
    "Name of Professional / Industrial Body",
    formData.professionalBodyName,
    "Years of Membership",
    formData.yearsOfMembership,
  );

  // 6. Current Associated Institutions
  addSectionHeader("Current Associated Institutions");
  if (formData.institutions && formData.institutions.length > 0) {
    formData.institutions.forEach((inst: any, idx: number) => {
      addTwoColumnFields(
        `Institution ${idx + 1} Name`,
        inst.name,
        "Years Affiliated",
        inst.years,
      );
      addFieldBox("Number of Students Sent Annually", inst.students);
    });
  }

  // 7. Performance & Services
  addSectionHeader("Performance & Services Provided");
  addFieldBox(
    "Expected First Year Enrolments for AuSC",
    formData.studentsToRecruit,
  );
  addFieldBox("Student Support Services Provided", formData.studentSupport);
  addFieldBox("Fees Charged to Prospective Students", formData.prospectiveFees);
  addFieldBox("Additional Marketing Information", formData.otherInformation);

  // 8. Compliance & Regulation
  addSectionHeader("Compliance & Understanding");
  addFieldBox(
    "Compliance with Standard 4 of National Code 2018",
    formData.complianceExplanation,
  );
  addFieldBox("PIER Accreditation Detail", formData.pierAccreditation);
  addFieldBox("Understanding of ESOS Act 2000", formData.esosUnderstanding);
  addFieldBox(
    "Understanding of Student Visa Requirements",
    formData.studentVisaRequirement,
  );
  addFieldBox(
    "Will Comply with AuSC Marketing Requirements?",
    formData.auscMarketing,
  );
  addFieldBox("Use of AuSC Marketing Materials", formData.auscMaterialUsage);

  // 9. References
  addSectionHeader("References");
  addTwoColumnFields(
    "Ref 1 Name",
    formData.ref1Name,
    "Ref 1 Organization",
    formData.ref1Organisation,
  );
  addTwoColumnFields(
    "Ref 1 Position",
    formData.ref1Position,
    "Ref 1 Email",
    formData.ref1Email,
  );
  addFieldBox("Ref 1 Contact No.", formData.ref1Contact);

  addTwoColumnFields(
    "Ref 2 Name",
    formData.ref2Name,
    "Ref 2 Organization",
    formData.ref2Organisation,
  );
  addTwoColumnFields(
    "Ref 2 Position",
    formData.ref2Position,
    "Ref 2 Email",
    formData.ref2Email,
  );
  addFieldBox("Ref 2 Contact No.", formData.ref2Contact);

  // 10. Declaration & Signature
  addSectionHeader("Declaration & Signature");
  addTwoColumnFields(
    "Authorised Person Name",
    formData.authorisedPersonName,
    "Position",
    formData.authorisedPersonPosition,
  );

  if (formData.signature) {
    checkPageBreak(50);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("Signature:", marginLeft, y + 10);
    doc.addImage(formData.signature, "PNG", marginLeft, y + 15, 60, 30);
    y += 50;
  }

  return doc.output("blob");
}
