import React, { useState } from "react";

import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./PhrCalendar.css";
import EventModal from "./EventModal";

const localizer = momentLocalizer(moment);

const PhrCalendar = () => {
  const [events, setEvents] = useState([
    {
      title: "Doctor's Appointment for Annual Health Checkup",
      start: new Date(2023, 6, 27, 10, 0),
      end: new Date(2023, 6, 27, 12, 0),
    },
    {
      title: "Dentist Checkup and Teeth Cleaning",
      start: new Date(2023, 6, 27, 15, 30),
      end: new Date(2023, 6, 27, 16, 30),
    },
    {
      title: "Blood Test and Health Screening",
      start: new Date(2023, 6, 28, 9, 0),
      end: new Date(2023, 6, 28, 10, 0),
    },
    {
      title: "Therapy Session for Stress Management",
      start: new Date(2023, 6, 28, 15, 0),
      end: new Date(2023, 6, 28, 16, 30),
    },
    {
      title: "Comprehensive Health Checkup with Specialist Consultation",
      start: new Date(2023, 6, 29, 11, 0),
      end: new Date(2023, 6, 29, 12, 30),
    },
    {
      title: "Vaccination for Influenza and COVID-19",
      start: new Date(2023, 6, 29, 14, 0),
      end: new Date(2023, 6, 29, 15, 0),
    },
    {
      title: "Physical Therapy for Rehabilitation",
      start: new Date(2023, 6, 30, 10, 30),
      end: new Date(2023, 6, 30, 11, 30),
    },
    {
      title: "Nutrition Consultation for Healthy Eating Habits",
      start: new Date(2023, 6, 30, 16, 0),
      end: new Date(2023, 6, 30, 17, 0),
    },
    {
      title: "Monthly Medication Refill",
      start: new Date(2023, 6, 14, 9, 0),
      end: new Date(2023, 6, 14, 10, 0),
    },
    {
      title: "Eye Checkup and Prescription Update",
      start: new Date(2023, 6, 10, 14, 0),
      end: new Date(2023, 6, 10, 15, 30),
    },
    {
      title: "Fitness Class - Yoga",
      start: new Date(2023, 6, 8, 18, 0),
      end: new Date(2023, 6, 8, 19, 0),
    },
    {
      title: "Telehealth Consultation - Dermatologist",
      start: new Date(2023, 6, 21, 13, 30),
      end: new Date(2023, 6, 21, 14, 30),
    },
  ]);

  const [showEventScheduler, setShowEventScheduler] = useState(false);

  const [startEventDate, setStartEventDate] = useState("1970-01-01");

  function hideModal() {
    setShowEventScheduler(false);
  }

  function addEvent(event) {
    setEvents([...events, event]);
  }

  const handleSelectEvent = (event) => {
    console.log("Selected event:", event);
  };

  const handleSelectSlot = (slotInfo) => {
    const selectedDate = new Date(Date.parse(slotInfo.start));
    setStartEventDate(
      `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`
    );
    setShowEventScheduler(true);
  };

  return (
    <div className="absolute inset-0 flex-grow p-4 scroll_y">
      <h2 className="italic text-blue-800">Important Dates</h2>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100%" }}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
        selectable
      />
      <EventModal
        startEventDate={startEventDate}
        show={showEventScheduler}
        onHide={hideModal}
        onSave={addEvent}
      />
    </div>
  );
};

export default PhrCalendar;
