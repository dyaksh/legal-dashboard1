import React, { useState } from 'react';
import './UndertrialPrisonerDashboard.css';

function UndertrialPrisonerDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const legalAidProviders = [
    { name: "Jane Doe", specialization: "Criminal Law", experience: 15, contact: "jane@example.com" },
    { name: "John Smith", specialization: "Human Rights", experience: 10, contact: "john@example.com" },
    { name: "Alice Johnson", specialization: "Cybercrime", experience: 8, contact: "alice@example.com" },
  ];

  const prisonerProfile = {
    id: "UT-1234",
    name: "John Doe",
    age: 35,
    sentence: "10 years",
    charge: "Unauthorized Access",
    arrestDate: "2024-01-15",
    nextHearing: "2024-10-01",
    caseNumber: "CR-2024-001",
    judge: "Hon. Sarah Johnson",
    prosecutor: "Mark Williams",
    defenseAttorney: "Lisa Brown",
    progress: 65
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h2>Welcome to the Underrail Prisoner Dashboard</h2>
            <p>Here you can manage prisoner information, case details, and access legal aid resources.</p>

            <h3>Available Legal Aid Providers</h3>
            <div className="grid">
              {legalAidProviders.map(provider => (
                <div className="card" key={provider.name}>
                  <h4 className="font-bold">{provider.name}</h4>
                  <p><strong>Specialization:</strong> {provider.specialization}</p>
                  <p><strong>Experience:</strong> {provider.experience} years</p>
                  <p><strong>Contact:</strong> {provider.contact}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2>Notifications</h2>
            <ul>
              <li>New case document uploaded</li>
              <li>Hearing date changed to next week</li>
              <li>Legal aid provider assigned</li>
            </ul>
          </div>
        );
      case 'profile':
        return (
          <div>
            <h2>Prisoner Profile</h2>
            <p><strong>Name:</strong> {prisonerProfile.name}</p>
            <p><strong>ID:</strong> {prisonerProfile.id}</p>
            <p><strong>Age:</strong> {prisonerProfile.age}</p>
            <p><strong>Sentence:</strong> {prisonerProfile.sentence}</p>
          </div>
        );
      case 'caseDetails':
        return (
          <div>
            <h2>Case Details</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <p><strong>Case Number:</strong> {prisonerProfile.caseNumber}</p>
                <p><strong>Charge:</strong> {prisonerProfile.charge}</p>
                <p><strong>Arrest Date:</strong> {prisonerProfile.arrestDate}</p>
                <p><strong>Next Hearing:</strong> {prisonerProfile.nextHearing}</p>
              </div>
              <div>
                <p><strong>Judge:</strong> {prisonerProfile.judge}</p>
                <p><strong>Prosecutor:</strong> {prisonerProfile.prosecutor}</p>
                <p><strong>Defense Attorney:</strong> {prisonerProfile.defenseAttorney}</p>
              </div>
            </div>
            <h3>Case Progress</h3>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${prisonerProfile.progress}%` }}></div>
            </div>
            <p>{prisonerProfile.progress}% Complete</p>
          </div>
        );
      case 'legalAid':
        return (
          <div>
            <h2>Legal Aid Providers</h2>
            <div className="grid">
              {legalAidProviders.map(provider => (
                <div className="card" key={provider.name}>
                  <h4 className="font-bold">{provider.name}</h4>
                  <p><strong>Specialization:</strong> {provider.specialization}</p>
                  <p><strong>Experience:</strong> {provider.experience} years</p>
                  <p><strong>Contact:</strong> {provider.contact}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <nav className="sidebar">
        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>
          <i className="fas fa-home"></i> Home
        </button>
        <button className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>
          <i className="fas fa-bell"></i> Notifications
        </button>
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
          <i className="fas fa-user"></i> Profile
        </button>
        <button className={activeTab === 'caseDetails' ? 'active' : ''} onClick={() => setActiveTab('caseDetails')}>
          <i className="fas fa-file-alt"></i> Case Details
        </button>
        <button className={activeTab === 'legalAid' ? 'active' : ''} onClick={() => setActiveTab('legalAid')}>
          <i className="fas fa-search"></i> Legal Aid
        </button>
      </nav>

      <main className="main-content">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default UndertrialPrisonerDashboard;
