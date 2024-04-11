import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProductListContainer from "./containers/ProductListContainer";
import ProductFormContainer from "./containers/ProductFormContainer";
import Cart from "./components/Cart";

function App() {

  // const handleSubmit = (values)=>{
  //   console.log(values);
  // }
  return (
    <div className="App">
      <Router>
      <Header/>
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
            path="/cart" element={<Cart/>}
            
            />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
