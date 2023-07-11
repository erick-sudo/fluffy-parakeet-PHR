import React from "react"

const nav_bar_items =  [
    {
      "name": "Dashboard",
      "path": "dashboard",
      "items": [
        {"name": "Overview", "path": "overview"},
        {"name": "Recent Activity", "path": "recent-activity"},
        {"name": "Reminders", "path": "reminders"}
      ]
    },
    {
      "name": "Medical Records",
      "path": "medical-records",
      "items": [
        {"name": "Allergies", "path": "allergies"},
        {"name": "Medications", "path": "medications"},
        {"name": "Immunizations", "path": "immunizations"},
        {"name": "Procedures", "path": "procedures"},
        {"name": "Lab Results", "path": "lab-results"},
        {"name": "Radiology Reports", "path": "radiology-reports"},
        {"name": "Hospitalizations", "path": "hospitalizations"},
        {"name": "Discharge Summaries", "path": "discharge-summaries"},
        {"name": "Consultation Notes", "path": "consultation-notes"},
        {"name": "Pathology Reports", "path": "pathology-reports"},
        {"name": "Progress Notes", "path": "progress-notes"},
        {"name": "Dental Records", "path": "dental-records"},
        {"name": "Optical Records", "path": "optical-records"}
      ]
    },
    {
      "name": "Appointments",
      "path": "appointments",
      "items": [
        {"name": "Upcoming Appointments", "path": "upcoming-appointments"},
        {"name": "Schedule Appointment", "path": "schedule-appointment"},
        {"name": "Request Appointment", "path": "request-appointment"},
        {"name": "Appointment History", "path": "appointment-history"},
        {"name": "Set Reminders", "path": "set-reminders"}
      ]
    },
    {
      "name": "Health Summary",
      "path": "health-summary",
      "items": [
        {"name": "Personal Information", "path": "personal-information"},
        {"name": "Emergency Contacts", "path": "emergency-contacts"},
        {"name": "Primary Care Provider", "path": "primary-care-provider"},
        {"name": "Health Insurance Details", "path": "health-insurance-details"},
        {"name": "Family Medical History", "path": "family-medical-history"},
        {"name": "Chronic Conditions", "path": "chronic-conditions"},
        {"name": "Lifestyle Factors", "path": "lifestyle-factors"},
        {"name": "Risk Assessments", "path": "risk-assessments"},
        {"name": "Health Goals", "path": "health-goals"}
      ]
    },
    {
      "name": "Wellness",
      "path": "wellness",
      "items": [
        {"name": "Health Tips", "path": "health-tips"},
        {"name": "Nutrition", "path": "nutrition"},
        {"name": "Fitness", "path": "fitness"},
        {"name": "Sleep Tracking", "path": "sleep-tracking"},
        {"name": "Stress Management", "path": "stress-management"},
        {"name": "Weight Management", "path": "weight-management"},
        {"name": "Mental Health", "path": "mental-health"}
      ]
    },
    {
      "name": "Communication",
      "path": "communication",
      "items": [
        {"name": "Messages", "path": "messages"},
        {"name": "Inbox", "path": "inbox"},
        {"name": "Sent Items", "path": "sent-items"},
        {"name": "Compose New Message", "path": "compose-new-message"},
        {"name": "Notifications", "path": "notifications"}
      ]
    },
    {
      "name": "Resources",
      "path": "resources",
      "items": [
        {"name": "Health Articles", "path": "health-articles"},
        {"name": "FAQs", "path": "faqs"},
        {"name": "Glossary", "path": "glossary"},
        {"name": "Health Calculators", "path": "health-calculators"},
        {"name": "Support Groups", "path": "support-groups"},
        {"name": "Health Apps", "path": "health-apps"}
      ]
    },
    {
      "name": "Settings",
      "path": "settings",
      "items": [
        {"name": "Account Settings", "path": "account-settings"},
        {"name": "Privacy Settings", "path": "privacy-settings"},
        {"name": "Notification Preferences", "path": "notification-preferences"},
        {"name": "Connected Devices", "path": "connected-devices"},
        {"name": "Help and Support", "path": "help-and-support"},
        {"name": "Log Out", "path": "log-out"}
      ]
    }
  ]

  export { nav_bar_items }