import { Box, Divider, Fab, Stack, Typography } from '@mui/material'
import React from 'react'
import ProductTable from './components/ProductTable'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Products = () => {
    return (
        <Stack spacing={4}>
            <Typography variant='h4'><strong>Productos</strong></Typography>
            <ProductTable />
            <Fab position= "fixed" color="primary" aria-label="add" sx={{position: 'absolute', right: 50, bottom: 50}}>
                <AddOutlinedIcon />
            </Fab>
        </Stack>
    )
}

export default Products