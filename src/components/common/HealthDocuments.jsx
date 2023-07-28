import React from "react";

import doc_image from "../../assets/doc.png";
import { Card } from "react-bootstrap";

const HealthDocuments = () => {
  return (
    <div className="grid grid-cols-3">
      {new Array(13).fill(0).map((doc, index) => {
        return (
          <Card style={{borderRadius: '0'}} key={index} className="max-w-[300px]">
            <img src={doc_image} alt="Doc" />
          </Card>
        );
      })}
    </div>
  );
};

export default HealthDocuments;
