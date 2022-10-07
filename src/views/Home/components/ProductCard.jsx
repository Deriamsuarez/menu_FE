import React from 'react'
import { Box, Button, Card, CardMedia, Typography } from '@mui/material'


const ProductCard = ({ product }) => {
    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '350px', padding: '1em', border: 'gray 0.1px solid', borderRadius: '8px', boxShadow: '0 .125rem .25rem rgba(0,0,0,.075)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <CardMedia
                    component="img"

                    sx={{ height: 100, maxHeight: 100, maxWidth: 100, borderRadius: '8px' }}
                    image={product.img}
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0 1em' }}>
                    <Typography component="h6" variant="h6">
                        <strong>{product.name}</strong>
                    </Typography>
                    <Typography variant="2" color="text.secondary" component="div">
                        {product.description}
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ width: '100%', padding: '0.5em 0 0 0' }}>
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
                        <Button variant='text'>Leer mas</Button>
                        <Button variant='outlined'>Agregar</Button>

                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default ProductCard