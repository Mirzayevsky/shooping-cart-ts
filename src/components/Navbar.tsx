import React from 'react';
import {Container,Navbar as NavbarBs,Nav} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import cartIcon  from "../assets/icons/02.png"
import {useShoppingCart} from "../context/shoppingCartContext";

const Navbar = () => {
    const {cartQuantity,openCart} = useShoppingCart()
    return (
        <NavbarBs sticky={"top"} className={"bg-white shadow-sm mb-3"}>
            <Container>
                <Nav className={"me-auto"}>
                    <Nav.Link to={"/"} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={"/store"} as={NavLink}>Store</Nav.Link>
                    <Nav.Link to={"/about"} as={NavLink}>About</Nav.Link>
                </Nav>
                <div onClick={openCart}>
                    <img className={'bg-primary p-2'} src={cartIcon} alt={cartIcon}/>
                    {cartQuantity}
                </div>
            </Container>
        </NavbarBs>
    );
};

export default Navbar;