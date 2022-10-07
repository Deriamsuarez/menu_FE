import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React, { useRef, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';

const NavigationBottom = ({ setCartState, counterBag, setCounterBag }) => {

    const [value, setValue] = useState(0);

    const cartOption = () => {
        setCounterBag(0);
        setCartState({ right: true })
    }


    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction icon={<ReceiptLongOutlinedIcon />} />
                <BottomNavigationAction icon={<CropFreeOutlinedIcon />} />
                <BottomNavigationAction icon={<RestaurantMenuOutlinedIcon />} />
                <BottomNavigationAction icon={<StorefrontIcon />} />
            </BottomNavigation>
        </Paper>
    )
}

export default NavigationBottom