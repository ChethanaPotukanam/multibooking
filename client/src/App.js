import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/login" element = {<Login />} />
          <Route path="/signup" element = {<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
