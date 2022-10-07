import { Stack, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'

const Sections = ({section, setStateInfoProduct}) => {
    console.log(section)
    return (
        <Stack py='1em' sx={{display:'flex', flexWrap:'wrap', gap: '1em', width:'100%', alignItems:'center' }}>
            <Typography variant='h5'><strong>{section.title}</strong></Typography>
           <Stack display='flex' sx={{display:'flex', flexDirection: 'row', gap:'1em', justifyContent:'center', flexWrap: 'wrap'}}>

            {section.rows.map(product => 
            <ProductCard product={product} setStateInfoProduct={setStateInfoProduct}/>
                )}
           </Stack>
          
        </Stack>
    )
}

export default Sections