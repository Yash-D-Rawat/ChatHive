import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from './pages/Signup';
import Login from "./pages/Login";
import Home from "./pages/Home";


function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/api/auth/signup" element={<Signup />} />
        <Route path="/api/auth/login" element={<Login />} />
        <Route path="/chats" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
