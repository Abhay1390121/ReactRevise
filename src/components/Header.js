import {NavLink} from "react-router-dom";
const Header = () =>{
    return(
        <div className="nav">
            <div className="App-header">
                <NavLink to="/">Home</NavLink>
                <NavLink to ="/product-list">Product</NavLink>
                <NavLink to= "/cart">Cart</NavLink> 
            </div>
        </div>
    )
}
export default Header;