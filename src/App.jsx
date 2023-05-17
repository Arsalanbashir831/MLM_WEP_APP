
import Login from "./page/Login"
import Landing from "./page/Landing"
import Register from "./page/Register"
import SuperAdminDashboard from "./page/SuperAdminDashboard"
import CompanyDashboard from "./page/CompanyDashboard"
import UserAdmin from "./page/UserDashboard"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Landing/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/Admin" element={<SuperAdminDashboard/>}></Route>
      <Route path="/Company" element={<CompanyDashboard/>}></Route>
      <Route path="/User" element={<UserAdmin/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
    </Routes>
    </>
  )
}


export default App
