import React, { useState } from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaGavel, FaCalendarCheck, FaChevronDown, FaChevronUp, FaCalendarPlus } from 'react-icons/fa';

const NotificationsPage = () => {
  const [expandedNotification, setExpandedNotification] = useState(null);

  const notifications = [
    {
      id: 1,
      message: "You have a new case assigned.",
      icon: <FaGavel className="text-blue-500" />,
      details: "Case details: John Doe vs State. The case involves a serious legal matter that requires immediate attention."
    },
    {
      id: 2,
      message: "Hearing scheduled for Case 002: Jane Smith vs City.",
      icon: <FaCalendarCheck className="text-blue-500" />,
      details: "Hearing scheduled on 2024-09-02 at 02:00 PM in Courtroom B. Please be prepared with all necessary documents."
    },
    {
      id: 3,
      message: "Document review pending for Case 003: Alice Brown vs State.",
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      details: "Please review the submitted documents by 2024-09-05. This is crucial for the next phase of the case."
    },
    {
      id: 4,
      message: "Bail decision required for Case 004: Bob White vs State.",
      icon: <FaGavel className="text-red-500" />,
      details: "The decision on bail is required urgently. Please make a decision before the hearing date."
    },
    {
      id: 5,
      message: "Case 005: Carol Black vs City has been closed.",
      icon: <FaCheckCircle className="text-green-500" />,
      details: "The case has been successfully closed. All necessary documentation and formalities have been completed."
    },
    {
      id: 6,
      message: "Upcoming hearing for Case 006: Mary Johnson vs County.",
      icon: <FaCalendarCheck className="text-blue-500" />,
      details: "Hearing is scheduled for 2024-09-10. Please ensure that all preparations are complete."
    },
    {
      id: 7,
      message: "Urgent: Review client feedback for Case 007: James Lee vs Corporation.",
      icon: <FaExclamationTriangle className="text-yellow-500" />,
      details: "Client feedback needs to be reviewed and addressed by 2024-09-12. This is critical for client satisfaction."
    },
    {
      id: 8,
      message: "Hearing scheduling request: Confirm or cancel.",
      icon: <FaCalendarPlus className="text-orange-500" />,
      details: "Please confirm or cancel the hearing request for Case 008: Laura Wilson vs Company. Your action is required."
    }
  ];

  const toggleDetails = (id) => {
    setExpandedNotification(expandedNotification === id ? null : id);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="bg-white shadow-md rounded-lg p-4 flex flex-col border border-gray-200">
            <div className="flex items-start mb-4">
              <span className="mr-4 text-2xl">{notification.icon}</span>
              <div className="flex-1">
                <p className="text-gray-800 font-semibold text-left">{notification.message}</p>
              </div>
              <button
                onClick={() => toggleDetails(notification.id)}
                className="bg-primary text-white px-4 py-2 rounded-lg flex items-center mt-2"
              >
                {expandedNotification === notification.id ? <FaChevronUp /> : <FaChevronDown />} More Details
              </button>
            </div>
            {expandedNotification === notification.id && (
              <div className="mt-2 text-gray-700 border-t border-gray-200 pt-2">
                <p className="text-sm text-left">{notification.details}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPage;
