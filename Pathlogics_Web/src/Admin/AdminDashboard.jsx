import React from 'react'
// import AdminLogin from '../Login/StudentLogin/AdminLogin'
// import Admin from "./Admin"
import AdminNavbar from "./Adminnav"
import Studentinfo from './Studentinfo';
import DashboardComponent from './DashboardComponent';

function AdminDashboard() {
  return (
    <>
    <AdminNavbar/>
    <DashboardComponent/>
    {/* <Studentinfo/> */}
    </>
  )
}

export default AdminDashboard
