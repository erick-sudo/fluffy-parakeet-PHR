import React, { useState } from "react";
import MultiEditableJson from "../common/MultiEditableObject";
import SubmitButton from "../common/SubmitButton";

const InsuranceInformationForm = () => {
  const [insuranceProviders, setInsuranceProviders] = useState([
    {
      healthInsuranceProvider: "XYZ Health Insurance",
      insurancePolicyNumber: "ABC123456",
      groupNumber: "GRP789WETT4567",
      insuranceProviderPhoneNumber: "+1 (123) 456-7890",
      insuranceProviderAddress: {
        street: "123 Main Street",
        city: "Cityville",
        state: "Stateville",
        zip: "12345",
        country: "Countryland",
      },
    },
  ]);
  const handleAddProvider = () => {
    setInsuranceProviders([
      ...insuranceProviders,
      {
        healthInsuranceProvider: "",
        insurancePolicyNumber: "",
        groupNumber: "",
        insuranceProviderPhoneNumber: "",
        insuranceProviderAddress: {
          street: "",
          city: "",
          state: "",
          zip: "",
          country: "",
        },
      },
    ]);
  };

  return (
    <div className="m-4">
      <MultiEditableJson
        title={"Insurance Information"}
        jsonData={insuranceProviders}
      footer={<SubmitButton val="Save changes" />}
      />
    </div>
  );
};

export default InsuranceInformationForm;
