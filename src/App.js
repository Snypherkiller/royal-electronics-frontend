/*import React from 'react';
import './App.css';
import Header from './components/Header';
import AddEmployee from './components/AddEmployee';
import AllEmployees from './components/AllEmployees';
import EditEmployee from './components/EditEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import EmployeeDetail from './components/EmployeeDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path="/employee/add" element={<AddEmployee />} />
          <Route path="/employee/update/:id" element={<EditEmployee />} />
          <Route path="/employee/delete/:id" element={<DeleteEmployee />} />
          <Route path="/employee/fetch/:id" element={<EmployeeDetail />} />
          <Route path="/employee" element={<AllEmployees />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;*/


import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'

function App() {

  return (
    <>
      <Navbar/>

      <div className='min-h-screen'>
      <Outlet/>
      </div>
      <MyFooter/>
     
    </>
  )
}

export default App

