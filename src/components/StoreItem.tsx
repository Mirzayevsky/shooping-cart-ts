import React from "react";
import {Card,Button} from "react-bootstrap";
import { currencyFormatter }from "../utilities/currencyFormatter"
import {useShoppingCart} from "../context/shoppingCartContext";
type StoreItemProps = {
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

const StoreItem = ({id,name,price,imgUrl}:StoreItemProps) => {
    const {increaseCartQuantity,decreaseCartQuantity,removeFromCart,getItemQuantity} = useShoppingCart()
    const quantity = getItemQuantity(id);

return(
    <Card className={"h-100"}>
        <Card.Img variant={"top"} src={imgUrl} height={"200px"} style={
            {objectFit:"cover"}
        } />
        <Card.Body
            className={"" + "d-flex flex-column " +
        "justify-content-space-between " +
        "align-items-baseline mb-4"}>
            <span className={"fs-2"}>{name}</span>
            <span className={"fs-2 text-muted"}>{currencyFormatter(price)}</span>
            <div className={"m-auto"}>
                {quantity === 0 ? (
                    <Button className={"w-100"} onClick={()=> increaseCartQuantity(id)}>+ Add to Cart</Button>
                ):<div className={'d-flex align-items-center flex-column'}  style={{gap:".5rem"}}>
                    <div className={'d-flex align-items-center justify-content-center'}  style={{gap:".5rem"}}>
                        <Button onClick={()=> decreaseCartQuantity(id)}>-</Button>
                        <div>
                            <span className={'fs-3'}>{quantity} in cart</span>
                        </div>
                        <Button onClick={()=> increaseCartQuantity(id)}>+</Button>
                    </div>
                    <Button variant={"danger"} size={'sm'} onClick={()=> removeFromCart(id)}>remove</Button>
                </div>}
            </div>
        </Card.Body>
    </Card>
)
}
export default StoreItem