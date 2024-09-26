import { Container, List, ListItem, ListItemIcon, Stack, Typography } from '@mui/material';
import React from 'react';
// import CircleIcon from '@mui/icons-material/RadioButtonUnchecked';
import CircleIcon from '@mui/icons-material/Circle';

const features = [
    {
        title: "Transparent and Fair Offers",
        description: "We present all parts impartially, with no promotion of specific suppliers. Parts are organized by manufacturer and filtered by customer preferences."
    },
    {
        title: "Responsive Customer Service",
        description: "If any issues arise, Maroof is committed to resolving them quickly and efficiently."
    },
    {
        title: "Comprehensive, Up-to-Date Catalogs",
        description: "Our catalogs are refreshed daily with new products and current prices, ensuring you always have access to the latest offerings."
    },
    {
        title: "User-Friendly Experience",
        description: "Our website is designed to be both practical and mobile-friendly, allowing you to order auto parts from any device—whether it’s a computer, laptop, tablet, or smartphone."
    }
];


const choose = [
    {
        title: '10-Day Assured Return:',
        description: "If a part does not fit your vehicle, you can easily initiate a return request. Our return process is straightforward and hassle-free."
    },
    {
        title: "Reliable Product Information: ",
        description: "Our catalogs are created by gathering accurate market data. We ensure that product descriptions are precise, and we hold our sellers accountable for the authenticity and terms of their offers."
    }

]

const MaroofSection = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 4 }}>
            <Stack spacing={4}>
                <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Maroof – Your Trusted Online Marketplace for Auto Parts
                    </Typography>
                    <Typography>
                        Owning a car grants you the freedom to navigate your day with ease, free from the constraints of public transportation schedules and unexpected delays. With your own vehicle, you have the flexibility to manage both business and leisure travel as you see fit. This autonomy has significantly contributed to the growing number of vehicles on the road, including passenger cars, trucks, and buses. To put this into perspective, there were only 500 million cars globally in 1986. By 2010, that number had soared to 1 billion. According to the International Energy Agency, nearly 25 percent of the world’s population is expected to own a car by 2035, with the total number of vehicles projected to reach 1.7 billion. This surge in vehicle ownership drives the demand for auto parts. Maroof is here to meet that demand with a streamlined, efficient marketplace designed to make buying and selling auto parts easier and more convenient.
                    </Typography>
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        What Maroof Offers
                    </Typography>
                    <Typography>
                        Established in 2023, Maroof has been dedicated to simplifying the process of purchasing and selling auto parts. Our platform connects car owners with a wide range of suppliers, offering an extensive selection of branded, original parts. Our continuously updated catalogs feature top-quality replacement parts from trusted and reputable brands. Maroof provides suppliers with a platform to showcase their products, engage with customers, and expand their market reach.
                    </Typography>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Key Features of Maroof
                </Typography>
                <List sx={{ pl: 2 }}>
                    {features.map((feature, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: 'black', height:"10px", width:"10px" }} />
                            </ListItemIcon>
                            <Typography variant="body1">
                                <strong>{feature.title}:</strong> {feature.description}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>Why Choose Maroof?</Typography>
                <List sx={{ pl: 2 }}>
                    {choose.map((feature, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <CircleIcon sx={{ color: 'black', height:"10px" , width:"10px" }} />
                            </ListItemIcon>
                            <Typography variant="body1">
                                <strong>{feature.title}:</strong> {feature.description}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </Stack>
        </Container>
    );
};

export default MaroofSection;
