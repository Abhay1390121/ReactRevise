import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListContainer from "./containers/ProductListContainer";
import ProductFormContainer from "./containers/ProductFormContainer";
import CartContainer from "./containers/CartContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {

  // const handleSubmit = (values)=>{
  //   console.log(values);
  // }
  return (
    <div className="App">
      <Router>
      <ToastContainer/>
        <HeaderContainer/>
        <Routes>
            <Route
              path="/" 
              element={ <ProductFormContainer />}
              />
            <Route
              path="/editProduct/:id" 
              element={ <ProductFormContainer />}
              />
            <Route
              path="/product-list" 
              element={<ProductListContainer />}
              />
            <Route
              path="/cart" element={<CartContainer/>}
              />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
