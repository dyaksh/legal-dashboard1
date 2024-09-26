import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SigninPage from './components/SigninPage';
import JudicialDashboard from './components/JudicialDashboard';
import LegalAidDashboard from './components/LegalAidDashboard';
import UndertrialPrisonerDashboard from './components/UndertrialPrisonerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/judicial-dashboard" element={<JudicialDashboard />} />
        <Route path="/legal-aid-dashboard" element={<LegalAidDashboard />} />
        <Route path="/prisoner-dashboard" element={<UndertrialPrisonerDashboard />} />
        <Route path="/" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}

export default App;
