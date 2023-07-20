import { REACT_APP_BACKEND_API } from './hooks/config.js';
import {useEffect, useState, useSyncExternalStore} from "react";
import {Link} from "react-router-dom";
import {productsStore} from "./hooks/productStore.js";
import ProductCard from "./componants/product/ProductCard";
import {Col, Container, Row} from "react-bootstrap";
import {useIsAdmin} from "./hooks/isAdmin.jsx";
import MainNav from "./componants/public/Nav.jsx";
import Header from "./componants/public/Header.jsx";
import {useSearchParams} from "react-router-dom";

function Shop() {
  const products = useSyncExternalStore(
    productsStore.subscribe,
    productsStore.getSnapshot,
  );
  const isAdmin = useIsAdmin();
  const [searchParams] = useSearchParams();
  const [filteredProduct, setFilteredProdcut] = useState([]);
  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      const newArray = products.filter(
        (product) => product.category.name === category,
      );
      setFilteredProdcut(newArray);
    }
  }, [category]);

  return (
    <>
      <MainNav />
      <Header name="Shop" />
      {isAdmin ? "Add product" : ""}
      <Container className="py-5">
        <Row>
          <Col className="text-center pb-5">
            <Link
              to="/shop?category=Diningroom"
              className="p-3"
            >
              <span>Dining Room</span>
            </Link>
            <Link
              to="/shop?category=Bedroom"
              className="p-3"
            >
              <span>Bed Room</span>
            </Link>
            <Link
              to="/shop?category=Livingroom"
              className="p-3"
            >
              <span>Living Room</span>
            </Link>
          </Col>
        </Row>
        <Row>
          {category
            ? filteredProduct.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))
            : products.map((product) => (
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
