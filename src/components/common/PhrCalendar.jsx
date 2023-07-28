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
      title: "Meeting",
      start: new Date(2023, 6, 27, 10, 0),
      end: new Date(2023, 6, 27, 12, 0),
    },
    {
      title: "Conference",
      start: new Date(2023, 6, 28, 9, 30),
      end: new Date(2023, 6, 28, 17, 0),
    },
    {
      title: "Presentation",
      start: new Date(2023, 6, 28, 10, 30),
      end: new Date(2023, 6, 28, 9, 30),
    },
  ]);

  const [showEventScheduler, setShowEventScheduler] = useState(false);

  const [startEventDate, setStartEventDate] = useState('1970-01-01');

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
    const selectedDate = new Date(Date.parse(slotInfo.start))
    setStartEventDate(`${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`)
    setShowEventScheduler(true)
  };

  return (
    <div className="absolute inset-0 flex-grow p-4 scroll_y">
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
      <EventModal startEventDate={startEventDate} show={showEventScheduler} onHide={hideModal} onSave={addEvent} />
    </div>
  );
};

export default PhrCalendar;
