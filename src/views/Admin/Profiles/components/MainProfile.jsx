import { Box, Button, CardMedia, Fab, Typography } from '@mui/material'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import React from 'react'


const style = {
    boxSecond: {
        backgroundColor: '#f8f8f7', 
        borderRadius: '1em', 
        p: '2em', 
        width: '300px',
        height: 500,
       display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       marginTop:'20px',
       padding: '2em',
       gap: '0.5em'
    }

  }

const MainProfile = () => {
    return (
        <Box sx={style.boxSecond}>
              <CardMedia
             sx={{ width: "150px", backgroundColor: 'white', borderRadius:'50%' }}
             component="img"
             alt="qr"
             image="profile.png"
           />
             <Fab position= "stick" color="primary" aria-label="edit" size='small' sx={{position: 'absolute', right: 820, top: 215}}>
                <ModeEditOutlineOutlinedIcon />
            </Fab>
           <Typography variant='h5'>Anmy Moreno</Typography>
           <Typography variant='subtitle1' sx={{color:'#CDCDCD'}}>Admin</Typography>
           <Box sx={{ borderBottom:'1px solid #CDCDCD', display:'flex', width:'300px', height:'80px', boxShadow: '0px 0.8px 0.8px -6px black'}}>
                <Box sx={{borderRight:'1px solid #CDCDCD', width:'150px', height:'80px'}}>
                    <Typography variant='h5' align='center'>$1600</Typography>
                    <Typography variant='subtitle1' align='center' sx={{color:'#CDCDCD'}}>Total Ventas</Typography>
                </Box>
                <Box sx={{width:'150px', height:'80px'}}>
                    <Typography variant='h5' align='center'>54</Typography>
                    <Typography variant='subtitle1' align='center' sx={{color:'#CDCDCD'}}>Ordenes</Typography>
                </Box>
           </Box>
           <Button onClick={()=>navigate('/')} color="primary" size='small' sx={{ alignSelf: 'center' }}><AccountCircleOutlinedIcon  />Informacion Personal</Button>
           <Button onClick={()=>navigate('/')} color="primary" size='small' sx={{ alignSelf: 'center' }}><LockOpenOutlinedIcon />Usuario y Contrasena</Button>
           <Button onClick={()=>navigate('/')} color="primary" size='small' sx={{ alignSelf: 'center' }}><LogoutOutlinedIcon />Cerrar Session</Button>
        </Box>
        
       )
     }


export default MainProfile