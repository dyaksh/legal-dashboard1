import React, { useState } from 'react';
import './LegalAidDashboard.css';

function LegalAidDashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const clients = [
    { id: "UT-1234", name: "John Doe", age: 35, charge: "Unauthorized Access", nextHearing: "2024-10-01", progress: 65 },
    { id: "UT-5678", name: "Jane Smith", age: 28, charge: "Data Theft", nextHearing: "2024-09-15", progress: 40 },
    { id: "UT-9012", name: "Mike Johnson", age: 42, charge: "Cyberstalking", nextHearing: "2024-11-10", progress: 20 },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div>
            <h2>Welcome, Legal Aid Provider</h2>
            <p>Here you can manage your clients, case details, and upcoming hearings.</p>
            <h3>Upcoming Hearings</h3>
            {clients.map(client => (
              <div className="client-card" key={client.id}>
                <h4>{client.name}</h4>
                <p><strong>ID:</strong> {client.id}</p>
                <p><strong>Charge:</strong> {client.charge}</p>
                <p><strong>Next Hearing:</strong> {client.nextHearing}</p>
              </div>
            ))}
          </div>
        );
      case 'notifications':
        return (
          <div>
            <h2>Notifications</h2>
            <ul>
              <li>New client assigned: UT-3456</li>
              <li>Hearing rescheduled for UT-1234</li>
              <li>Document submission deadline for UT-5678 approaching</li>
            </ul>
          </div>
        );
      case 'clients':
        return (
          <div>
            <h2>Clients</h2>
            {clients.map(client => (
              <div className="client-card" key={client.id}>
                <h4>{client.name} (ID: {client.id})</h4>
                <p><strong>Age:</strong> {client.age}</p>
                <p><strong>Charge:</strong> {client.charge}</p>
                <p><strong>Next Hearing:</strong> {client.nextHearing}</p>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${client.progress}%` }}></div>
                </div>
                <p>Case Progress: {client.progress}%</p>
              </div>
            ))}
          </div>
        );
      case 'calendar':
        return (
          <div>
            <h2>Upcoming Schedule</h2>
            {clients.map(client => (
              <div className="client-card" key={client.id}>
                <h4>{client.name} (ID: {client.id})</h4>
                <p><strong>Event:</strong> Court Hearing</p>
                <p><strong>Date:</strong> {client.nextHearing}</p>
                <p><strong>Location:</strong> Underrail District Court, Room 305</p>
              </div>
            ))}
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
          Home
        </button>
        <button className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>
          Notifications
        </button>
        <button className={activeTab === 'clients' ? 'active' : ''} onClick={() => setActiveTab('clients')}>
          Clients
        </button>
        <button className={activeTab === 'calendar' ? 'active' : ''} onClick={() => setActiveTab('calendar')}>
          Calendar
        </button>
      </nav>

      <main className="main-content">
        {renderTabContent()}
      </main>
    </div>
  );
}

export default LegalAidDashboard;
