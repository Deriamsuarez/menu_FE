import { Badge, BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import React, { useRef, useState } from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CropFreeOutlinedIcon from '@mui/icons-material/CropFreeOutlined';
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';

import { useNavigate } from 'react-router-dom';

const NavigationBottom = ({ setCartState, counterBag, setCounterBag }) => {

    const [value, setValue] = useState(0);

    const cartOption = () => {
        setCounterBag(0);
        setCartState({ right: true })
    }

    const navigate  = useNavigate()


    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction onClick={() => navigate('/')} icon={<HomeOutlinedIcon />} />
                <BottomNavigationAction icon={<ReceiptLongOutlinedIcon />} />
                <BottomNavigationAction icon={<CropFreeOutlinedIcon />} />
                <BottomNavigationAction onClick={() => navigate('/orders')} icon={<RestaurantMenuOutlinedIcon />} />
                <Badge>
                    <BottomNavigationAction onClick={cartOption} icon={<LocalMallOutlinedIcon />} />
                </Badge>

            </BottomNavigation>
        </Paper>
    )
}

export default NavigationBottom