"use client"
import { Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'




const Header = () => {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: { xs: '10px', md: '20px' },
                background: 'black',
                color: 'white'
            }}
        >
            <Stack
                direction={{ xs: "column", md: 'row' }}
                alignItems={{ xs: 'center', md: 'flex-start' }}
                sx={{ gap: '10px', textAlign: { xs: 'center', md: 'left' } }}
            >
                <Typography variant="h1" sx={{ fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
                    Download Our Mobile Application
                </Typography>
                <Stack direction="row" spacing={2}>
                    <Image src='/images/google-play-frame.svg' height={44} width={140} alt="Google Play" />
                    <Image src="/images/app-store-frame.svg" height={44} width={140} alt="App Store" />
                </Stack>
            </Stack>

            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{ flexWrap: 'wrap' }}
            >
                <Stack direction="row" alignItems="center" sx={{ gap: '8px'}}>
                    <Image src='/images/car-icon.svg' height={15} width={24} alt="Car Service" />
                    <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>Car Service</Typography>
                </Stack>

                <Stack direction="row" alignItems="center" sx={{ gap: '8px' }}>
                    <Image src='/images/quotation-icon.svg' height={15} width={24} alt="Get Quotation" />
                    <Typography sx={{ fontSize: { xs: '10px', md: '12px' } }}>Get Quotation</Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default Header;
