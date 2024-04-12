import "./App.css";
import HeaderContainer from "./containers/HeaderContainer";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListContainer from "./containers/ProductListContainer";
import ProductFormContainer from "./containers/ProductFormContainer";
import CartContainer from "./containers/CartContainer";

function App() {

  // const handleSubmit = (values)=>{
  //   console.log(values);
  // }
  return (
    <div className="App">
      <Router>
      <HeaderContainer/>
      <Routes>
          <Route
            path="/" 
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
