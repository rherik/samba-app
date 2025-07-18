import './App.css'
import MyNavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Trivia from './components/Trivia'
import RegistrationForm from './components/RegistrationForm';

export default function App() {

  return (
    <div className="bg-[#FBFBF9] h-full">

    <Router>
      <MyNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/form" element={<RegistrationForm />} />
      </Routes>
    </Router>

    </div>
  )
}
