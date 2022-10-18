import { Stack, Typography, Fab, Box } from '@mui/material'
import React from 'react'
import ProfileTable from './components/ProfileTable'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';

const style = {
    
    boxSecond: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1em'
    }

  }

const Profiles = () => {
    return (
        <Stack spacing={4}>
            <Typography variant='h4'><strong>Perfiles</strong></Typography>
            <ProfileTable />
            <Box sx={style.boxSecond}>
            <Fab position= "fixed" color="primary" aria-label="add" sx={{position: 'absolute', right: 50, bottom: 50}}>
                <AddOutlinedIcon />
            </Fab>
            </Box>
        
        </Stack>
    )
}

export default Profiles