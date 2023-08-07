import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Listing from './pages/Listing';
import Profile from './pages/Profile';
import { useState } from 'react';

function App() {
  const [results, setResults] = useState([]);
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="App">
      <header className="App-header">
       <Routes>
        <Route path='/' element={<Listing results = {results} setResults={setResults} inputValue={inputValue} setInputValue={setInputValue} />}></Route>
        <Route path='/profile/:profile_id' element={<Profile results = {results} setResults={setResults}/>}></Route>
       </Routes>
      </header>
    </div>
  );
}

export default App;
