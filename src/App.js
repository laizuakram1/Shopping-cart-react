import Header from './components/header/Header';
import './App.css';
import Shop from './components/header/Shop/Shop';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import About from './components/About/About';
import Orders from './components/Orders/Orders';

function App() {
  return (
    <div>
     <Header></Header>
    
     <Routes>
       <Route path='/shop' element={<Shop></Shop>}></Route>
       <Route path='/orders' element={<Orders></Orders>}></Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/signup' element={<SignUp></SignUp>}></Route>
       
     </Routes>
    </div>
  );
}

export default App;
