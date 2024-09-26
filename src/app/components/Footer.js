"use client"; 
import { Button, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <Stack sx={{ padding: { xs: '20px', md: '40px' }, gap: 4, background: 'black', color: 'white' }} >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                justifyContent="space-between"
                alignItems={{ xs: 'flex-start', md: 'center' }}
                spacing={2}
            >
                <Stack sx={{ gap: 2, textAlign: { xs: 'center', md: 'start', lg: 'left', xl: 'left' } }}>
                    <Image src="/images/car-logo-text-2.svg" alt="logo" height={44} width={140} />
                    <Typography sx={{ textAlign: { xs: 'center', sm: 'left' }, maxWidth: '400px', mt: 1 }}>
                        Experience excellence with Maroof – Your trusted partner for auto parts and services.
                    </Typography>
                </Stack>

                <Stack>

                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">About</Typography>
                            <Typography>About Us</Typography>
                            <Typography>Contact Us</Typography>
                            <Typography>Become A Vendor</Typography>
                            <Typography>Career</Typography>
                            <Typography>Supplier Relations</Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Policy</Typography>
                            <Typography>Return Policy</Typography>
                            <Typography>Privacy Policy</Typography>
                            <Typography>Disclaimer</Typography>
                            <Typography>Terms of Use</Typography>
                            <Typography>Buyers Policy</Typography>
                            <Typography>Sellers Policy</Typography>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Quick Links</Typography>
                            <Typography>Brands</Typography>
                            <Typography>Blogs</Typography>
                            <Typography>FAQ’s</Typography>
                            <Typography>Site Map</Typography>
                        </Grid>
                    </Grid>
                </Stack>

            </Stack>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems="center"
                justifyContent="space-between"
                spacing={2}
            >
                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Image src="/images/logo-fb-simple-icon.svg" height={16} width={16} alt="Facebook" />
                    <Image src="/images/logo-instagram-1-icon.svg" height={16} width={16} alt="Instagram" />
                    <Image src="/images/Vector-icon.svg" height={16} width={16} alt="Twitter" />
                    <Image src="/images/linked-icon.svg" height={16} width={16} alt="LinkedIn" />
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: 'capitalize' }}
                        startIcon={<Image src="/images/car-service-white-icon.svg" alt="Car Service" width={20} height={20} />}
                    >
                        Car Service
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ textTransform: 'capitalize' }}
                        startIcon={<Image src="/images/quotation-white-icon.svg" alt="Quotation" width={20} height={20} />}
                    >
                        Get Quotation
                    </Button>
                </Stack>
            </Stack>

            <Stack
                sx={{ gap: 2 }}
                direction={{ xs: 'column', md: 'row' }}
                alignItems={{ md: 'center' }}
                spacing={4}
            >
                <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
                    <Typography sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'left' } }}>
                        Download Our Mobile App
                    </Typography>
                    <Typography sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                        Access all our services at your fingertips! Download our mobile app to browse products, receive quotations, and manage your orders anytime, anywhere.
                    </Typography>
                </Stack>

                <Stack direction="row" justifyContent="center" spacing={2}>
                    <Image src="/images/google-play-frame.svg" height={44} width={140} alt="Google Play" />
                    <Image src="/images/app-store-frame.svg" height={44} width={140} alt="App Store" />
                </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center">
                <hr style={{ width: '100%', border: '1px solid gray' }} />
                <Image src="/images/foot-chat-icon.svg" width={64} height={64} alt="Chat" />
            </Stack>

            <Typography sx={{ textAlign: 'center' }}>© Copyright 2024, All Rights Reserved by Maroof</Typography>
        </Stack>
    );
};

export default Footer;
