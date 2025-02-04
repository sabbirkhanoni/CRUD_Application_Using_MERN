
import './App.css';

//components
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Home from './components/Home';
import EditUser from './components/EditUser';

//routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path= '/add' element={<AddUser />}/>
         <Route path='/all' element={<AllUser />}/>
         <Route path='/edit/:id' element={<EditUser />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
