"use client"


import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'


const brands = [
  {
    id: 1,
    path: "/images/pngwing.com-img.svg",
    alt: 'sample'

  }, {
    id: 2,
    path: "/images/pngwing.com-2-img.svg",
    alt: 'sample'

  },
  {
    id: 3,
    path: "/images/pngwing-3-img.svg",
    alt: 'sample'
  },
  {
    id: 4,
    path: "/images/pngwing-com-4-img.svg",
    alt: "sample"

  },
  {
    id: 5,
    path: "/images/pngwing-com-5-img.svg",
    alt: "sample"

  },
  {
    id: 6,
    path: "/images/pngwing-com-6-img.svg",
    alt: "sample"

  }
  ,
  {
    id: 7,
    path: "/images/pngwing-com-7-img.svg",
    alt: "sample"

  }
  ,
  {
    id: 8,
    path: "/images/pngwing-com-8-img.svg",
    alt: "sample"

  }
  ,
  {
    id: 9,
    path: "/images/pngwing-com-9-img.svg",
    alt: "sample"

  }
  ,
  {
    id: 10,
    path: "/images/pngwing-com-10-img.svg",
    alt: "sample"

  }
  ,
  {
    id: 11,
    path: "/images/pngwing-com-11-img.svg",

    alt: "sample"

  }
  ,
  {
    id: 12,
    path: "/images/pngwing-com-12-img.svg",

    alt: "sample"

  }





]

const LeadingBrands = () => {
  return (
    <Stack className="leading-main">
      <Stack>
        <Typography variant="h6" textAlign={'center'} sx={{ fontWeight: 'bold' }}>Leading Car Brands You Know and Trust</Typography>
      </Stack>
      <Stack>
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {brands.map((img, index) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
                <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px', textAlign: 'center' }}>
                  <Image
                    src={img.path}
                    alt={img.alt}
                    width={123}
                    height={96}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>

    </Stack>
  )
}

export default LeadingBrands