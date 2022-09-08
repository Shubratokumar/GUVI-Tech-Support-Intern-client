import { Route, Routes } from "react-router";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import UpdateProfile from './components/UpdateProfile';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/updateProfile" element={<UpdateProfile />} />
    </Routes>
  );
}

export default App;
