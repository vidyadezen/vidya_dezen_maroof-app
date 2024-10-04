import { Button, Stack, Typography, Container, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const CarService = () => {
  return (
    <Container maxWidth="lg" sx={{ backgroundColor: "#F1ECFE", py: 4  ,my:4, borderRadius:2}} >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
        <Stack spacing={2}>
          <Typography color="#3C2674" fontWeight={700} variant="h5">
            Car Service at Your Fingertips
          </Typography>
          <Typography color="#010212" fontWeight={500} variant="h6">
            Book car servicing with top-rated providers right from the app. Quality service, hassle-free scheduling!
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: 'capitalize',
              width: { xs: '100%', md: '160px' },
              backgroundColor: "#3C2674",
              color: 'white',
            }}
          >
            Schedule Now
          </Button>
        </Stack>
        <Box sx={{ width: { xs: '100%', sm: 'auto' }, textAlign: 'center' }}>
          <Image
            src="/images/car-service-tips.svg"
            alt="service"
            width={600} 
            height={340} 
            layout="responsive"
          />
        </Box>
      </Stack>
    </Container>
  );
};

export default CarService;
