import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Overview from './components/Dashboard/overview.jsx'
import Profiles from './components/Dashboard/profiles.jsx'
import Scheduling from './components/Dashboard/scheduling.jsx'
import Adjustments from './components/Dashboard/adjustments.jsx'
import Notifications from './components/Dashboard/notifications.jsx'
import Compliances from './components/Dashboard/compliances.jsx'
import Reports from './components/Dashboard/reports.jsx'

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/adjustments" element={<Adjustments />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/compliances" element={<Compliances />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
