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
<<<<<<< HEAD
        <Route path="/" element={<Homepage/>}/>
=======
        <Route path="/Homepage" element={<Homepage/>}/>
>>>>>>> 999c7a70c5cb79c41603b7e2679ffbfb3f2a7927
       </Routes>
     </Router>
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> 999c7a70c5cb79c41603b7e2679ffbfb3f2a7927
