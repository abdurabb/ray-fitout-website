import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './layout/Main'

// pages
import Home from './pages/home/Home'



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
