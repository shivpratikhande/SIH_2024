import React from "react";

const CaseOverviewPage = () => {
  const dummyCases = [
    { id: 1, title: "Case 001: John Doe vs State", status: "Pending", date: "2024-08-01", assignedJudge: "Judge A", caseNumber: "JD-2024-001" },
    { id: 2, title: "Case 002: Jane Smith vs City", status: "Closed", date: "2024-07-15", assignedJudge: "Judge B", caseNumber: "JS-2024-002" },
    { id: 3, title: "Case 003: Alice Brown vs County", status: "In Progress", date: "2024-08-10", assignedJudge: "Judge C", caseNumber: "AB-2024-003" },
    
  ];

  return (
    <div className="flex flex-col items-center"> {/* Center content and add margin */}
      <h2 className="text-2xl font-bold mb-6 text-center"> {/* Center the heading */}
        Case Overview
      </h2>
      <ul className="w-full max-w-3xl"> {/* Limit the width of the list */}
        {dummyCases.map((caseItem) => (
          <li key={caseItem.id} className="p-4 bg-white shadow mb-4 rounded-lg">
            <h3 className="font-semibold">{caseItem.title}</h3>
            <p>Status: {caseItem.status}</p>
            <p>Date: {caseItem.date}</p>
            <p>Assigned Judge: {caseItem.assignedJudge}</p>
            <p>Case Number: {caseItem.caseNumber}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CaseOverviewPage;
