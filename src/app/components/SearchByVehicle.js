import { Button, FormControl, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchByVehicle = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Stack
            sx={{
                backgroundColor: '#060B56',
                padding: { xs: "20px", sm: "20px", md: "20px" },
                color: 'white',
            }}
            direction="column"
            spacing={3}
            marginTop={5}
            marginBottom={5}

        >


            <Stack
                direction={{ xs: 'column', sm: 'row', md: 'row' }}
                alignItems="center"
                spacing={2}

                justifyContent={{ md: "space-between" }}
            >

                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    Search By Vehicles
                </Typography>
                <Stack spacing={2} direction={{ md: 'row', xs: 'column', lg: 'row' }} justifyContent={{ md: "space-between" }} alignItems={{ md: 'center' }}>


                    <Typography variant="h7" sx={{ fontWeight: 'bold', whiteSpace: 'nowrap' }}>
                        Search by number plate:
                    </Typography>
                    <TextField
                        variant="outlined"
                        placeholder="Enter number plate..."
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: "8px",
                            flex: 1,
                            maxWidth: '250px',
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Stack>


            </Stack>

            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{ width: '100%' }}
            >
                <FormControl fullWidth>
                    <InputLabel id="brand-select-label">Select Brand</InputLabel>
                    <Select
                        labelId="brand-select-label"
                        value={value}
                        onChange={handleChange}
                        label="Choose an Option"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: "8px",
                            flex: 1,


                        }}
                    >
                        <MenuItem value="Toyota">Toyota</MenuItem>
                        <MenuItem value="Honda">Honda</MenuItem>
                        <MenuItem value="BMW">BMW</MenuItem>
                        <MenuItem value="Mercedes-Benz">Mercedes-Benz</MenuItem>
                        <MenuItem value="Ford">Ford</MenuItem>
                        <MenuItem value="Audi">Audi</MenuItem>
                        <MenuItem value="Hyundai">Hyundai</MenuItem>
                        <MenuItem value="Tesla">Tesla</MenuItem>
                        <MenuItem value="Nissan">Nissan</MenuItem>
                        <MenuItem value="Volkswagen">Volkswagen</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="model-select-label">Select Model</InputLabel>
                    <Select
                        labelId="model-select-label"
                        value={value}
                        onChange={handleChange}
                        label="Choose an Option"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: "8px",
                            flex: 1,


                        }}
                    >
                        <MenuItem value={10}>Camry</MenuItem>
                        <MenuItem value={20}>Corolla</MenuItem>
                        <MenuItem value={30}>RAV4</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="year-select-label">Select Year</InputLabel>
                    <Select
                        labelId="year-select-label"
                        value={value}
                        onChange={handleChange}
                        label="Choose an Option"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: "8px",
                            flex: 1,

                        }}
                    >
                        <MenuItem value={2024}>2024</MenuItem>
                        <MenuItem value={2023}>2023</MenuItem>
                        <MenuItem value={2022}>2022</MenuItem>
                    </Select>
                </FormControl>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'capitalize', width: { xs: '100%', sm: 'auto', md: 'auto' } }}
                >
                    Search Parts
                </Button>
            </Stack>
        </Stack>
    );
};

export default SearchByVehicle;
