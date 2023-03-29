import './App.css';
import { Routes, Route } from "react-router-dom"
import Main from './views/Main';
import ForSale from './views/ForSale';
import ForRent from './views/ForRent';
import Compare from './views/Compare';
import Credential from './views/Credential';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/for-rent" element={<ForRent />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/credential" element={<Credential />} />
      </Routes>
    </div>
  );
}

export default App;
