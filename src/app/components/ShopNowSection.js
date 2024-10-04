import React from 'react'
import Carousel from 'react-material-ui-carousel'
import ShopNowItem from './ShopNowItem'
import { Grid } from '@mui/material';
const shopNow=[
    {
        id:0,
        path:"/images/engine-performance-card.svg",
        title:"Boost Your Engine's Performance!",
        desc:'Discover top-quality engine parts that enhance efficiency and longevity. Shop now for reliable performance and exceptional value.'
    }
    ,
    {
        id:1,
        path:"/images/confidence-card.svg",
        title:"Stop with Confidence!",
        desc:"Upgrade your braking system with our high-performance brake parts. Ensure safety and reliability with every stop. Check out our range today!"
    }
    ,
    {
        id:2,
        path:"/images/confidence-card.svg",
        title:"Stop with Confidence!",
        desc:"Upgrade your braking system with our high-performance brake parts. Ensure safety and reliability with every stop. Check out our range today!"
    }
    ,
    {
        id:3,
        path:"/images/confidence-card.svg",
        title:"Stop with Confidence!",
        desc:"Upgrade your braking system with our high-performance brake parts. Ensure safety and reliability with every stop. Check out our range today!"
    }
]

const ShopNowSection = () => {
    const groupItems = (items, groupSize) => {
        let groupedItems = [];
        for (let i = 0; i < items.length; i += groupSize) {
          groupedItems.push(items.slice(i, i + groupSize));
        }
        return groupedItems;
      };
    const groupedShopNow = groupItems(shopNow, 2)

  return (
    <Carousel animation="slide" indicators={true} interval={2000}>
    {groupedShopNow.map((group, index) => (
      <Grid container spacing={2} key={index}>
        {group.map((item) => (
          <Grid item xs={12} sm={6} key={item.id}>
            <ShopNowItem item={item} />
          </Grid>
        ))}
      </Grid>
    ))}
  </Carousel>
  )
}

export default ShopNowSection