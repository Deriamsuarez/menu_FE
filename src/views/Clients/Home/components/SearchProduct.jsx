import React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';


const SearchProduct = () => {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', my: '1em', maxWidth: 350 }}
        >
            {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                <MenuIcon />
            </IconButton> */}
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar productos"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton sx={{ p: '10px' }} aria-label="directions">
                <FilterAltOutlinedIcon color="disabled" />
            </IconButton>
        </Paper>
    );
}

export default SearchProduct