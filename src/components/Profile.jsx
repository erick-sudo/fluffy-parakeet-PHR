import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import PersonalInformationForm from "./registration/PersonalInformationForm";
import EmergencyContactInformationForm from "./registration/EmergencyContactInformationForm";
import MedicalHistoryForm from "./registration/MedicalHistoryForm";
import LifestyleHabitsForm from "./registration/LifestyleHabitsForm";
import InsuranceInformationForm from "./registration/InsuranceInformationForm";
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import ConversationScreen from "./ConversationScreen";

const Profile = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const profile_tabs = [
    { pathname: "", title: "Personal Information" },
    { pathname: "emergency", title: "Emergency Information" },
    { pathname: "medical_history", title: "Medical History" },
    { pathname: "lifestyle", title: "Lifestyle and Habits" },
    { pathname: "insurance", title: "Insurance Information" },
  ];

  const last_path_component = pathname.split("/").reverse()[0];

  return (
    <div className="absolute flex inset-0">
      <div className="p-2 cursor-pointer min-w-max sticky top-0">
        <ListGroup>
          {profile_tabs.map((profile_tab, index) => (
            <ListGroupItem
              key={index}
              onClick={() => navigate(profile_tab.pathname)}
              className={`${
                last_path_component === profile_tab.pathname && "text-primary"
              } hover:bg-blue-700 hover:text-white`}
            >
              <span className="block py-2 font-bold">{profile_tab.title}</span>
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <div className="flex-grow scroll_y py-2 max-w-xl">
        <Routes>
          <Route path="" element={<PersonalInformationForm />} />
          <Route
            path="/emergency"
            element={<EmergencyContactInformationForm />}
          />
          <Route path="/medical_history" element={<MedicalHistoryForm />} />
          <Route path="/lifestyle" element={<LifestyleHabitsForm />} />
          <Route path="/insurance" element={<InsuranceInformationForm />} />
        </Routes>
      </div>
      <div className="bg-white flex-grow max-w-lg">
        <ConversationScreen />
      </div>
    </div>
  );
};

export default Profile;
