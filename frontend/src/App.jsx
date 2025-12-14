import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './components/Auth'
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
     <Routes>
      <Route path="/" element={<Auth/>} />
      <Route element={<ProtectedRoute/>}>
      <Route path="/dashboard" element={<Dashboard/>} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
     </Routes>
  )
}

export default App
