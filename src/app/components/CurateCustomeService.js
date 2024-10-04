import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from 'next/image';

const customeServices = [
    {
        id: 1,
        title: "Periodic Services",
        desc: "8 Services Included",
        path: "/images/periodic-serive.svg"
    },
    {
        id: 2,
        title: "AC Service & Repair",
        desc: "8 Services Included",
        path: "/images/AC&Repair-services.svg"
    },
    {
        id: 3,
        title: "Tyres & Wheel Care",
        desc: "8 Services Included",
        path: "/images/tyres&wheels-services.svg"
    },
    {
        id: 4,
        title: "Batteries",
        desc: "8 Services Included",
        path: "/images/Batteries-service.svg"
    },
    {
        id: 5,
        title: "Denting & Painting",
        desc: "8 Services Included",
        path: "/images/denting-paiting-services.svg"
    },
    {
        id: 6,
        title: "Car Spa & Cleaning",
        desc: "8 Services Included",
        path: "/images/car-spa-cleaning-service.svg"
    },
    {
        id: 7,
        title: "Detailing Services",
        desc: "8 Services Included",
        path: "/images/detailing-service.svg"
    },
    {
        id: 8,
        title: "Suspension & Fitments",
        desc: "8 Services Included",
        path: "/images/suspension-fitment-service.svg"
    }
];

const CurateCustomeService = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Stack spacing={2}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Curate Custom Services</Typography>
                    <Typography variant="subtitle2" color="#1781F8">View All</Typography>
                </Stack>
                <Grid container spacing={2}>
                    {customeServices.map((each) => (
                        <Grid item xs={12} sm={6} md={4} key={each.id}>
                            <Box sx={{ borderRadius: 1, overflow: 'hidden', boxShadow: 3, border: '1px solid #ddd', textAlign: 'center' }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" padding={2}>
                                    <Image src={each.path} alt={each.title} height={40} width={40} />
                                    <Stack>
                                        <Typography variant="subtitle1">{each.title}</Typography>
                                        <Typography variant="subtitle2">{each.desc}</Typography>
                                    </Stack>
                                    <KeyboardArrowRightIcon />
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Stack>
        </Container>
    );
}

export default CurateCustomeService;
