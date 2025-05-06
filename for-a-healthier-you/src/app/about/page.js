'use client';

import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 8 }}>
      <Box>
        <Typography variant="h4" component="h1" gutterBottom>
          About For A Healthier You
        </Typography>

        <Typography variant="body1" paragraph>
          At For A Healthier You, we believe in the power of natural remedies and holistic wellness. Our mission is to provide high-quality, natural products and personalized services that support your journey to better health.
        </Typography>

        <Typography variant="body1" paragraph>
          Founded by a team passionate about herbal remedies and sustainable living, our business combines traditional healing knowledge with modern research to offer solutions that are both effective and safe.
        </Typography>

        <Typography variant="body1" paragraph>
          Whether you're looking for herbal teas, essential oils, or wellness consultations, we're here to help you feel your best—naturally.
        </Typography>
      </Box>
    </Container>
  );
}
