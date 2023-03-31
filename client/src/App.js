import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import Main from './views/Main';
import Categories from './views/Categories';
import DetailPage from "./views/DetailPage";
import Favorite from './views/Favorite';
import Credential from './views/Credential';

function App() {
  const [favoriteList, setFavoriteList] = useState()

  const getFavs = (favs) => {
    setFavoriteList(favs)
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/categories" element={<Categories getFavs={getFavs} />} />
        <Route path="/:id" element={<DetailPage />} />
        <Route path="/favorite" element={<Favorite favoriteList={favoriteList} />} />
        <Route path="/credential" element={<Credential />} />
      </Routes>
    </div>
  );
}

export default App;
