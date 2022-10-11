import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Home from './Home';
import Contact from "./Contact"
import Experience from "./Experience"

function App() {
  return (
    <div className="App">
      
<BrowserRouter>
        <Routes>
         
            
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Experience" element={<Experience />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
