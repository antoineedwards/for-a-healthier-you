'use client';

import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box textAlign="center">
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome To A Healthier You
        </Typography>

        <Typography variant="h6" color="text.secondary" paragraph>
          Discover our all-natural products and services to help you live a healthier, more balanced life.
        </Typography>

        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            href="/products"
            sx={{ mr: 2 }}
          >
            View Products
          </Button>

          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            href="/services"
          >
            Our Services
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
