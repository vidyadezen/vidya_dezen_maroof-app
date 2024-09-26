import { Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const DownloadSection = () => {
  return (
    <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} justifyContent={{ sm: "center", md: 'space-between' }} alignItems={{ md: 'center' }}
      sx={{
        marginY: { xs: 3, md: 5 },
        paddingX: { xs: 2, md: 4 },
        gap: 3,
        background: '#1781F8',
        padding: "60px 150px 60px 150px",
        color: 'white'

      }}
    >
      <Stack>
        <Typography sx={{ fontWeight: 'bold', fontSize: { xs: '1.2rem', md: '1.5rem' } }}>
          Download Our Mobile App
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.9rem', md: '1rem' },
            maxWidth: '600px',
            marginX: 'auto',
            marginY: 2,
          }}
        >
          Access all our services at your fingertips! Download our mobile app to browse products,
          receive quotations, and manage your orders anytime, anywhere.
        </Typography>
      </Stack>

      <Stack direction={{ xs: 'column', sm: 'row', md: "column" }} justifyContent="center" spacing={2}>
        <Image src="/images/google-play-frame.svg" height={44} width={140} alt="Google Play" />
        <Image src="/images/app-store-frame.svg" height={44} width={140} alt="App Store" />
      </Stack>
    </Stack>
  );
};

export default DownloadSection;
