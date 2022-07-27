import './App.css';
import { Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Header from './components/Header';
import ProductListing from './components/ProductListing';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
         <Route path='/' element={<Home />}/>
         <Route path='/addUser' element={<AddUser />}/>
         <Route path='/editUser/:id' element={<EditUser />}/>
         <Route exact path='/productList' element={<ProductListing />}/>
         <Route path='/product/:productId' element={<ProductDetails />}/>
         <Route>404 Not Found!</Route>
      </Routes>
    </div>
  );
}

export default App;
