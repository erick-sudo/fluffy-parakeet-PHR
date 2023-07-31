import React, { useState } from "react";

import { Container, Row, Form, Button, Col, Card } from "react-bootstrap";
import DisplayObject from "../common/DisplayObject";
import MultiEditableJson from "../common/MultiEditableObject";
import SubmitButton from "../common/SubmitButton";

const MedicalHistoryForm = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    primaryCarePhysician: "primaryCarePhysician",
    lastMedicalCheckupDate: "lastMedicalCheckupDate",
    chronicMedicalConditions: "chronicMedicalConditions",
    allergies: [
      {
        allergyName: "Pollen",
        severity: "Mild",
        diagnosedDate: "2022-03-15",
      },
      {
        allergyName: "Dust",
        severity: "Moderate",
        diagnosedDate: "2021-09-22",
      },
      {
        allergyName: "Peanuts",
        severity: "Severe",
        diagnosedDate: "2019-05-10",
      },
    ],
    medications: [
      {
        nameOfMedication: "Aspirin",
        dosage: "100mg",
        frequency: "Twice daily",
        reasonForUse: "Pain relief and fever reduction",
      },
      {
        nameOfMedication: "Lisinopril",
        dosage: "10mg",
        frequency: "Once daily",
        reasonForUse: "High blood pressure management",
      },
      {
        nameOfMedication: "Simvastatin",
        dosage: "20mg",
        frequency: "Once daily",
        reasonForUse: "Lowering cholesterol levels",
      },
      {
        nameOfMedication: "Metformin",
        dosage: "500mg",
        frequency: "Twice daily",
        reasonForUse: "Managing type 2 diabetes",
      },
    ],
    surgeries: [
      {
        dateOfSurgery: "2023-01-15",
        typeOfSurgery: "Appendectomy",
        nameOfSurgeon: "Dr. Smith",
        reasonForSurgery: "Appendicitis",
      },
      {
        dateOfSurgery: "2023-03-10",
        typeOfSurgery: "Knee Replacement",
        nameOfSurgeon: "Dr. Johnson",
        reasonForSurgery: "Osteoarthritis",
      },
      {
        dateOfSurgery: "2023-05-22",
        typeOfSurgery: "Gallbladder Removal",
        nameOfSurgeon: "Dr. Anderson",
        reasonForSurgery: "Gallstones",
      },
      {
        dateOfSurgery: "2023-07-05",
        typeOfSurgery: "Hernia Repair",
        nameOfSurgeon: "Dr. Williams",
        reasonForSurgery: "Inguinal Hernia",
      },
    ],
    immunizations: [
      {
        vaccineName: "COVID-19 Vaccine",
        dateOfAdministration: "2023-07-10",
        administeredBy: "Dr. Smith",
      },
      {
        vaccineName: "Flu Shot",
        dateOfAdministration: "2023-01-15",
        administeredBy: "Nurse Johnson",
      },
      {
        vaccineName: "Tetanus Vaccine",
        dateOfAdministration: "2022-11-30",
        administeredBy: "Dr. Williams",
      },
      {
        vaccineName: "Measles Vaccine",
        dateOfAdministration: "2022-05-22",
        administeredBy: "Nurse Davis",
      },
    ],
    familyMedicalHistory: [
      {
        medicalCondition: "Hypertension",
        affectedFamilyMember: "John Doe",
        relationship: "Father",
      },
      {
        medicalCondition: "Diabetes",
        affectedFamilyMember: "Jane Smith",
        relationship: "Mother",
      },
      {
        medicalCondition: "Asthma",
        affectedFamilyMember: "Sam Johnson",
        relationship: "Brother",
      },
      {
        medicalCondition: "Cancer",
        affectedFamilyMember: "Emily Williams",
        relationship: "Sister",
      },
    ],
  });

  // Helper functions to handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNestedChange = (k, field, value) => {
    setFormData({
      ...formData,
      [k]: [...formData[k], value],
    });
  };

  // Add new rows
  const addRow = (k, value) => {
    setFormData({
      ...formData,
      [k]: [...formData[k], value],
    });
  };

  // Remove row
  const removeRow = (k, index) => {
    setFormData({
      ...formData,
      [k]: formData[k].filter((v, idx) => idx !== index),
    });
  };

  return (
    <div className="mx-4">
      <MultiEditableJson title={"Medical History"} footer={<SubmitButton val="Save changes" />} jsonData={formData} />
    </div>
  );
};

export default MedicalHistoryForm;
