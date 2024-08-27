import React, { useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  DocumentTextIcon,
  IdentificationIcon,
  UserCircleIcon,
  BanknotesIcon,
  BriefcaseIcon,
  ClipboardDocumentIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";

// Register the required components for ChartJS
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const CaseDetailModal = ({ caseItem, onClose }) => {
  if (!caseItem) return null;

  // State for fine calculation and surety bonds
  const [fineAmount, setFineAmount] = useState(0);
  const [fineBreakdown, setFineBreakdown] = useState({
    crimeSeverity: 0,
    incomeBased: 0,
    previousFines: 0,
  });
  const [suretyAmount, setSuretyAmount] = useState(0);
  const [isSuretyCalculated, setIsSuretyCalculated] = useState(false);
  const [isFineCalculated, setIsFineCalculated] = useState(false);

  // Dummy data for surety bonds price and calculation
  const baseSuretyAmount = 100000; // Example base amount for surety bonds
  const suretyMultiplier = 1.5; // Example multiplier for surety bond calculation

  // Example factors for fine calculation
  const baseFine = 50000; // Base fine amount for severity of crime
  const incomePercentage = 0.1; // 10% of income as fine
  const previousFines = 20000; // Example amount of previous fines

  // Dummy data for caseItem
  const dummyCaseItem = {
    title: "Case #12345",
    details: {
      caseDetails:
        "The case involves a theft charge under section 378 of the IPC.",
      pastRecords: "The individual has previous convictions for petty theft.",
      familyBackground:
        "The individual comes from a financially unstable family.",
      income: 250000, // Dummy income in INR
    },
  };

  // Document links (for demonstration purposes)
  const documentLinks = {
    proofOfIncome: "https://example.com/proof_of_income.pdf",
    propertyPapers: "https://example.com/property_papers.pdf",
    previousCriminalRecords:
      "https://example.com/previous_criminal_records.pdf",
    characterReferences: "https://example.com/character_references.pdf",
    suretyIdentificationProof:
      "https://example.com/surety_identification_proof.pdf",
    incomeTaxReturns: "https://example.com/income_tax_returns.pdf", // Added for fine calculation
    salarySlips: "https://example.com/salary_slips.pdf", // Added for fine calculation
    firDocuments: "https://example.com/fir_documents.pdf", // FIR Documents
    policeReport: "https://example.com/police_report.pdf", // Police Report
    courtOrders: "https://example.com/court_orders.pdf", // Court Orders
    bailDocuments: "https://example.com/bail_documents.pdf", // Bail Documents
    chargeSheet: "https://example.com/charge_sheet.pdf", // Charge Sheet
    witnessStatements: "https://example.com/witness_statements.pdf", // Witness Statements
  };

  // Calculate fine
  const calculateFine = () => {
    const income = dummyCaseItem.details.income;

    if (!income || isNaN(income)) {
      console.error("Invalid or missing income in caseItem details.");
      return;
    }

    const crimeSeverityFine = baseFine; // Base fine based on crime severity
    const incomeBasedFine = income * incomePercentage; // 10% of income
    const totalFine = crimeSeverityFine + incomeBasedFine + previousFines;

    setFineBreakdown({
      crimeSeverity: crimeSeverityFine,
      incomeBased: incomeBasedFine,
      previousFines,
    });
    setFineAmount(totalFine);

    // Toggle visibility
    setIsFineCalculated(!isFineCalculated);
  };

  // Calculate surety bonds
  const calculateSuretyAmount = () => {
    setSuretyAmount(baseSuretyAmount * suretyMultiplier);
    setIsSuretyCalculated(!isSuretyCalculated); // Toggle surety calculation visibility
  };

  // Chart data for risk analysis (Pie Chart)
  const riskChartData = {
    labels: ["High Risk", "Medium Risk", "Low Risk"],
    datasets: [
      {
        data: [30, 50, 20], // Example data
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
        borderColor: ["#FF6384", "#FFCE56", "#36A2EB"],
        borderWidth: 1,
      },
    ],
  };

  const riskChartOptions = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          let sum = 0;
          let dataArr = context.chart.data.datasets[0].data;
          dataArr.forEach((data) => {
            sum += Number(data);
          });
          let percentage = ((value / sum) * 100).toFixed(2) + "%";
          return percentage;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
  };

  // Dummy data for case timeline
  const dummyData = {
    hearingsCount: 12, // Example number of hearings
    timeInJail: 24, // Example time in jail in months
    originalPunishment: 36, // Example original punishment in months
  };

  // Chart data for case timeline (Bar Chart) specific to the case
  const caseTimelineData = {
    labels: ["Hearings", "Time in Jail", "Original Punishment"],
    datasets: [
      {
        label: "Case Details",
        data: [
          dummyData.hearingsCount,
          dummyData.timeInJail,
          dummyData.originalPunishment,
        ], // Dummy data
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
      },
    ],
  };

  const caseTimelineOptions = {
    plugins: {
      datalabels: {
        formatter: (value) => {
          return `${value}`;
        },
        color: "#fff",
        font: {
          weight: "bold",
          size: 14,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Timeline Aspects",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-7xl relative h-[90%] max-h-[90%] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold mb-6">{dummyCaseItem.title}</h2>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Case Details:</h4>
          <p className="text-gray-700">{dummyCaseItem.details.caseDetails}</p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Past Records:</h4>
          <p className="text-gray-700">{dummyCaseItem.details.pastRecords}</p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-2">Family Background:</h4>
          <p className="text-gray-700">
            {dummyCaseItem.details.familyBackground}
          </p>
        </div>
        <div className="mb-6 flex gap-8">
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Risk Analysis:</h4>
            <div style={{ width: "80%", height: "auto" }}>
              <Pie data={riskChartData} options={riskChartOptions} />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-semibold mb-2">Case Timeline:</h4>
            <div style={{ width: "80%", height: "auto" }}>
              <Bar data={caseTimelineData} options={caseTimelineOptions} />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-8">
          {/* Fine Calculation Box */}
          <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Fine Calculation</h4>
            <div className="flex flex-col gap-6">
              {/* Button and Amount */}
              <div>
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                  onClick={calculateFine}
                >
                  Calculate Fine
                </button>
                {isFineCalculated && (
                  <h5 className="font-semibold mt-4 text-2xl text-blue-600">
                    Total Fine: ₹{fineAmount.toLocaleString()}
                  </h5>
                )}
              </div>

              {/* Fine Breakdown and Factors */}
              {isFineCalculated && (
                <div>
                  <h6 className="font-semibold mb-2">Fine Breakdown:</h6>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      Crime Severity Fine: ₹
                      {fineBreakdown.crimeSeverity.toLocaleString()}
                    </li>
                    <li>
                      Income Based Fine: ₹
                      {fineBreakdown.incomeBased.toLocaleString()}
                    </li>
                    <li>
                      Previous Fines: ₹
                      {fineBreakdown.previousFines.toLocaleString()}
                    </li>
                  </ul>
                  <h6 className="font-semibold mt-4">
                    Fine Calculation Factors:
                  </h6>
                  <ul className="list-disc list-inside ml-4">
                    <li>
                      <strong>Base Fine:</strong> ₹{baseFine.toLocaleString()}
                    </li>
                    <li>
                      <strong>Income Based Fine:</strong> 10% of ₹
                      {dummyCaseItem.details.income.toLocaleString()} = ₹
                      {fineBreakdown.incomeBased.toLocaleString()}
                    </li>
                    <li>
                      <strong>Previous Fines:</strong> ₹
                      {previousFines.toLocaleString()}
                    </li>
                  </ul>
                  {/* Documents Used for Fine Calculation */}
                  <h6 className="font-semibold mt-4">
                    Documents Used for Fine Calculation:
                  </h6>
                  <ul className="list-disc list-inside ml-1">
                    {Object.entries({
                      IncomeTaxReturns: documentLinks.incomeTaxReturns,
                      SalarySlips: documentLinks.salarySlips,
                    }).map(([docName, url]) => (
                      <li
                        key={docName}
                        className="mb-2 flex items-center justify-between"
                      >
                        <span>{docName.replace(/([A-Z])/g, " $1").trim()}</span>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-all duration-300"
                        >
                          View File
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Surety Bonds Box */}
          <div className="flex-1 p-6 bg-gray-100 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4">Surety Bonds</h4>
            <div className="flex flex-col gap-6">
              {/* Button and Amount */}
              <div>
                <button
                  className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition-all duration-300"
                  onClick={calculateSuretyAmount}
                >
                  Calculate Surety Amount
                </button>
                {isSuretyCalculated && (
                  <h5 className="font-semibold mt-4 text-2xl text-blue-500">
                    Surety Amount: ₹{suretyAmount.toLocaleString()}
                  </h5>
                )}
              </div>

              {/* Documents Used */}
              {isSuretyCalculated && (
                <div>
                  <h6 className="font-semibold mb-2">
                    Documents Used for Surety Amount:
                  </h6>
                  <ul className="list-disc list-inside ml-4">
                    {Object.entries({
                      ProofOfIncome: documentLinks.proofOfIncome,
                      PropertyPapers: documentLinks.propertyPapers,
                      PreviousCriminalRecords:
                        documentLinks.previousCriminalRecords,
                      CharacterReferences: documentLinks.characterReferences,
                      SuretyIdentificationProof:
                        documentLinks.suretyIdentificationProof,
                    }).map(([docName, url]) => (
                      <li
                        key={docName}
                        className="mb-2 flex items-center justify-between"
                      >
                        <span>{docName.replace(/([A-Z])/g, " $1").trim()}</span>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-all duration-300"
                        >
                          View File
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Criminal Case Documents Section */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold mb-4">
            Criminal Case Documents
          </h4>
          <div className="flex-1">
            <h6 className="font-semibold mb-2">Required Documents:</h6>
            <ul className="list-disc list-inside ml-4">
              {Object.entries({
                FIRDocuments: documentLinks.firDocuments,
                PoliceReport: documentLinks.policeReport,
                CourtOrders: documentLinks.courtOrders,
                BailDocuments: documentLinks.bailDocuments,
                ChargeSheet: documentLinks.chargeSheet,
                WitnessStatements: documentLinks.witnessStatements,
              }).map(([docName, url]) => (
                <li
                  key={docName}
                  className="mb-2 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    {docName === "FIRDocuments" && (
                      <DocumentTextIcon className="w-6 h-6 text-gray-500" />
                    )}
                    {docName === "PoliceReport" && (
                      <IdentificationIcon className="w-6 h-6 text-gray-500" />
                    )}
                    {docName === "CourtOrders" && (
                      <UserCircleIcon className="w-6 h-6 text-gray-500" />
                    )}
                    {docName === "BailDocuments" && (
                      <BanknotesIcon className="w-6 h-6 text-gray-500" />
                    )}
                    {docName === "ChargeSheet" && (
                      <BriefcaseIcon className="w-6 h-6 text-gray-500" />
                    )}
                    {docName === "WitnessStatements" && (
                      <ClipboardDocumentIcon className="w-6 h-6 text-gray-500" />
                    )}
                    <span>{docName.replace(/([A-Z])/g, " $1").trim()}</span>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-all duration-300"
                  >
                    <EyeIcon className="w-4 h-4 inline" /> View File
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseDetailModal;
