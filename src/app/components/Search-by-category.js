"use client"

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const categories = [
  {
    id: 1,
    path: '/images/maintenance-img.svg',
    alt: 'sample',
    title: 'Maintenance Service Parts'
  }
  ,
  {
    id: 2,
    path: '/images/air-conditioners-img.svg',
    alt: 'sample',
    title: "Air Conditioning"

  }
  ,
  {
    id: 3,
    path: '/images/belt-chain-img.svg',
    alt: 'sample',
    title: "Belts Chains and Rollers"

  }
  ,
  {
    id: 4,
    path: '/images/wheel-bearing-1-img.svg',
    alt: 'sample',
    title: "Bearings"

  }
  ,
  {
    id: 5,
    path: '/images/car-door-img.svg',
    alt: 'sample',
    title: "Body Parts"

  }
  ,
  {
    id: 6,
    path: '/images/engine-1-img.svg',
    alt: 'sample',
    title: "Engine"

  }
  ,
  {
    id: 7,
    path: '/images/wire-img.svg',
    alt: 'sample',
    title: "Control Cables"

  }
  ,
  {
    id: 8,
    path: '/images/disc-brake-img.svg',
    alt: 'sample',
    title: "Brake System"

  }
  ,
  {
    id: 9,
    path: '/images/spark-plug-img.svg',
    alt: 'sample',
    title: "Car Accessories"

  }
  ,
  {
    id: 10,
    path: '/images/automobile-img.svg',
    alt: 'sample',
    title: "Clutch System"

  }
  ,
  {
    id: 11,
    path: '/images/electric-img.svg',
    alt: 'sample',
    title: "Electric Components"

  }
  ,
  {
    id: 12,
    path: '/images/exhaust-1-img.svg',
    alt: 'sample',
    title: "Exhaust System"

  }
]


const SearchByCategory = () => {
  return (
   
        <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Stack display={'flex'} flexDirection={'row'} justifyContent={'space-between'} alignItem={'center'}>
        <Typography variant="h6" textAlign={'center'} sx={{ fontWeight: 'bold' }} gutterBottom>Shop By Category</Typography>
        <Typography  variant="subtitle2" color="#1781F8" gutterBottom>View All</Typography>
        </Stack>
          <Grid container spacing={2}>
            {categories.map((img, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px', textAlign: 'center', padding: "10px" }}>
                  <Image
                    src={img.path}
                    alt={img.alt}
                    width={123}
                    height={96}
                  />
                  <Typography sx={{ fontWeight: "bold" }}>{img.title}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

  )
}

export default SearchByCategory