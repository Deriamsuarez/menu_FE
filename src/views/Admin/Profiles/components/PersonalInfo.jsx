import { Box, Button, InputAdornment, MenuItem, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import MainProfile from './MainProfile'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';




const style = {
    boxSecond: {
        backgroundColor: '#f8f8f7', 
        borderRadius: '30px', 
        p: '0.5em', 
        px: '1em',  
        minWidth: 300, 
        height: 500,
       display: 'flex',
       flexDirection: 'column',
       marginTop:'20px',
       padding: '2em',
       gap: '0.5em',
       
    }

  }
  

  const PersonalInfo = () => {
  const location2 = [
        {
          value: 'Republica Domenicana',
          label: 'Domenicana',
        },
        {
          value: 'Venezuela',
          label: 'Venezuela',
        },
        
      ];
      
     const [location, setLocation] = useState('DO')
      
     const  handleChange = (e) => {
         setLocation({value: e.target.value});
        }
  return (

      <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2em', justifyContent: 'center', }}>
          <MainProfile />
          <Box sx={style.boxSecond}>
              <Typography variant='h6' align='justify'>Informacion Personal</Typography>
              <FormControl >
                  <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                  >
                      <FormControlLabel value="female" control={<Radio />} label="Femenino" />
                      <FormControlLabel value="male" control={<Radio />} label="Masculino" />
                  </RadioGroup>
                  <Box sx={{ display: 'flex', gap: '1em', mt: '20px', mb: '20px' }}>
                      <TextField
                          id="outlined-name"
                          label="Nombre"
                          value={name}
                          size='small'
                      //   onChange={handleChange}
                      />
                      <TextField
                          id="outlined-name"
                          label="Apellido"
                          value={name}
                          size='small'
                      //   onChange={handleChange}
                      />

                  </Box>

                  <TextField
                      id="outlined-name"
                      label="Correo"
                      value={name}
                      fullWidth
                      size="small"
                  />
              <Box sx={{ display: 'flex', gap: '1em', mt: '20px', mb: '20px' }}>
                  <TextField
                      id="outlined-name"
                      label="Telefono"
                      value={name}
                      size='small'
                  //   onChange={handleChange}
                  />
                  <TextField
                      id="outlined-name"
                      label="Dia de Cumpleaños"
                      value={name}
                      size='small'
                  //   onChange={handleChange}
                  />

              </Box>
              <Box sx={{ display: 'flex', gap: '1em' }}>
                  <TextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      value={location}
                       onChange={handleChange}
                      size="small"
                  >
                      {location2.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                              {option.label}
                          </MenuItem>
                      ))}
                  </TextField>
                  <TextField
                      id="outlined-name"
                      label="Codigo Postal"
                      value={name}
                      size='small'
                  //   onChange={handleChange}
                  />

              </Box>

              <Button fullWidth variant='contained' color="primary" sx={{mt:'20px'}}>Guardar Cambios</Button>
              </FormControl>

          </Box>

      </Stack>
  )
}

export default PersonalInfo