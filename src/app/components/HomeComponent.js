"use client"

import { Stack } from '@mui/material'
// import React from 'react'
import DownloadSection from './Download-section'
import LeadingBrands from './Leading-brands'
import SearchByCategory from './Search-by-category'
import QualitySection from './Quality-section'
import ExploreSection from './Explore-section'
import BannerSection from './Banner-section'
import SearchByVehicle from './SearchByVehicle'
import TestimonialSection from './Testimonial-section'
import MaroofSection from './Maroof-section'
import FilterSection from './FilterSection'

const HomeComponent = () => {
  return (
    <Stack>
      <FilterSection />
      <BannerSection />
      <SearchByVehicle />
      <SearchByCategory />
      <QualitySection />
      <LeadingBrands />
      <ExploreSection />
      <TestimonialSection />
      <MaroofSection />
      <DownloadSection />

    </Stack>
  )
}

export default HomeComponent 