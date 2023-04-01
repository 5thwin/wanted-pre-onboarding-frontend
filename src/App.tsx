import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignForm from './pages/SignForm';

export default function App() {
  return (
    <Router>
      <div className="container mx-auto bg-green-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signin" element={<SignForm />} />
          <Route path="signup" element={<SignForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}
