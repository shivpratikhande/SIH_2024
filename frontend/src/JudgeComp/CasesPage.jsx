// src/lawyerComponents/components/CasesPage.jsx
import React, { useState } from 'react';
import CaseDetailModal from './CaseDetailModal';

const CasesPage = () => {
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

  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedCase(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6">Case Overview</h2>
      <ul className="w-full max-w-3xl">
        {dummyCases.map((caseItem) => (
          <li
            key={caseItem.id}
            className="p-4 bg-white shadow mb-4 rounded-lg cursor-pointer"
          >
            <h3 className="font-semibold">{caseItem.caseNumber}</h3>
            <button
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleCaseClick(caseItem)}
            >
              View Details
            </button>
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
