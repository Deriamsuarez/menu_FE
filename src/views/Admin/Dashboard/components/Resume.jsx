import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import LocalAtmRoundedIcon from '@mui/icons-material/LocalAtmRounded';
import GroupsIcon from '@mui/icons-material/Groups';
import FastfoodOutlinedIcon from '@mui/icons-material/FastfoodOutlined';
import AutoGraphOutlinedIcon from '@mui/icons-material/AutoGraphOutlined';

const Resume = () => {
    return (
        <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1em', justifyContent: 'space-between', }}>
            <Box sx={{ border: '1px solid #1976d2', padding: '2em', width: '100%', maxWidth: '350px', borderRadius: '0.8em', gap: '1em', display: 'flex', flexDirection: 'column', boxShadow: ' .25rem .25rem 0 rgba(0,0,0,.1)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h5'  color='primary'><strong>$30,000</strong></Typography>
                    <LocalAtmRoundedIcon fontSize='large' color='primary' />
                </Box>
                <Typography variant='subtitle'>Dinero facturado el dia de hoy</Typography>
            </Box>
            <Box sx={{ border: '1px solid #ed6c02', padding: '2em', width: '100%', maxWidth: '350px', borderRadius: '0.8em', gap: '1em', display: 'flex', flexDirection: 'column', boxShadow: ' .25rem .25rem 0 rgba(0,0,0,.1)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h5'  color='warning.main'><strong>48</strong></Typography>
                    <GroupsIcon fontSize='large' color='warning' />
                </Box>
                <Typography variant='subtitle'>Total de clientes | <strong>hoy</strong> </Typography>
            </Box>
            <Box sx={{ border: '1px solid #d32f2f', padding: '2em', width: '100%', maxWidth: '350px', borderRadius: '0.8em', gap: '1em', display: 'flex', flexDirection: 'column', boxShadow: ' .25rem .25rem 0 rgba(0,0,0,.1)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h5'  color='error.main'><strong>135</strong></Typography>
                    <FastfoodOutlinedIcon fontSize='large' color='error' />
                </Box>
                <Typography variant='subtitle'>Total de ordenes | <strong>hoy</strong> </Typography>
            </Box>
            <Box sx={{ border: '1px solid #2e7d32', padding: '2em', width: '100%', maxWidth: '350px', borderRadius: '0.8em', gap: '1em', display: 'flex', flexDirection: 'column', boxShadow: ' .25rem .25rem 0 rgba(0,0,0,.1)' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant='h5'  color='success.main'><strong>34.8%</strong></Typography>
                    <AutoGraphOutlinedIcon fontSize='large' color='success' />
                </Box>
                <Typography variant='subtitle'>Total de ordenes | <strong>hoy</strong> </Typography>
            </Box>

        </Stack>
    )
}

export default Resume