import { Button, Stack, Typography, Grid, Box } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';


const SimpleSteps = () => {
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
          Get the Right Part in Just 3 Simple Steps!
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '16px', md: '12px' },
            px: { xs: 2, md: 0 },
          }}
        >
         Effortlessly find the perfect car part for your needs. Simply log in, fill in your request details, and submit. Then, sit back and let the quotes roll in from trusted suppliers. It’s that easy!
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
                height: 150,
                width: 150,
                mx: 'auto',
              }}
            >
              <Image
                src="/images/login-icon.svg"
                alt="choose-service"
                height={64}
                width={64}
              />
              <Typography color="#010212" fontWeight="700" sx={{fontSize:10}}>
              Log In or Sign Up
              </Typography>
              <Typography sx={{fontSize:10}}  flexWrap={'wrap'} color="#010212">Access your Maroof account to start posting a request.</Typography>
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
                height: 150,
                width: 150,
                mx: 'auto',
              }}
            >
              <Image
                src="/images/fill-details-icon.svg"
                alt="pick-date-time"
                height={64}
                width={64}
              />
              <Typography color="#010212" fontWeight="700" sx={{fontSize:10}}>
              Fill in the Details
              </Typography>
              <Typography sx={{fontSize:10}}  flexWrap={'wrap'} color="#010212">Enter the car part name, model, and any specific requirements, then set your budget.</Typography>
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
                height: 150,
                width: 150,
                mx: 'auto',
              }}
            >
              <Image
                src="/images/clock-icon.svg"
                alt="confirm-relax"
                height={64}
                width={64}
              />
              <Typography color="#010212" fontWeight="700" sx={{fontSize:10}}>
              Submit & Wait for Quotes
              </Typography>
              <Typography sx={{fontSize:10}}  flexWrap={'wrap'} color="#010212">Submit your request and receive quotations from multiple suppliers.</Typography>
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

        POST REQUEST
        </Button>
      </Stack>
    </Stack>
  )
}

export default SimpleSteps