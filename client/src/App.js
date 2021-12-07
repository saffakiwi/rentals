import logo from './logo.svg';
import './App.css';
import Rentals from './pages/Rentals';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import Droppin from './pages/Droppin';

function App() {
  return (
    <div className="App">
     {/*<Rentals />*/}
     <Router>
       <Routes>
        <Route path="/Droppin" element={<Droppin/>}/>
        <Route path="/Homepage" element={<Homepage/>}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
