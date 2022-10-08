import { Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Divider, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, {useState} from 'react'

const MoreInfo = ({ toggleDrawer, product }) => {

  const [count, setCount] = useState(1)
  return (
    <Stack p={4} >

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardMedia
          component="img"
          image={product.img}
          alt="green iguana"
          sx={{ height: 130, maxHeight: 130, maxWidth: 130, borderRadius: '8px' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <strong>{product.name}</strong>
          </Typography>
          <Typography variant="2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
      </Box>
      <Divider />
      <Box sx={{ width: '100%', padding: '0.5em 0' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '0.3em', }}>
            <Typography variant="2" color="text.secondary" component="div">
              Price:
            </Typography>
            <Typography variant="2" color="success.main" component="div">
              $<strong>{product.price}</strong>
            </Typography>

          </Box>
          <Box sx={{ gap: '0.3em' }}>
            <ButtonGroup
              disableElevation
              variant="contained"
              aria-label="Disabled elevation buttons"
            >
              <Button onClick={() => setCount(count - 1)} sx={{borderRight: '1px solid black'}}>-</Button>
              <Button variant='outlined'>{count}</Button>
              <Button onClick={() => setCount(count + 1)}>+</Button>
            </ButtonGroup>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', gap: '0.3em', }}>
            <Typography variant="2" color="text.secondary" component="div">
              SubTotal:
            </Typography>

          </Box>
          <Box sx={{ gap: '0.3em', marginTop: '1em' }}>
            <Typography variant="2" color="success.main" component="div">
              $<strong>{(product.price * count).toFixed(2)}</strong>
            </Typography>

          </Box>
        </Box>
      </Box>
      <Divider />

      <TextField
        label="Nota para la cocina"
        id="outlined-size-small"
        size="small"
        sx={{ my: '1em' }}
      />
      <Button variant='contained' color='success'>Agregar</Button>

    </Stack>
  )
}

export default MoreInfo