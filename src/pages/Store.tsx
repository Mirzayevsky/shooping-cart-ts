import React from "react";
import StoreItems from "../data/items.json";
import StoreItem from "../components/StoreItem"
import {Row,Col} from "react-bootstrap";

const Store:React.FC = () => {
return (
    <>
        <h1>Store</h1>
        <Row md={3} xs={1} lg={3} className={"g-3"}>
            {StoreItems.map((item)=> (
                <Col>
                    <StoreItem {...item}/>
                </Col>
            ))}
        </Row>
    </>
)
}
export default Store;