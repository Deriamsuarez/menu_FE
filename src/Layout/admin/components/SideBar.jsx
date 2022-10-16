import { Box, IconButton, Stack, SwipeableDrawer } from '@mui/material'
import React, { useState } from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import { NavLink } from 'react-router-dom';

const style = {
    activeStyle: {
        color: '#1976d2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    noActiveStyle: {
        color: 'rgba(0, 0, 0, 0.54)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        heigth: '40px',

        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',

            borderRadius: '3px'
        }
    },
    hoverIcon: {
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)',

            borderRadius: '3px'
        }
    }
}

const SideBar = ({ state, setState, toggleDrawer }) => {



    return (

        <Stack position='sticky' p={1} pt={11} pb={2} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh', top: '0', left: '0', boxShadow: '.25rem .25rem 0 rgba(0,0,0,.1)' }}>
            <Stack spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
             
                    <NavLink
                        to="admin/dashboard"
                        style={({ isActive }) =>
                            isActive ? style.activeStyle : style.noActiveStyle
                        }
                    >
                        <DashboardOutlinedIcon />
                    </NavLink>
                <NavLink
                    to="admin/products"
                    style={({ isActive }) =>
                        isActive ? style.activeStyle : style.noActiveStyle
                    }
                >
                    <FastfoodOutlinedIcon />
                </NavLink>
                <NavLink
                    to="admin/bills"
                    style={({ isActive }) =>
                        isActive ? style.activeStyle : style.noActiveStyle
                    }
                >
                    <ReceiptLongOutlinedIcon />
                </NavLink>
                <NavLink
                    to="admin/profiles"
                    style={({ isActive }) =>
                        isActive ? style.activeStyle : style.noActiveStyle
                    }
                >
                    <GroupsOutlinedIcon />
                </NavLink>
                <NavLink
                    to="admin/configuration"
                    style={({ isActive }) =>
                        isActive ? style.activeStyle : style.noActiveStyle
                    }
                >
                    <TuneOutlinedIcon />
                </NavLink>

        
            </Stack>
            <Stack>

                <Box>
                    <IconButton component="label">
                        <AccountCircleOutlinedIcon />
                    </IconButton>
                </Box>
            </Stack>
        </Stack>
    )
}

export default SideBar

  // <SwipeableDrawer
    //   anchor={'left'}
    //   open={state['left']}
    //   onClose={toggleDrawer('left', false)}
    //   onOpen={toggleDrawer('left', true)}
    // >
    // </SwipeableDrawer>