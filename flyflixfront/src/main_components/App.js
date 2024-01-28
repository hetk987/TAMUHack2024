//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import HomePage from '../Pages/HomePage'
import Layout from './Layout';
import SearchPage from '../Pages/SearchPage';
import LoginPage from '../Pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/find-your-location" element={<SearchPage/>}/> 
        <Route path="/login" element={<LoginPage/>}/> 
      </Route>
    </Routes>
  );
}

export default App;
