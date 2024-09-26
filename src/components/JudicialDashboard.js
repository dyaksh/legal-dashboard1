import React, { useState } from 'react';
import './JudicialDashboard.css';

function JudicialDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPrisoners, setFilteredPrisoners] = useState([]);

  // Dummy prisoner data
  const prisoners = [
    { id: "UT-1234", name: "John Doe", age: 35, charge: "Unauthorized Access", nextHearing: "2024-10-01", progress: 65 },
    { id: "UT-5678", name: "Jane Smith", age: 28, charge: "Data Theft", nextHearing: "2024-09-15", progress: 40 },
    { id: "UT-9012", name: "Mike Johnson", age: 42, charge: "Cyberstalking", nextHearing: "2024-11-10", progress: 20 },
  ];

  // Tab switching logic
  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h2>Welcome, Your Honor</h2>
            <p>Here you can review case details, make decisions on undertrial prisoners, and manage your caseload.</p>
            <h3>Upcoming Hearings</h3>
            {prisoners.map(prisoner => (
              <div className="prisoner-card" key={prisoner.id}>
                <h4>{prisoner.name}</h4>
                <p><strong>ID:</strong> {prisoner.id}</p>
                <p><strong>Charge:</strong> {prisoner.charge}</p>
                <p><strong>Next Hearing:</strong> {prisoner.nextHearing}</p>
              </div>
            ))}
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2>Notifications</h2>
            <ul>
              <li>New case assigned: UT-3456</li>
              <li>Hearing rescheduled for UT-1234</li>
              <li>Bail application received for UT-5678</li>
            </ul>
          </div>
        );
      case 'caseload':
        return (
          <div>
            <h2>Current Caseload</h2>
            <p><strong>Total Active Cases:</strong> 25</p>
            <p><strong>Hearings This Week:</strong> 8</p>
            <p><strong>Pending Judgments:</strong> 3</p>
            <p><strong>Recent Dispositions:</strong> 5</p>
          </div>
        );
      case 'caseDetails':
        return (
          <div>
            <h2>Case Details: UT-1234</h2>
            <p><strong>Prisoner Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 35</p>
            <p><strong>Charge:</strong> Unauthorized Access</p>
            <p><strong>Next Hearing:</strong> 2024-10-01</p>
            <h3>Case Progress</h3>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '65%' }}></div>
            </div>
            <p>65% Complete</p>
          </div>
        );
      case 'decisions':
        return (
          <div>
            <h2>Pending Decisions</h2>
            {prisoners.map(prisoner => (
              <div className="prisoner-card" key={prisoner.id}>
                <h4>{prisoner.name}</h4>
                <p><strong>ID:</strong> {prisoner.id}</p>
                <p><strong>Charge:</strong> {prisoner.charge}</p>
                <p><strong>Next Hearing:</strong> {prisoner.nextHearing}</p>
                <button>Grant Bail</button>
                <button>Deny Bail</button>
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  // Prisoner search functionality
  const handleSearch = () => {
    const results = prisoners.filter(prisoner =>
      prisoner.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPrisoners(results);
  };

  return (
    <div className="dashboard">
      {/* Side Navbar */}
      <nav className="sidebar">
        <h1>Judicial Dashboard</h1>
        <button className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</button>
        <button className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>Notifications</button>
        <button className={activeTab === 'caseload' ? 'active' : ''} onClick={() => setActiveTab('caseload')}>Caseload</button>
        <button className={activeTab === 'caseDetails' ? 'active' : ''} onClick={() => setActiveTab('caseDetails')}>Case Details</button>
        <button className={activeTab === 'decisions' ? 'active' : ''} onClick={() => setActiveTab('decisions')}>Decisions</button>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search prisoners..."
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="main-content">
        {/* Render Tab Content */}
        {renderTabContent()}

        {/* If there are search results, show them */}
        {filteredPrisoners.length > 0 && (
          <div>
            <h3>Search Results</h3>
            {filteredPrisoners.map(prisoner => (
              <div className="prisoner-card" key={prisoner.id}>
                <h4>{prisoner.name}</h4>
                <p><strong>ID:</strong> {prisoner.id}</p>
                <p><strong>Charge:</strong> {prisoner.charge}</p>
                <p><strong>Next Hearing:</strong> {prisoner.nextHearing}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default JudicialDashboard;
