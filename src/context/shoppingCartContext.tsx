import React, {createContext, ReactNode, useContext, useState} from "react";

type ShoppingCartProviderProps ={
    children:ReactNode
}

type CartItem = {
    id:number,
    quantity:number
}

type ShoppingCartContext = {
    openCart:() => void,
    closeCart:() => void,
    getItemQuantity:(id:number) => number,
    increaseCartQuantity:(id:number) => void,
    decreaseCartQuantity:(id:number) => void,
    removeFromCart:(id:number) => void,
    cartQuantity:number,
    cartItems:CartItem[]
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
    const [isOpen,setOpen] = useState(false)
    const [cartItems,setCartItems] = useState<CartItem[]>([])
    const cartQuantity = cartItems.reduce((quantity,item)=>item.quantity + quantity,0)

    const cartOpen = ( ) => setOpen(true)
    const cartClose = () => setOpen(false)
    const  getItemQuantity = (id:number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    const increaseCartQuantity = (id:number) => {

    setCartItems(currentItems => {

    if(currentItems.find(item => item.id === id) == null) {

        return [...currentItems,{id,quantity:1}]

    } else {
        return cartItems.map( item => {

            if (item.id === id) {
                return {...item, quantity:item.quantity + 1}
            } else {
                return  item
            }

        })
    }

    })
    }
    const decreaseCartQuantity = (id:number) => {
        setCartItems(currentItems => {

            if(currentItems.find(item => item.id === id)?.quantity === 1) {
                return cartItems.filter(item => item.id !== id)

            } else {
                return cartItems.map( item => {

                    if (item.id === id) {
                        return {...item, quantity:item.quantity - 1}
                    } else {
                        return  item
                    }

                })
            }

        })
    }
    const removeFromCart = ( id:number) => {
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    return(
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            closeCart,
            openCart,
            cartItems,
            cartQuantity,
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )

}