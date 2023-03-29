import './App.css';
import { Routes, Route } from "react-router-dom"
import Main from './views/Main';
import Categories from './views/Categories';
import Compare from './views/Compare';
import Credential from './views/Credential';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/credential" element={<Credential />} />
      </Routes>
    </div>
  );
}

export default App;
