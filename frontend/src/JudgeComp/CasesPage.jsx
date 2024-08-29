import React, { useState } from 'react';
import CaseDetailModal from './CaseDetailModal';
import { FaSearch, FaInfoCircle, FaCalendarAlt, FaExclamationTriangle } from 'react-icons/fa';

const CasesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Dummy cases
  const dummyCases = [
    {
      id: 1,
      title: "Case 001: John Doe vs State",
      status: "Pending",
      date: "2024-08-01",
      assignedJudge: "Judge A",
      caseNumber: "JD-2024-001",
      details: {
        caseDetails: "John Doe is facing charges related to an alleged theft incident that occurred on August 1, 2024. The prosecution argues that John Doe was found at the scene with stolen goods. The defense claims that John Doe was mistakenly identified and has evidence to prove his innocence.",
        pastRecords: "John Doe has no prior criminal records. Previous background checks reveal a clean slate with no previous charges or convictions.",
        familyBackground: "John Doe comes from a middle-class family. His father is a retired teacher, and his mother is a nurse. He has two siblings who are pursuing higher education. The family has provided character references stating John’s good behavior and strong family values.",
        riskAnalysis: "The risk analysis for granting bail considers John Doe's lack of prior offenses and the strong support from his family. However, the proximity of the crime and the evidence found at the scene are points of concern. The analysis suggests a moderate risk level.",
        surety: {
          suretyBondAmount: 5000,
          suretyBondDocuments: [
            "Proof of Identity",
            "Proof of Income",
            "Property Paper"
          ],
          suretyBondStatus: "Verified"
        }
      }
    },
    {
      id: 2,
      title: "Case 002: Jane Smith vs City",
      status: "Closed",
      date: "2024-07-15",
      assignedJudge: "Judge B",
      caseNumber: "JS-2024-002",
      details: {
        caseDetails: "Jane Smith was involved in a legal dispute with the city regarding wrongful termination from her job. The case was resolved with a settlement in favor of Jane Smith, which included compensation for lost wages and damages.",
        pastRecords: "Jane Smith has a history of employment disputes but no criminal records. Her previous cases were related to workplace issues rather than criminal activities.",
        familyBackground: "Jane Smith is a single mother with one child. She has been working in the public sector for over a decade and has a strong support system from her family and friends. Her background is characterized by stability and a focus on her child’s well-being.",
        riskAnalysis: "Given the nature of the case being employment-related and the resolution reached, there are minimal risks associated with Jane Smith. The risk analysis indicates low risk, as the case was resolved through settlement without further legal action.",
        surety: {
          suretyBondAmount: 2000,
          suretyBondDocuments: [
            "Proof of Identity",
            "Proof of Employment",
            "Bank Statement"
          ],
          suretyBondStatus: "Verified"
        }
      }
    },
    {
      id: 3,
      title: "Case 003: Alice Brown vs County",
      status: "In Progress",
      date: "2024-08-10",
      assignedJudge: "Judge C",
      caseNumber: "AB-2024-003",
      details: {
        caseDetails: "Alice Brown is involved in a legal battle against the county over alleged violations of civil rights. The case focuses on claims of unlawful detention and excessive force by local law enforcement. The trial is ongoing, with evidence being presented from both sides.",
        pastRecords: "Alice Brown has a history of activism and has previously been involved in legal actions related to civil rights. She has no criminal records but has been a vocal critic of law enforcement practices.",
        familyBackground: "Alice Brown comes from a family with a history of social activism. Her parents are both retired community organizers, and she has two siblings who are also involved in advocacy work. The family is supportive of her current legal battles.",
        riskAnalysis: "The risk analysis considers the ongoing nature of the trial and the public interest in the case. Although there are no immediate safety concerns, the high-profile nature of the case adds complexity. The analysis suggests a moderate to high risk level due to the potential for public and media attention.",
        surety: {
          suretyBondAmount: 7500,
          suretyBondDocuments: [
            "Proof of Identity",
            "Proof of Address",
            "Affidavit of Support",
            "Insurance Document"
          ],
          suretyBondStatus: "Under Review"
        }
      }
    }
  ];

  // Filter cases based on search query
  const filteredCases = dummyCases.filter((caseItem) =>
    caseItem.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCase(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-left">Case Overview</h2>
      {/* Search Box */}
      <div className="mb-6">
        <div className="flex items-center space-x-4 w-full max-w-full">
          <input
            type="text"
            placeholder="Search by Case ID or Client Name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="border border-gray-300 rounded-lg p-3 flex-1"
          />
          <button
            onClick={() => setSearchQuery(searchQuery)} // Trigger search when button is clicked
            className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark flex items-center"
          >
            <FaSearch className="w-5 h-5 mr-2" />
            <span className="font-semibold">Search</span>
          </button>
        </div>
      </div>

      <ul className="space-y-4">
        {filteredCases.map((caseItem) => (
          <li
            key={caseItem.id}
            className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer"
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">
                {caseItem.status === 'Pending' && <FaExclamationTriangle className="text-yellow-500 text-2xl" />}
                {caseItem.status === 'Closed' && <FaInfoCircle className="text-green-500 text-2xl" />}
                {caseItem.status === 'In Progress' && <FaCalendarAlt className="text-blue-500 text-2xl" />}
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-left">{caseItem.title}</h3>
                <p className="text-sm text-gray-600 text-left">Date: {caseItem.date}</p>
                <p className="text-sm text-gray-600 text-left">Judge: {caseItem.assignedJudge}</p>
                <p className="text-sm text-gray-600 text-left">Case Number: {caseItem.caseNumber}</p>
              </div>
              <button
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors duration-300"
                onClick={() => handleCaseClick(caseItem)}
              >
                View Details
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalVisible && (
        <CaseDetailModal caseItem={selectedCase} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CasesPage;
