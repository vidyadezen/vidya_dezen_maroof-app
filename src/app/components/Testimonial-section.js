import React, { useState } from 'react';
import { Box, Container, Grid, Stack, Typography, IconButton } from '@mui/material';
import Image from 'next/image';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testiMonial = [
    {
        id: 1,
        path: "/images/John-img.svg",
        alt: "John D.",
        name: "John D.",
        role: "Automotive Technician",
        desc: "I’ve been using Maroof for all my auto part needs, and I couldn’t be happier. The quality is top-notch, and the service is always prompt and professional. Highly recommended!"
    },
    {
        id: 2,
        path: '/images/sarah-img.svg',
        name: "Sarah L.",
        role: "Car Enthusiast",
        desc: "The variety of parts available at Maroof is impressive. I found exactly what I needed for my vehicle at a great price. Their customer support team is also fantastic—very helpful and responsive.",
        alt: "Sarah L.",
    },
    {
        id: 3,
        path: '/images/Micahl-img.svg',
        name: "Michael R.",
        role: "Fleet Manager",
        desc: "Maroof has been my go-to for aftermarket parts. They offer excellent value without compromising on quality. The ordering process is seamless, and I’ve always received my parts on time.",
        alt: "Michael R.",
    },
    {
        id: 4,
        path: '/images/Jane-img.svg',
        name: "Jane F.",
        role: "Car Collector",
        desc: "I've been collecting classic cars for years, and Maroof always has the rare parts I need. Their service is unmatched and the parts are reliable.",
        alt: "Jane F.",
    },
    {
        id: 5,
        path: '/images/David-img.svg',
        name: "David G.",
        role: "Mechanic",
        desc: "As a professional mechanic, I trust Maroof for high-quality parts at a good price. My clients are happy, and that keeps me coming back.",
        alt: "David G.",
    }
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const testimonialsPerPage = 3;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? Math.floor((testiMonial.length - 1) / testimonialsPerPage) * testimonialsPerPage : prevIndex - testimonialsPerPage
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex + testimonialsPerPage >= testiMonial.length ? 0 : prevIndex + testimonialsPerPage
        );
    };

    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems={{ xs: 'center', md: 'center' }} sx={{ mb: 4 }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        Our Clients Love Us!
                    </Typography>

                    <Stack direction="row" justifyContent="center" alignItems="center">
                        <IconButton onClick={handlePrev} disabled={currentIndex === 0}>
                            <ArrowBackIosIcon fontSize="medium" />
                        </IconButton>
                        <IconButton onClick={handleNext} disabled={currentIndex + testimonialsPerPage >= testiMonial.length}>
                            <ArrowForwardIosIcon fontSize="medium" />
                        </IconButton>
                    </Stack>
                </Stack>

                <Grid container spacing={2}>
                    {testiMonial.slice(currentIndex, currentIndex + testimonialsPerPage).map((img, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    boxShadow: 3,
                                    border: '1px solid #ccc',
                                    padding: "20px",
                                }}
                            >
                                <Typography variant="body1" sx={{ mb: 2 }}>
                                    {img.desc}
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <Image
                                        src={img.path}
                                        alt={img.alt}
                                        width={100}
                                        height={80}
                                        layout="intrinsic"
                                    />
                                    <Stack>
                                        <Typography sx={{ fontWeight: "bold" }}>{img.name}</Typography>
                                        <Typography sx={{ color: '#555' }}>{img.role}</Typography>
                                    </Stack>
                                </Stack>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default TestimonialSection;
