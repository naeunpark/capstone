import { useSyncExternalStore } from 'react';
import { productsStore } from './hooks/productStore.js'
import ProductCard from './componants/product/ProductCard';
import Header from './componants/public/Header.jsx'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import chair from './assets/chair.png';
import dinning from './assets/dinning.jpg'
import Image from 'react-bootstrap/Image';
import DrawerChair from './assets/drawer-chair.jpg';
import living from './assets/livingroom-white-sofas.jpg'
import { Link } from 'react-router-dom';

function Home() {

  const products = useSyncExternalStore(productsStore.subscribe, productsStore.getSnapshot)
  const limitedProducts = products.slice(0,8);
  return (
    <>
    <Header />
      <img
        src={chair}
        className="w-100"
      />
      <Container>
      <Row>
        <Col className="text-center mt-5 mb-3">
          <h2>Browse the Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Col>
      </Row>
      <Container fluid>
      <Row className="text-center" >
        <Col xs={12} md={4}>
          <Link to="/shop?category=diningroom">
          <Image className="w-100" src={dinning} rounded />
          <h3>Dining Room</h3>
          </Link>
        </Col>
        <Col xs={12} md={4}>
        <Link to="/shop?category=bedroom">
          <Image className="w-100" src={DrawerChair} rounded />
          <h3>Bed Room</h3>
          </Link>
        </Col>
        <Col xs={12} md={4}>
          <Link to="/shop?category=livingroom">
          <Image className="w-100" src={living} rounded />
          <h3>Living Room</h3>
          </Link>
        </Col>
      </Row>
      </Container>
    </Container>
      
    <Container>
<Row>
        <Col className="text-center mt-5 mb-3">
          <h2>Our Products</h2>
        </Col>
      </Row>
      <Row>
      {limitedProducts.map(product=>(
            <ProductCard key={product.id} product={product}/>
          ))}
      </Row>
    </Container>

    </>
  )
}

export default Home
