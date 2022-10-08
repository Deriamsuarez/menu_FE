import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'

const Sections = ({section, setStateInfoProduct, toggleDrawer, setModalInfo, setCounterBag, counterBag}) => {

    return (
        <Stack py='1em' sx={{display:'flex', flexWrap:'wrap', gap: '1em', width:'100%', alignItems:'center'}}>
            <Typography variant='h5'><strong>{section.title}</strong></Typography>
            <Divider/>
           <Stack display='flex' sx={{display:'flex', flexDirection: 'row', gap:'1em', justifyContent:'center', flexWrap: 'wrap'}}>

            {section.rows.map(product => 
            <ProductCard 
            key={product.name} 
            product={product} 
            setStateInfoProduct={setStateInfoProduct} 
            toggleDrawer={toggleDrawer} 
            setModalInfo={setModalInfo}
            setCounterBag={setCounterBag}
            counterBag={counterBag}
            />
                )}
           </Stack>
          
        </Stack>
    )
}

export default Sections