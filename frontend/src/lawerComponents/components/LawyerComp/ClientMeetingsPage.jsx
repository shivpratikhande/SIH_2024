import React from 'react';

const ClientMeetings = () => {
  const meetings = [
    { id: 1, client: 'John Doe', date: 'Aug 30, 2024', time: '10:00 AM', location: 'Office 101' },
    { id: 2, client: 'Jane Smith', date: 'Sep 1, 2024', time: '2:00 PM', location: 'Conference Room A' },
    { id: 3, client: 'Alice Johnson', date: 'Sep 5, 2024', time: '11:00 AM', location: 'Virtual - Zoom' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Client Meetings</h1>
      <div className="bg-white shadow p-4 rounded-lg">
        <ul>
          {meetings.map((meeting) => (
            <li key={meeting.id} className="mb-2 p-2 bg-gray-100 rounded">
              <div className="font-bold">{meeting.client}</div>
              <div>Date: {meeting.date}</div>
              <div>Time: {meeting.time}</div>
              <div>Location: {meeting.location}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ClientMeetings;
