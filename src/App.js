import Staff from './Components/Staff/Staff';
import './App.css';
import StaffCreate from './Components/StaffCreate/StaffCreate';
import StaffSingle from './Components/StaffSingle/StaffSingle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StaffEdit from './Components/StaffEdit/StaffEdit';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Staff></Staff> } />
          <Route path='/staff/:id' element={ <StaffSingle></StaffSingle> } />
          <Route path='/staff/single' element={ <StaffCreate></StaffCreate> } />
          <Route path='/staff/edit/:id' element={ <StaffEdit></StaffEdit> } />
        </Routes>
      </BrowserRouter>
      
      
      
    </>
  );
}

export default App;
