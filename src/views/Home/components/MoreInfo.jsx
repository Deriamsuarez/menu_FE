import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Typography  } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const MoreInfo = () => {
  return (
    <Stack p={4} >
   
    <Box sx={{display:'flex', alignItems: 'center'}}>
        <CardMedia
          component="img"
          height="140"
          width="140"
          image="vite.svg"
          alt="green iguana"
          sx={{border: '1px dashed black', borderRadius: '8px'}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>Lizard</strong>
          </Typography>
          <Typography variant="2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species
          </Typography>
        </CardContent>
    </Box>
        <Divider/>
    </Stack>
    )
}

export default MoreInfo