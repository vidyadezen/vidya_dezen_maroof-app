"use client"; 

import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const explore = [
  {
    id: 1,
    title: "Overview of Car Engines by Cylinder Configuration",
    desc: "Car engines are the heart of any vehicle, powering every journey, from daily commutes to cross-country road trips. These complex machines have evolved dramatically since the inception of the automobile, becoming more efficient, powerful, and diverse. Understanding the different types of car engines is not just a matter of technical curiosity but a window into how they shape vehicle design, performance, and the driving experience.",
    path: "/images/cylinder-1.svg",
    alt: "sample"
  },
  {
    id: 2,
    title: "Unveiling the Secrets of Your Car's Exhaust System: Discover How It Really Works",
    desc: "The exhaust system of a car is a critical component in its overall performance and environmental impact. Designed to guide exhaust gases away from a controlled combustion inside the engine, it plays a crucial role in ensuring the vehicle runs smoothly and efficiently. This system not only helps in reducing noise but also minimizes the impact of emissions on the environment. Understanding the exhaust system is key for anyone interested in the performance and maintenance of their vehicle, whether they are general drivers or car enthusiasts.",
    path: "/images/cylinder-2.svg",
    alt: "sample"
  },
  {
    id: 3,
    title: "Investment or Loss: a Guide to Buying a Car in India",
    desc: "The Indian automotive market, diverse and rapidly evolving, presents unique opportunities for individuals considering buying a new car not just as a mode of transport, but as an investment. This article delves into the nuances of investing in cars in India, offering insights for potential car owners on navigating the complexities of this vibrant market.",
    path: "/images/yellow-car-buy.svg",
    alt: "sample"
  },
];

const ExploreSection = () => {
  return (
    
    <Container maxWidth="lg"  sx={{ padding: 2 , mt:4}} marginTop={5} marginBottom={5}>
      <Stack spacing={2} sx={{ mb: 4 }}  textAlign={'center'}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Stay Informed with Expert Insights
        </Typography>
        <Typography variant="h7">
          Explore our latest articles and reviews for in-depth knowledge on auto parts, maintenance tips, and product comparisons. Stay ahead with expert advice and make informed decisions for your vehicle.
        </Typography>
      </Stack>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {explore.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} key={img.id}>
              <Box
                sx={{
                  borderRadius: 1,
                  overflow: 'hidden',
                  boxShadow: 3,
                  border: '1px solid transparent',
                  padding: "10px",
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Image
                  src={img.path}
                  alt={img.alt}
                  width={500}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                />
                <Typography sx={{ fontWeight: "bold", color: '#010212', mt: 2 }}>
                  {img.title}
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  {img.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default ExploreSection;
