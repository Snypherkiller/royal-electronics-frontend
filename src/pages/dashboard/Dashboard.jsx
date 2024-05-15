import React from 'react';
import './dashboard.css';

const Dashboard = ({ isAdmin }) => {
  return (
    <div className="dashboard-container">
      {/* Dashboard Items */}
      <div className="dashboard-item">
        <img src="https://via.placeholder.com/150" alt="Dashboard Item" className="dashboard-image" />
        <div className="dashboard-text">
          <h3 className="dashboard-title">Item 1</h3>
          <p className="dashboard-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div className="dashboard-item">
        <img src="https://via.placeholder.com/150" alt="Dashboard Item" className="dashboard-image" />
        <div className="dashboard-text">
          <h3 className="dashboard-title">Item 2</h3>
          <p className="dashboard-description">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
      <div className="dashboard-item">
        <img src="https://via.placeholder.com/150" alt="Dashboard Item" className="dashboard-image" />
        <div className="dashboard-text">
          <h3 className="dashboard-title">Item 3</h3>
          <p className="dashboard-description">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>

      {/* Admin Instructions */}
      {isAdmin && (
        <div className="admin-instructions">
          <h3 className="admin-title">Admin Instructions</h3>
          <ul className="admin-list">
            <li>Add new items: Click on the '+' button.</li>
            <li>Add new suppliers: Navigate to the Suppliers tab and click on 'Add Supplier'.</li>
            {/* Add more instructions as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
