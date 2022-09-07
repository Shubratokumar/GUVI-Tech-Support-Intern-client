import { Route, Routes, Navigate } from "react-router";
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='/profile'/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
