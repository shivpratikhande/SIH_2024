import React from 'react';
import { FaInfoCircle, FaExclamationTriangle, FaCalendarAlt } from 'react-icons/fa';

const NotificationsPage = () => {
  const notifications = [
    { id: 1, text: "New case assigned: Smith vs. Jones.", icon: <FaInfoCircle className="text-blue-500" /> },
    { id: 2, text: "Client meeting scheduled for 2 PM tomorrow.", icon: <FaCalendarAlt className="text-green-500" /> },
    { id: 3, text: "Document submission deadline approaching: Johnson case.", icon: <FaExclamationTriangle className="text-red-500" /> },
    { id: 4, text: "Court hearing scheduled: Brown vs. Green, 10 AM on Monday.", icon: <FaCalendarAlt className="text-yellow-500" /> },
    { id: 5, text: "Your profile has been updated successfully.", icon: <FaInfoCircle className="text-gray-500" /> },
  ];

  return (
    <div className="p-6">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <ul className="list-disc pl-5 space-y-2">
          {notifications.map(notification => (
            <li key={notification.id} className="text-gray-700 flex items-center">
              <span className="mr-3">{notification.icon}</span>
              <span className="flex-1">{notification.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationsPage;
