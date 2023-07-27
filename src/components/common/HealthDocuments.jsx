import React from "react";

import doc_image from "../../assets/doc.png";
import { Card } from "react-bootstrap";

const HealthDocuments = () => {
  return (
    <div>
      {new Array(13).fill(0).map((doc, index) => {
        return (
          <Card key={index}>
            <img src={doc_image} alt="Doc" />
          </Card>
        );
      })}
    </div>
  );
};

export default HealthDocuments;
