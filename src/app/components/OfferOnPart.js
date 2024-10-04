import { Button, Stack, Typography, Container } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const offerParts = [
    {
        id: 0,
        path: "/images/break-pads.svg",
        partName: 'Alternator Pulley',
        price: "SAR 349",
        discountPrice: "SAR 399",
        discountPercentage: '12% off'
    },
    {
        id: 1,
        path: "/images/oil-filter.svg",
        partName: 'Drive Chain',
        price: "SAR 499",
        discountPrice: "SAR 549",
        discountPercentage: '10% off'
    },
    {
        id: 2,
        path: "/images/spark-plugs.svg",
        partName: "Car Engine Control Unit",
        price: "SAR 149",
        discountPrice: "SAR 179",
        discountPercentage: "17% off"
    },
    {
        id: 3,
        path: "/images/air-filter.svg",
        partName: "Roller",
        price: "SAR 199",
        discountPrice: "SAR 229",
        discountPercentage: "13% off"
    },
    {
        id: 4,
        path: "/images/battery.svg",
        partName: "Engine Bearing",
        price: "SAR 549",
        discountPrice: "SAR 599",
        discountPercentage: "8% off"
    },
    {
        id: 5,
        path: "/images/head-lights.svg",
        partName: "Wheel Bearing",
        price: "SAR 399",
        discountPrice: "SAR 449",
        discountPercentage: "11% off"
    }
];

const OfferOnPart = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3;

    const handleNext = () => {
        if (currentIndex < offerParts.length - itemsPerView) {
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
            Offers on Car Parts
            </Typography>
            <Typography variant="subtitle2" color="#1781F8">View All</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
            <Button onClick={handlePrev} disabled={currentIndex === 0} startIcon={<KeyboardArrowLeftIcon  fontSize='40px'/>}>
               
            </Button>
            <Stack direction="row" spacing={2} overflow="hidden">
                <Stack direction="row" spacing={2} sx={{ transform: `translateX(-${currentIndex * 100 / itemsPerView}%)`, transition: 'transform 0.3s ease-in-out' }}>
                    {offerParts.map((each) => (
                        <Stack spacing={2}  width={250} key={each.id}>
                            <Image src={each.path} alt={each.partName} height={200} width={250} />
                            <Stack spacing={1} textAlign={'left'}>
                                <Typography variant='subtitle1'>{each.partName}</Typography>
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
            <Button onClick={handleNext} disabled={currentIndex >= offerParts.length - itemsPerView} endIcon={<KeyboardArrowRightIcon  fontSize='40px'/>}>
              
            </Button>
        </Stack>
    </Stack>
</Container>
  )
}

export default OfferOnPart