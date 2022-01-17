import { Route , Routes} from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Applied from './components/Applied';
import DashBoard from './components/DashBoard';
import Login from './components/Login';
import PrivateRoutes from './PrivateRoutes';

function App() {
  return (
    <div className="App">
    

    <Routes>
      <Route path="/login"  element={<Login />}></Route>
      <Route path="/admin" element={
      <PrivateRoutes>

        <Admin />
      </PrivateRoutes>
      }></Route>
      <Route path="/" element={
      
      <DashBoard />
      
      }></Route>
      <Route path="/applied" element={<Applied />}>

      </Route>
    </Routes>



    </div>
  );
}

export default App;