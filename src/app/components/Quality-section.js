"use client"

import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const quality = [
  {
    id: 1,
    path: "/images/quality-1.svg",
    alt: "sample",
    title: "Trust in Genuine Quality",
    desc: "Original products provide unmatched quality, perfect fit, and long-lasting performance. Opt for authenticity to keep your vehicle running at its best!"

  }
  ,
  {
    id: 2,
    path: "/images/quality-2.svg",
    alt: "sample",

    title: "Quality You Can Afford",
    desc: "Enjoy premium products at budget-friendly prices. Get the best value without compromising on quality!"

  }
  ,
  {
    id: 3,
    alt: "sample",

    path: "/images/quality-3.svg",
    title: "Explore a Diverse Range",
    desc: "Discover a wide variety of options tailored to meet your every need. From parts to accessories, we’ve got it all in one place!"

  },
  {
    id: 4,
    alt: "sample",

    path: "/images/quality-3.svg",
    title: "Explore a Diverse Range",
    desc: "Discover a wide variety of options tailored to meet your every need. From parts to accessories, we’ve got it all in one place!"

  }
]

const QualitySection = () => {
  return (
    <Stack marginTop={5} marginBottom={5}>
      <Stack>
        <Typography variant="h6" textAlign={'center'} sx={{ fontWeight: 'bold' }}>The Advantage of Aftermarket</Typography>
      </Stack>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {quality.map((img, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index}>
              <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px', padding: "10px" }}>
                <Image
                  src={img.path}
                  alt={img.alt}
                  width={123}
                  height={96}
                />
                <Typography variant="body1">
                  <strong>{img.title}:</strong> {img.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Stack>
  )
}

export default QualitySection