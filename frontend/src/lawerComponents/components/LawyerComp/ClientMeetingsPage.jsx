import React, { useState } from 'react';

const ClientMeetings = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, client: 'John Doe', date: 'Aug 30, 2024', time: '10:00 AM', location: 'Office 101', purpose: 'Discuss case strategy', status: 'Scheduled' },
    { id: 2, client: 'Jane Smith', date: 'Sep 1, 2024', time: '2:00 PM', location: 'Conference Room A', purpose: 'Review evidence', status: 'Confirmed' },
    { id: 3, client: 'Alice Johnson', date: 'Sep 5, 2024', time: '11:00 AM', location: 'Virtual - Zoom', purpose: 'Pre-trial consultation', status: 'Pending' },
    { id: 4, client: 'Bob Brown', date: 'Sep 10, 2024', time: '9:00 AM', location: 'Office 202', purpose: 'Settlement discussion', status: 'Scheduled' },
    { id: 5, client: 'Mary Green', date: 'Sep 12, 2024', time: '3:00 PM', location: 'Conference Room B', purpose: 'Document review', status: 'Confirmed' },
    { id: 6, client: 'James White', date: 'Sep 15, 2024', time: '1:00 PM', location: 'Virtual - Microsoft Teams', purpose: 'Legal strategy meeting', status: 'Pending' },
  ]);

  const updateStatus = (id, newStatus) => {
    setMeetings(meetings.map(meeting => 
      meeting.id === id ? { ...meeting, status: newStatus } : meeting
    ));
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-left text-gray-800">Client Meetings</h1>
      <div className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {meetings.map((meeting) => (
            <div
              key={meeting.id}
              className="bg-white border border-gray-300 shadow-md rounded-lg p-6 flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl hover:border-blue-400"
            >
              <div className="font-semibold text-2xl mb-2 text-gray-900 text-left">{meeting.client}</div>
              <div className="text-gray-700 mb-2 text-left">
                <span className="font-medium text-gray-800">Date:</span> {meeting.date}
              </div>
              <div className="text-gray-700 mb-2 text-left">
                <span className="font-medium text-gray-800">Time:</span> {meeting.time}
              </div>
              <div className="text-gray-700 mb-2 text-left">
                <span className="font-medium text-gray-800">Location:</span> {meeting.location}
              </div>
              <div className="text-gray-700 mb-2 text-left">
                <span className="font-medium text-gray-800">Purpose:</span> {meeting.purpose}
              </div>
              <div className={`text-gray-700 mb-4 text-xl font-medium text-left ${meeting.status === 'Scheduled' ? 'text-blue-500' : meeting.status === 'Confirmed' ? 'text-green-500' : 'text-yellow-500'}`}>
                <span className="font-semibold">Status:</span> {meeting.status}
              </div>
              <div className="flex space-x-3 mt-auto">
                {/* Conditionally render the Confirm button based on the meeting status */}
                {meeting.status !== 'Confirmed' && (
                  <button
                    className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => updateStatus(meeting.id, 'Confirmed')}
                  >
                    Confirm
                  </button>
                )}
                <button
                  className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200"
                  onClick={() => updateStatus(meeting.id, 'Cancelled')}
                  disabled={meeting.status === 'Cancelled'}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientMeetings;
