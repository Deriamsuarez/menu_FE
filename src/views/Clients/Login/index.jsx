import React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Stack } from '@mui/material';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { setClient } from '../../../store/slices/client.slice';
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';



const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const client = useSelector(state => state.client)


    const submitLogin = e => {
        e.preventDefault()
        const inputValue = e.target.name.value.trim()
        if (inputValue !== 0) {
            dispatch(setClient(inputValue))
            navigate('/')
        }
        
        e.target.name.value = ''

    }

    if(!client){
        return (
            <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', overflow: 'hidden' }}>
    
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <PersonPinIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Ingresar
                        </Typography>
                        <Box component="form" noValidate  onSubmit={submitLogin}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="Ingrese su nombre"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                size='small'
                            />
                            {/* <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="email"
                                label="Ingrese su correo electronico"
                                type="email"
                                id="email"
                                autoComplete="email"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
    
                            >
                                Acceder
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Stack>
    
        );
    }else{
        return <Navigate to='/' />
    }

}

export default Login