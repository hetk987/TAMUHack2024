//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={HomePage}/>
      </Route>
    </Routes>
  );
}

export default App;
