import React, { useState } from "react";
import MultiEditableJson from "../common/MultiEditableObject";

const InsuranceInformationForm = () => {
  const [insuranceProviders, setInsuranceProviders] = useState([
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
      <MultiEditableJson title={"Insurance Information"} jsonData={insuranceProviders} />
    </div>
  );
};

export default InsuranceInformationForm;
