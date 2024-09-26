import { Button, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const BannerItem = ({ item }) => {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={4}
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                background: 'black',
                color: 'white',
                padding: { xs: 2, md: 4 },
            }}
        >
            <Stack sx={{ gap: 2, textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontSize: { xs: '24px', md: '30px' },
                        fontWeight: 700,
                    }}
                >
                    {item.title}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        fontSize: { xs: '16px', md: '20px' },
                        px: { xs: 2, md: 0 },
                    }}
                >
                    {item.description}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        textTransform: 'capitalize',
                        width: { xs: '100%', md: '160px' },
                    }}
                >
                    Click To Shop Now
                </Button>
            </Stack>

            <Stack>
                <Image
                    src={item.image}
                    alt={item.title}
                    height={500}
                    width={800}
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                    }}
                />
            </Stack>
        </Stack>
    )
}

export default BannerItem