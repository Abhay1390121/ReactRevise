import {NavLink} from "react-router-dom";
const Header = (props) =>{
    const{products, cartItems} = props
    return(
        <div className="nav">
            <div className="App-header">
                <NavLink to="/">Home</NavLink>
                <NavLink to ="/product-list">Product({products.length})</NavLink>
                <NavLink to= "/cart">Cart({cartItems.length})</NavLink> 
            </div>
        </div>
    )
}
export default Header;