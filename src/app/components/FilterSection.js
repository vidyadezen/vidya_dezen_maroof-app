import { Button, FormControl, IconButton, InputAdornment, InputLabel, Menu, MenuItem, NativeSelect, Select, Stack, TextField } from '@mui/material'
import Image from 'next/image';
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';


const FilterSection = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Stack direction={{ md: 'row' }} justifyContent={{ md: 'space-between' }} alignItems={{ md: 'center' }} sx={{ padding: { xs: '10px', md: '10px' }}}>
            <Stack direction="row" gap={2}>

            <Image src={"/images/car-logo-black-text.svg"} alt="sample" height={100} width={100} />
            {/* <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={2}
                sx={{ alignItems: 'center' }}
            >
                <FormControl fullWidth sx={{ flexGrow: 1 }}>
                    <InputLabel id="brand-select-label">Category</InputLabel>
                    <Select
                        labelId="brand-select-label"
                        value={value}
                        onChange={handleChange}
                        label="Choose an Option"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: "8px",
                            minWidth: '250px',
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

                <TextField
                    variant="outlined"
                    placeholder="Enter number plate..."
                    fullWidth
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: "8px",
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack> */}
             <Stack   display={'flex'} flexDirection={'row'} gap={1} alignItems={'center'}>
            <WhereToVoteOutlinedIcon />

            <FormControl fullWidth>
  <InputLabel variant="standard" htmlFor="uncontrolled-native">
  Delivery Address
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option value={10}>Jeddah</option>
    <option value={20}>Jeddah</option>
    <option value={30}>Jeddah</option>
  </NativeSelect>
</FormControl>

</Stack>
</Stack>




            <Stack direction={{ md: 'row' }} justifyContent={{ md: 'space-between' }} alignItems={{ md: 'center' }}>
                <Image src={"/images/translation-icon.svg"} height={100} width={100} alt="sample" />
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: 'capitalize', width: { xs: '100%', sm: 'auto', md: 'auto' } }}
                >
                    Signing
                </Button>
                <IconButton
                    size="large"
                    aria-label="menu"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    <MenuItem onClick={handleClose}>About</MenuItem>
                    <MenuItem onClick={handleClose}>Services</MenuItem>
                    <MenuItem onClick={handleClose}>Contact</MenuItem>
                </Menu>
            </Stack>

        </Stack>
    )
}

export default FilterSection