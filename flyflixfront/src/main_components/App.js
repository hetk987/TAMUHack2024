//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState, useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import HomePage from '../Pages/HomePage'
import Layout from './Layout';
import SearchPage from '../Pages/SearchPage';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import ResultsPage from '../Pages/ResultsPage';
import FlightsPage from '../Pages/FlightsPage';


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/trips" element={<SearchPage />}/> 
        <Route path="/results" element={<ResultsPage />}/>
        <Route path="/login" element={<LoginPage/>}/> 
        <Route path="/signup" element={<SignUpPage/>}/> 
        <Route path="/tickets" element={<FlightsPage/>}/> 
      </Route>
    </Routes>
  );
}

export default App;
