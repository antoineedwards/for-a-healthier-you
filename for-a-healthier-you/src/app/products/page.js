'use client';

import React from 'react';
import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function ProductsPage() {
  const productList = Products;

  return (
    <Container sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {productList.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.name}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
