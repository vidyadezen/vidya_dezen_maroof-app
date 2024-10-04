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
import CurateCustomeService from './CurateCustomeService'
import EnhanceSection from './EnhanceSection'
import OfferOnPart from './OfferOnPart'
import CarService from './CarService'
import ShopNowSection from './ShopNowSection'
import PremiumDeals from './PremiumDeals'
import BookService from './BookService'
import SimpleSteps from './SimpleSteps'
import TypesServices from './TypesServices'
import TabsSection from './TabsSection'

const HomeComponent = () => {
  return (
    <Stack>
      <FilterSection />
      <BannerSection />
      <TabsSection />
      <SearchByVehicle />
      <TypesServices />
      <ShopNowSection />
      <OfferOnPart />
      <SimpleSteps />
      <SearchByCategory />
      <CarService />
      <PremiumDeals />
      <QualitySection />
      <EnhanceSection />
      <LeadingBrands />
      <CurateCustomeService />
      <BookService />
      <ExploreSection />
      <TestimonialSection />
      <MaroofSection />
      <DownloadSection />

    </Stack>
  )
}

export default HomeComponent 