import { REACT_APP_BACKEND_API } from './hooks/config.js';
import { useSyncExternalStore } from 'react';
import { productsStore } from './hooks/productStore.js'
import ProductCard from "./componants/product/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useIsAdmin} from "./hooks/isAdmin.jsx";
import MainNav from "./componants/public/Nav.jsx";
import Header from "./componants/public/Header.jsx";

function Shop() {
  const products = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getSnapshot,
  );
  const isAdmin = useIsAdmin();
  const userId = JSON.parse(localStorage.getItem("session"));

  return (
    <>
      <MainNav />
      <Header name="Shop" />
      {isAdmin ? "Add product" : ""}
      <Container className="py-5">
        <Row>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Shop
