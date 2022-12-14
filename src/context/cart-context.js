import { createContext, useState, useEffect } from "react";
import { get } from "request";


const addCartItem = (cartItems, productToAdd) =>
{
    //find if cartItems Contains productToAdd

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //If found , increment quantity

    if (existingCartItem)
    {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }

    // return new array modified CartItems + new cart item
    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
})

export const CartProvider = ({ children }) =>
{
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);


    const addItemToCart = (productToAdd) =>
    {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    useEffect(() =>
    {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);

    }, [cartItems]);

    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount };

    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}