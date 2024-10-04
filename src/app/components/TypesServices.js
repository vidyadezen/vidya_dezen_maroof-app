import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';

const TypesServices = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
            
               
                <Grid container spacing={2}>
                   
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px solid #ddd', textAlign: 'center' }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2}>
                                <Stack direction={'row'} spacing={2}>
                                    <Image src={"/images/off-icon.svg"} alt={"sample"} height={40} width={40} />
                                    <Stack>
                                        <Typography variant="subtitle1">Get 15% Off on Car Parts</Typography>
                                        <Typography variant="subtitle2">Shop Now</Typography>
                                    </Stack>
                                    </Stack>
                                    <KeyboardArrowRightIcon />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px solid #ddd', textAlign: 'center' }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2}>
                                    <Stack direction={'row'} spacing={2}>
                                    <Image src={"/images/appointment-icon.svg"} alt={"sample"} height={40} width={40} />
                                    <Stack>
                                        <Typography variant="subtitle1">Book a Service Appointment</Typography>
                                        <Typography variant="subtitle2">Pre-Booking</Typography>
                                    </Stack>
                                    </Stack>
                                    <KeyboardArrowRightIcon />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px solid #ddd', textAlign: 'center' }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2}>
                                <Stack direction={'row'} spacing={2}>
                                    <Image src={"/images/person-icon.svg"} alt={"sample"} height={40} width={40} />
                                    <Stack>
                                        <Typography variant="subtitle1">Expert Mechanic Consultation</Typography>
                                        <Typography variant="subtitle2">In 15 Min</Typography>
                                    </Stack>
                                    </Stack>
                                    <KeyboardArrowRightIcon />
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px solid #ddd', textAlign: 'center' }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2}>
                                <Stack direction={'row'} spacing={2}>
                                    <Image src={"/images/online-parts.svg"} alt={"sample"} height={40} width={40} />
                                    <Stack>
                                        <Typography variant="subtitle1">Order Parts Online</Typography>
                                        <Typography variant="subtitle2">At Home</Typography>
                                    </Stack>
                                    </Stack>
                                    <KeyboardArrowRightIcon />
                                </Stack>
                            </Box>
                        </Grid>
                    
                </Grid>
        </Container>
  )
}

export default TypesServices