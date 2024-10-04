"use client"; 

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const explore = [
  {
    id: 1,
    title: "Top 5 Essential Car Maintenance Tips",
    desc: "Keep your vehicle running smoothly with these must-know maintenance tips. Simple steps can save you from costly repairs down the road.",
    path: "/images/essential-car-maintanance.svg",
    alt: "sample",
    date:'20.02.2024'
  },
  {
    id: 2,
    title: "How to Choose the Right Engine Oil for Your Car",
    desc: "The right engine oil is crucial for your car’s performance and longevity. Discover how to pick the perfect oil for your vehicle’s needs.",
    path: "/images/choose-right-engine.svg",
    alt: "sample",
    date:'20.02.2024'

  },
  {
    id: 3,
    title: "The Benefits of Regular Brake System Checks",
    desc: "Regular brake inspections are key to your safety on the road. Learn why you should never skip this critical maintenance task.",
    path: "/images/regular-break-check-sysm.svg",
    alt: "sample",
    date:'20.02.2024'

  },
  {
    id:4,
    title:"Upgrade Your Ride: Best Car Accessories of the Year",
    desc:"Transform your driving experience with the latest car accessories. From tech gadgets to comfort enhancers, these picks are a must-have.",
    path:"/images/best-car-accessories.svg",
    alt: "sample",
    date:'20.02.2024'
  },
  {
    id:5,
    title:"Understanding Your Car’s Cooling System",
    desc:"Your car’s cooling system is vital for preventing overheating. Learn how it works and why maintaining it is essential for engine health.",
    path:"/images/car-cooling.svg",
    alt: "sample",
    date:'20.02.2024'
  },
  {
    id:6,
    title:"Why Quality Bearings Matter for Your Vehicle",
    desc:"Bearings play a critical role in reducing friction and wear. Find out how quality bearings can extend the life of your car’s components.",
    path:"/images/quality-bearings.svg",
    alt: "sample",
    date:'20.02.2024'
  }
];


const ExploreSection = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerView = 3;

    const handleNext = () => {
        if (currentIndex < explore.length - itemsPerView) {
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
            Blogs & Articles
            </Typography>
            <Typography variant="subtitle2" color="#1781F8">View All</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
            <Button onClick={handlePrev} disabled={currentIndex === 0} startIcon={<KeyboardArrowLeftIcon  fontSize='40px'/>}>
               
            </Button>
            <Stack direction="row" spacing={2} overflow="hidden">
                <Stack direction="row" spacing={2} sx={{ transform: `translateX(-${currentIndex * 100 / itemsPerView}%)`, transition: 'transform 0.3s ease-in-out' }}>
                    {explore.map((each) => (
                        <Stack spacing={2}width={250} key={each.id}>
                            <Image src={each.path} alt={each.path} height={200} width={250} />
                           
                               
                                    <Typography variant='subtitle2' fontWeight='600' color="#010212" fontSize='14'>{each.title}</Typography>
                                    <Typography variant='subtitle2' fontWeight='500'  color="#475467" fontSize='12'>{each.desc}</Typography>
                                    <Typography color="#475467" fontSize='10'>{each.date}</Typography>

                             
                         
                        </Stack>
                    ))}
                </Stack>
            </Stack>
            <Button onClick={handleNext} disabled={currentIndex >= explore.length - itemsPerView} endIcon={<KeyboardArrowRightIcon  fontSize='40px'/>}>
              
            </Button>
        </Stack>
    </Stack>
</Container>
   
  );
};

export default ExploreSection;
