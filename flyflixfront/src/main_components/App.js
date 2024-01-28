//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Layout from './Layout';
import HomePage from '../Pages/HomePage';
import SearchPage from '../Pages/SearchPage';
import ResultsPage from '../Pages/ResultsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/trips" element={<SearchPage/>}/>
        <Route path="/results" element={<ResultsPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
