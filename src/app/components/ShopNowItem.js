import { Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

const ShopNowItem = ({ item }) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      spacing={4}
      sx={{
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#010212',
        color: 'white',
        padding: { xs: 2, md: 7 },
        borderRadius: 2,
        maxWidth: { xs: '100%', md: 740 },
        margin: 'auto',
        position: 'relative',
        maxHeight:'auto'
      }}
    >
      <Stack
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
        spacing={2}
        flex={1}
      >
        <Image
          src="/images/car-logo-text-2.svg"
          height={86}
          width={86}
          alt="shop-now"
        />
        <Typography
          variant="h4"
          sx={{
            fontSize: { xs: '24px', md: '30px' },
            fontWeight: 700,
          }}
        >
          {item.title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '16px', md: '20px' },
            px: { xs: 2, md: 0 },
          }}
        >
          {item.desc}
        </Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: 'capitalize',
            width: { xs: '100%', md: '160px' },
            backgroundColor: '#1781F8',
            
          }}
        >
          Click To Shop Now
        </Button>
        <Stack 
          sx={{
            position: 'absolute',
            bottom: { xs: -1, md: -1 },
            left: { xs: '50%', md: 0 },
            transform: { xs: 'translateX(-50%)', md: 'none' },
            height: 40,
            width: 120,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 1,
            backgroundColor: '#1781F8',
            borderBottomLeftRadius: 10,
            
          }}
        >
          <CheckBoxOutlinedIcon fontSize="small" />
          <Typography
            color="#FFFFFF"
            sx={{ fontSize: 7, lineHeight: 1, fontWeight: 500 }}
          >
            Fulfilled by
          </Typography>
          <Image
            src="/images/car-blue.svg"
            height={23}
            width={23}
            alt="car"
          />
        </Stack>
      </Stack>

      <Stack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Image
          src={item.path}
          alt={item.title}
          height={400}
          width={600}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <Stack flexDirection="row" justifyContent="center" alignItems="center" gap={1} mt={2}>
          <CheckBoxOutlinedIcon fontSize="small" />
          <Typography color="#FFFFFF" sx={{ fontSize: 7, lineHeight: 1, fontWeight: 500 }}>
            Fulfilled by
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ShopNowItem;
