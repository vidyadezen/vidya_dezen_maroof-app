import { Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AddIcon from '@mui/icons-material/Add';

const premium=[
    {
        id: 0,
        path: "/images/front-bumper.svg",
        partName: 'Front Bumper',
        price: "SAR 2,499",
        discountPrice: "SAR 2,799",
        discountPercentage: '11% off'
    }
    ,
    {
        id:1,
        path:'/images/Alloy-wheel.svg',
        partName:"Alloy wheel",
        price:"SAR 1,799",
        discountPrice: "SAE 2,200",
        discountPercentage: "10% off"



    }
    ,
    {
        id:2,
        path:'/images/side-mirror.svg',
        partName:'Side Mirror',
        price:"SAR 799",
        discountPrice: "SAR 899",
        discountPercentage: "12% off"

    },
    ,
    {
        id:3,
        path:'/images/head-lamp.svg',
        partName:'Headlamp',
        price:"SAR 1,299",
        discountPrice: "SAR 1,499",
        discountPercentage: "13% off"

    },
    ,
    {
        id:4,
        path:'/images/front-grille.svg',
        partName:'Front Grille',
        price:"SAR 649",
        discountPrice: "SAR 749",
        discountPercentage: "13% off"

    },
    ,
    {
        id:5,
        path:'/images/tail-light.svg',
        partName:'Tail Light Assembly ',
        price:"SAR 899 ",
        discountPrice: "SAR 999",
        discountPercentage: "10% off"

    },
]

const PremiumDeals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3;

    const handleNext = () => {
        if (currentIndex < premium.length - itemsPerView) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
    <Stack spacing={2}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Exclusive Deals on Premium Car Parts
            </Typography>
            <Typography variant="subtitle2" color="#1781F8">View All</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
            <Button onClick={handlePrev} disabled={currentIndex === 0} startIcon={<KeyboardArrowLeftIcon  fontSize='40px'/>}>
               
            </Button>
            <Stack direction="row" spacing={2} overflow="hidden">
                <Stack direction="row" spacing={2} sx={{ transform: `translateX(-${currentIndex * 100 / itemsPerView}%)`, transition: 'transform 0.3s ease-in-out' }}>
                    {premium.map((each) => (
                        <Stack spacing={2}  width={250} key={each.id}>
                            <Image src={each.path} alt={each.partName} height={200} width={250} />
                            <Stack spacing={1} textAlign={'left'}>
                                <Typography variant='subtitle1' >{each.partName}</Typography>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant='subtitle2' fontWeight='600'>{each.price}</Typography>
                                    <Typography variant='subtitle2' fontWeight='500' sx={{ textDecoration: 'line-through' }}>{each.discountPrice}</Typography>
                                <Typography variant='subtitle2' color='#34C759'>{each.discountPercentage}</Typography>

                                </Stack>
                            </Stack>
                            <Button variant="contained" startIcon={<AddIcon />}>ADD TO CART</Button>
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            <Button onClick={handleNext} disabled={currentIndex >= premium.length - itemsPerView} endIcon={<KeyboardArrowRightIcon  fontSize='40px'/>}>
              
            </Button>
        </Stack>
    </Stack>
</Container>
  )
}

export default PremiumDeals