
import './App.css';
import Header from "./components/Layout/Header";
import Product from "./components/Products/Product";
import Cart from './components/Layout/Cart';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Layout/Home';
import Modal from './components/Layout/CartModal';

function App() {
  // const [showCart, setShowCart] = useState(false);
  // const ShowCartHandler = ()=> {
  //   setShowCart(true);
  // }
  // const HideCartHandler = ()=>{
  //   setShowCart(false);
  // }
  return (
   <div>
      <Modal />
      <Header  />
      
      <Product />
    </div>
  );
}

export default App;
