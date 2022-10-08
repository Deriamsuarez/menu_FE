import { Box, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import menu from '../../../utils/menu';

const FilterTabs = ({setFoods, foods}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    console.log(menu)
  
    return (
      <Box sx={{ maxWidth: '100%', bgcolor: 'background.paper' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab onClick={() => setFoods(menu.foodsMenu)} label='Todos'/>
          {menu.foodsMenu.map(section => <Tab key={section.title} onClick={() => setFoods([section])} label={section.title}/>)}
        </Tabs>
      </Box>
    );
}

export default FilterTabs