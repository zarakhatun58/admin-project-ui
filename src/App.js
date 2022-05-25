import './App.css';
import Members from './Component/Members';
import Home from './Component/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Member from './Component/Member';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/member" element={<Member />} />
        </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
