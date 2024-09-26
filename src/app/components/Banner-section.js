"use client";

import React from 'react';
import BannerItem from './BannerItem';
import Carousel from 'react-material-ui-carousel';

const items = [
    {
        title: "Boost Your Engine's Performance!",
        description:
            'Discover top-quality engine parts that enhance efficiency and longevity. Shop now for reliable performance and exceptional value.',
        image: '/images/car-banner-img.svg',
    },
    {
        title: 'Unlock the Power of Precision',
        description:
            'Choose from a range of top brands and ensure your vehicle is running at peak performance.',
        image: '/images/car-banner-img.svg',

    },
    {
        title: 'Drive with Confidence',
        description:
            'Engineered for reliability, our parts are built to last and perform under the toughest conditions.',
        image: '/images/car-banner-img.svg',

    },
];

const BannerSection = () => {
    return (
        <Carousel animation="slide" indicators={true} interval={2000} navButtonsAlwaysVisible>
            {items.map((item, index) => (
                <BannerItem key={index} item={item} />
            ))}
        </Carousel>
    )
};

export default BannerSection;
