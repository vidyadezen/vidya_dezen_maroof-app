import { Button, Stack, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';

const BookService = () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#101828',
        color: 'white',
        borderRadius:2,
        padding: { xs: 2, md: 4 },
        mt: { xs: 4, md: 4 }
      }}
    >
      <Stack sx={{ gap: 2, textAlign: { xs: 'center', md: 'left' } }}>
        <Image
          src="/images/car-logo-text-2.svg"
          height={86}
          width={86}
          alt="shop-now"
        />
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '15px', md: '20px' },
            fontWeight: 700,
          }}
        >
          Book Your Car Service in Minutes
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '16px', md: '12px' },
            px: { xs: 2, md: 0 },
          }}
        >
          Keep your car running smoothly with our hassle-free service booking. Whether it’s routine maintenance or urgent repairs, Maroof ensures your vehicle gets the attention it needs from trusted professionals. Enjoy the convenience of booking online and experience top-notch service at competitive prices.
        </Typography>
      </Stack>

     
      <Stack sx={{ width: '100%', mt: { xs: 4, md: 0 }, justifyContent:'space-between', alignItems:'center' }} direction="row" >
        <Grid container spacing={2} alignItems="center" justifyContent="center" direction='row'>
          <Grid item xs={12} sm={4} md="auto">
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                padding: 2,
                textAlign: 'center',
                height: 100,
                width: 100,
                mx: 'auto',
              }}
            >
              <Typography color="#3C2674">STEP 01</Typography>
              <Image
                src="/images/choose-service-icon.svg"
                alt="choose-service"
                height={64}
                width={64}
              />
              <Typography color="#010212" fontWeight="700" sx={{fontSize:10}}>
                Choose Your Service
              </Typography>
            </Box>
          </Grid>
          <ArrowRightAltOutlinedIcon sx={{ display: { xs: 'none', sm: 'block' }, color: 'white', ml:2 }} />

          <Grid item xs={12} sm={4} md="auto">
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                padding: 2,
                textAlign: 'center',
                height: 100,
                width: 100,
                mx: 'auto',
              }}
            >
              <Typography color="#D2B161">STEP 02</Typography>
              <Image
                src="/images/pick-date-time.svg"
                alt="pick-date-time"
                height={64}
                width={64}
              />
              <Typography color="#010212" fontWeight="700" sx={{fontSize:10}}>
                Pick a Date and Time
              </Typography>
            </Box>
          </Grid>
          <ArrowRightAltOutlinedIcon sx={{ display: { xs: 'none', sm: 'block' }, color: 'white' , ml:2  }} />

          <Grid item xs={12} sm={4} md="auto">
            <Box
              sx={{
                backgroundColor: '#FFFFFF',
                borderRadius: 4,
                padding: 2,
                textAlign: 'center',
                height: 100,
                width: 100,
                mx: 'auto',
              }}
            >
              <Typography color="#417B78">STEP 03</Typography>
              <Image
                src="/images/confirm-relax.svg"
                alt="confirm-relax"
                height={64}
                width={64}
              />
              <Typography color="#010212" fontWeight="700" sx={{fontSize:10}}>
                Confirm & Relax
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Button
          variant="contained"
          color="primary"
          sx={{
            textTransform: 'capitalize',
            width: { xs: '100%', md: '160px' },
           
            mt: { xs: 4, md: 2 },
            alignSelf: { xs: 'center', md: 'flex-start' },
            fontSize:10
          }}
          endIcon={<ArrowRightAltOutlinedIcon sx={{ color: 'white' }} />}
        >

          Book Service Now
        </Button>
      </Stack>
    </Stack>
  );
};

export default BookService;
