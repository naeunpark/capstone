import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { Col } from 'react-bootstrap';

export default function ProductCard(props) {
  return (
    <Col
      sx={12}
      md={4}
      lg={3}
      className="mb-4"
    >
      <Link href={`/shop/${props.product.id}`}>
        <Card>
          <CardMedia
            component="img"
            alt={props.product.name}
            height="140"
            image=""
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
            >
              $ {props.product.price}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              {props.product.shortDescription}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Col>
  );
}