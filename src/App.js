import { Route, Routes } from "react-router";
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
